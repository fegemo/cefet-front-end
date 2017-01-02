var fs = require('fs'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  del = require('del'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  replace = require('gulp-replace'),
  preprocess = require('gulp-preprocess'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  changed = require('gulp-changed'),
  glob = require('glob'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect'),            // Blacklisted, but whatever
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  through = require('through'),
  ghpages = require('gh-pages'),
  path = require('path'),
  merge = require('merge-stream'),
  opn = require('opn'),
  isDist = process.argv.indexOf('dev') === -1;


gulp.task('js', function() {
  return browserify({
      entries: 'scripts/main.js',
      debug: !isDist
    })
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(isDist ? uglify() : through())
      .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('js-classes', function(done) {
  var destination = 'dist/scripts/classes';

  glob('scripts/classes/**/*.js', function(err, files) {
    if (err) done(err);

    var tasks = files.map(function(file) {
      var fileName = path.basename(file);

      return browserify({
        entries: [file],
        debug: true
      })
      .bundle()
      .on('error', function(err) {
        gutil.log(gutil.colors.red('Browserify bundle error: ') + err);
        this.emit('end');
      })
      .pipe(source(fileName))
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(isDist ? uglify() : through())
        .on('error', function(err) {
          gutil.log(gutil.colors.red('Uglify error: ') + err.message);
          this.emit('end');
      })
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(destination))
      .pipe(connect.reload());
    });

    merge(tasks);
    done();
  });
});



gulp.task('html', function() {
  return gulp.src('html/index.html')
    .pipe(preprocess({
      context: {
        NODE_ENV: isDist ? 'production' : 'development',
        DEBUG: true
      }
    }))
    .pipe(isDist ? through() : plumber())
    .pipe(replace('{path-to-root}', '.'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('md', function() {
  var tasks = [];
  tasks.push(gulp.src('README.md')
    .pipe(changed('dist'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload()));
  tasks.push(gulp.src('classes/**/*.md')
    .pipe(changed('dist/classes'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/classes'))
    .pipe(connect.reload()));
  tasks.push(gulp.src('assignments/**/*.md')
    .pipe(changed('dist/assignments'))
    .pipe(isDist ? through() : plumber())
    .pipe(gulp.dest('dist/assignments'))
    .pipe(connect.reload()));
  return merge(tasks);
});

gulp.task('css', function() {
  return gulp.src('styles/main.styl')
    .pipe(changed('dist/build'))
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // allows CSS to be imported from node_modules
      'include css': true,
      'paths': ['./node_modules']
    }))
    .pipe(autoprefixer('last 2 versions', { map: true }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'))
    .pipe(connect.reload());
});

gulp.task('css-classes', function(done) {
  var destination = 'dist/styles/classes';

  glob('styles/classes/**/*.styl', function(err, files) {
    if (err) done(err);

    var tasks = files.map(function(file) {
      var fileName = path.basename(file);

      return gulp.src(file)
        .pipe(changed(destination))
        .pipe(isDist ? through() : plumber())
        .pipe(stylus({
          'include css': true,
          'paths': ['./node_modules']
        }))
        .pipe(autoprefixer('last 2 versions', { map: true }))
        .pipe(isDist ? csso() : through())
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(gulp.dest(destination))
        .pipe(connect.reload());
    });

    merge(tasks);
    done();
  });
});

gulp.task('attachments', function() {
  var destination = 'dist/attachments';
  return gulp.src('attachments/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination));
});

gulp.task('images', function() {
  var destination = 'dist/images';
  return gulp.src(['images/**/*', '!images/**/*.db'])
    .pipe(changed(destination))
    .pipe(gulp.dest(destination))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  var destination = 'dist/fonts';
  return gulp.src('fonts/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination))
    .pipe(connect.reload());
});

gulp.task('videos', function() {
  var destination = 'dist/videos';
  return gulp.src('videos/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination))
    .pipe(connect.reload());
});

gulp.task('favicon', function() {
  var destination = 'dist/favicon';
  return gulp.src('favicon/**/*')
    .pipe(changed(destination))
    .pipe(gulp.dest(destination))
    .pipe(connect.reload());
});

gulp.task('manifest', function() {
  var destination = 'dist/favicon';
  return gulp.src('favicon/manifest.json')
    .pipe(changed(destination))
    .pipe(replace('{path-to-root}', '../..'))
    .pipe(gulp.dest(destination))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  return del('dist');
});

function getFolders(cwd, dir) {
  var targetDirectory = path.join(cwd, dir);
  return fs.readdirSync(targetDirectory)
    .filter(function(file) {
      return fs.statSync(path.join(targetDirectory, file)).isDirectory();
    })
    .map(function(filePath) {
      return path.join(dir, filePath);
    });
}

gulp.task('build', ['js', 'js-classes',
  'html', 'md',
  'css', 'css-classes',
  'images',
  'fonts',
  'videos',
  'attachments',
  'favicon',
  'manifest'], function() {
  var folders = getFolders('.', 'classes').concat(getFolders('.', 'assignments')),
      tasks = folders.map(function(folder) {
        var t = [];
        t.push(gulp.src(['html/index.html'])
          .pipe(replace('{path-to-root}', '../..'))
          .pipe(gulp.dest(path.join('dist', folder))));
        return merge(t);
      });
  return merge(tasks);
});

gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('scripts/classes/*.js', ['js-classes']);
  gulp.watch('html/**/*.html', ['html']);
  gulp.watch(['README.md', 'classes/**/*.md', 'assignments/**/*.md'], ['md']);
  gulp.watch('styles/**/*.styl', ['css']);
  gulp.watch('styles/classes/*.styl', ['css-classes']);
  gulp.watch('images/**/*', ['images']);
});

gulp.task('dev', ['watch', 'build'], function(done) {
  const port = 8081;
  connect.server({
    root: ['dist'],
    port: port,
    livereload: true
  });

  opn(`http://localhost:${port}`, done);
});

gulp.task('deploy', function(done) {
  ghpages.publish(path.join(__dirname, 'dist'), { logger: gutil.log }, done);
});
