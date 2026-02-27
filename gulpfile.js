const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yargs = require('yargs')

const { src, dest, series, parallel, watch } = require('gulp')
const open = require('open')
const log = require('fancy-log')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const terser = require('gulp-terser')
const stylus = require('gulp-stylus')
const buffer = require('vinyl-buffer')
const replace = require('gulp-replace')
const changed = require('gulp-changed')
const connect = require('gulp-connect')
const sourcemaps = require('gulp-sourcemaps')
const preprocess = require('gulp-preprocess')
const flatmap = require('gulp-flatmap')
const source = require('vinyl-source-stream')
const autoprefixer = require('gulp-autoprefixer').default
const del = require('delete')
const through = require('through')
const ghpages = require('gh-pages')
const merge = require('merge-stream')
const browserify = require('browserify')
const { materializeProps } = require('./scripts/utils')

const isDist = process.argv.indexOf('dev') === -1

function dateToday() {
  return new Date().toISOString().slice(0, 10)
}

function clean(cb) {
  del('dist', cb)
}

function js() {
  return browserify({
    entries: 'scripts/main.js',
    debug: !isDist
  })
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(isDist ? terser() : through())
    .on('error', console.log)
    .pipe(sourcemaps.write('./'))
    .pipe(dest('dist/build'))
    .pipe(connect.reload())
}

function jsClasses() {
  const destination = 'dist/scripts/classes'
  const files = glob.sync('scripts/classes/**/*.js')
  return merge(files.map(file =>
    browserify({
      entries: file,
      debug: !isDist
    })
      .bundle()
      .pipe(source(path.basename(file, '.js') + '.min.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(isDist ? terser() : through())
      .pipe(changed(destination))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(destination))
      .pipe(connect.reload())
  ))
}

function html() {
  return src('html/index.html')
    .pipe(
      preprocess({
        context: {
          NODE_ENV: isDist ? 'production' : 'development',
          DEBUG: true,
          FOLDER: '',
          TITLE: 'Laboratório de Programação Web',
          DESCRIPTION: 'Slides do curso de Laboratório de Programação Web' +
                       'para aprender HTML, CSS e JavaScript para se tornar' +
                       'um programador ninja.',
          LAST_MODIFICATION: dateToday()
        }
      })
    )
    .pipe(replace('{path-to-root}', '.'))
    .pipe(dest('dist'))
    .pipe(connect.reload())
}

function md() {
  const args = yargs(process.argv.slice(2)).parse()
  const chosenProfile = args.profile ?? 'coutinho-2026'
  let profilePath = ''
  let profileData = {}
  try {
    profilePath = path.join('.', 'profiles', chosenProfile + '.json')
    profileData = JSON.parse(fs.readFileSync(profilePath, 'utf-8'))
  } catch (e) {
    console.warn(`Não foi encontrado o arquivo ${profilePath} para carregar a  `
      + `ordem das aulas do perfil ${chosenProfile}. Portanto, as aulas não ` 
      + `serão processadas para incluir os arquivos de review.`)
  }
  
  const tasks = []

  tasks.push(
    src('README.md')
      .pipe(changed('dist'))
      .pipe(dest('dist'))
      .pipe(connect.reload())
  )

  tasks.push(
    src('classes/**/README.md')
      .pipe(changed('dist/classes'))
      .pipe(flatmap((stream, fileMeta) => {
        const className = path.basename(path.dirname(fileMeta.path))
        // 3. substitui PATH_TO_REVIEW_FILE pelo caminho correto do arquivo de review
        return stream.pipe(replace(/<\!\-\-\s*@include (PATH_TO_REVIEW_FILE)\s*-->/, function handleReplace() {
          // 1. encontra aula atual (ex: classes/aula-1.md -> aula-1)
          const classIndex = profileData.classes.indexOf(className)
          if (classIndex === -1) {
            log.warn(`Aula ${className} não encontrada no perfil `
              + `${chosenProfile}, portanto, não será processada para incluir o `
              + `arquivo de review.`)
            return ''
          }

          // 2. encontra aula anterior
          const previousClass = profileData.classes[classIndex - 1]
          if (!previousClass) {
            log.warn(`Aula anterior à ${className} segundo o perfil `
              + `${chosenProfile} não foi encontrada porque subtraindo 1 `
              + `resultou em ${classIndex - 1}. Portanto, a aula ${className} `
              + `não terá review.`)
            return ''
          }

          // 3. verifica se o arquivo de review existe
          const pathToReviewFile = path.join('classes', previousClass, 'review.md')
          if (!fs.existsSync(pathToReviewFile)) {
            log.warn(`A aula ${className} esperava incluir review da ` 
              + `${previousClass}. Contudo, essa aula anterior não tem um `
              + `arquivo classes/${previousClass}/review.md em sua pasta. Portanto, `
              + `não será incluído review para a aula ${className}.`)
            return ''
          }

          return `<!-- @include ../../${pathToReviewFile} -->`
        }))
      }))
      // 4. processa para preprocess incluir o arquivo de review
      .pipe(preprocess())
      .pipe(dest('dist/classes'))
      .pipe(connect.reload())
  )

  return merge(tasks)
}

function css() {
  return src('styles/main.styl')
    .pipe(changed('dist/build'))
    .pipe(
      stylus({
        'include css': true,
        paths: ['./node_modules'],
      })
    )
    .pipe(autoprefixer())
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(dest('dist/build'))
    .pipe(connect.reload())
}

function cssClasses() {
  const destination = 'dist/styles/classes'
  const tasks = []
  tasks.push(src(['styles/classes/**/*.css'])
    .pipe(changed(destination))
    .pipe(dest(destination))
    .pipe(connect.reload()))

  tasks.push(src(['styles/classes/**/*.styl'])
    .pipe(changed(destination))
    .pipe(
      stylus({
        'include css': true,
        paths: ['node_modules']
      })
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename(p => void (p.extname = '.min' + p.extname)))
    .pipe(dest(destination))
    .pipe(connect.reload()))

  return merge(tasks)
}

function manifest() {
  const destination = 'dist/favicon'
  return src('favicon/manifest.json')
    .pipe(changed(destination))
    .pipe(replace('{path-to-root}', '../..'))
    .pipe(dest(destination))
    .pipe(connect.reload())
}

function copierTaskGenerator(taskName, sourceLocation, destination) {
  const name = Symbol(taskName)
  const obj = {
    [name]: () =>
      src(sourceLocation)
        .pipe(changed(destination))
        .pipe(dest(destination))
        .pipe(connect.reload())
  }

  return obj[name]
}

const theme = copierTaskGenerator('theme', 'node_modules/bespoke-theme-beachday/dist/theme/**/*', 'dist/styles')
const images = copierTaskGenerator('images', 'images/**/*', 'dist/images')
const attachments = copierTaskGenerator('attachments', 'attachments/**/*', 'dist/attachments')
const assignments = copierTaskGenerator('assignments', 'assignments/**/*', 'dist/assignments')
const samples = copierTaskGenerator('samples', 'samples/**/*', 'dist/samples')
const fonts = copierTaskGenerator('fonts', 'fonts/**/*', 'dist/fonts')
const videos = copierTaskGenerator('videos', 'videos/**/*', 'dist/videos')
const audios = copierTaskGenerator('audios', 'audios/**/*', 'dist/audios')
const favicon = copierTaskGenerator('favicon', 'favicon/**/*', 'dist/favicon')
const classesStuff = copierTaskGenerator('classes-stuff', ['classes/**/*', '!classes/**/*.md'], 'dist/classes')

function getFolders(cwd, dir) {
  const targetDirectory = path.join(cwd, dir)
  return fs
    .readdirSync(targetDirectory)
    .filter(file => fs.statSync(path.join(targetDirectory, file)).isDirectory())
    .map(filePath => path.join(dir, filePath))
}

function build() {
  const folders = getFolders('.', 'classes')
    .concat('assignments/code-dojo-1')
    .concat('assignments/challenges-1')
  const tasks = folders.map(folder => {
    let classMetaData = {}
    try {
      const metaPath = path.join('.', folder, 'meta.json')
      classMetaData = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
    } catch (e) {
      log.info(`Não foi encontrado arquivo de metadados ('meta.json') `
        + `para a aula '${folder}', usando metadados padrão.`)
    }
  
    const metaData = {
      NODE_ENV: isDist ? 'production' : 'development',
      DEBUG: true,
      FOLDER: folder,
      SPECIFIC_TITLE: 'Aula ' + folder.substring(folder.lastIndexOf('/') + 1).toUpperCase(),
      TITLE() { 
        return `${this.SPECIFIC_TITLE} - LPW`
      },
      DESCRIPTION() {
        return this.TEACHES ? 
          `Apresentação de slides de aula sobre: ${this.TEACHES}` :
          'Slides do curso de Laboratório de Programação Web para ' + 
          'aprender HTML, CSS e JavaScript para se tornar ' + 
          'um programador ninja.'
      },
      LAST_MODIFICATION: dateToday(),
      ...classMetaData
    }

    return src(['html/index.html'])
      .pipe(
        preprocess({
          context: materializeProps(metaData)
        })
      )
      .pipe(replace('{path-to-root}', '../..'))
      .pipe(dest(path.join('dist', folder)))
    }
  )

  return merge(tasks)
}

function dev() {
  const port = 8080

  watch('scripts/*.js', js)
  watch('videos/**/*', videos)
  watch('audios/**/*', audios)
  watch('images/**/*', images)
  watch('samples/**/*', samples)
  watch('fonts/**/*', fonts)
  watch('html/**/*.html', html)
  watch('styles/*.styl', css)
  watch('styles/classes/*.styl', cssClasses)
  watch('favicon/**/*', favicon)
  watch('attachments/**/*', attachments)
  watch('assignments/**/*', assignments)
  watch('scripts/classes/*.js', jsClasses)
  watch('styles/classes/*.css', cssClasses)
  watch(['README.md', 'classes/**/*.md'], md)
  watch(['classes/**/*', '!classes/**/*.md'], classesStuff)

  connect.server({
    root: 'dist',
    livereload: true,
    port
  })
  open(`http://localhost:${port}/`)
}

function deploy(done) {
  ghpages.publish(path.join(__dirname, 'dist'), done)
}


exports.clean = clean
exports.build = series(
  parallel(
    js,
    md,
    css,
    html,
    theme,
    fonts,
    images,
    audios,
    videos,
    favicon,
    samples,
    manifest,
    jsClasses,
    cssClasses,
    attachments,
    assignments,
    classesStuff
  ),
  build
)
exports.dev = series(exports.build, dev)
exports.deploy = deploy