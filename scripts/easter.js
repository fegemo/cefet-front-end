const cheet = require('cheet.js')

function pathToAssets(assetType) {
  return (location.pathname.indexOf('/classes/') !== -1 ? '../../' : '')
    + `${assetType}/`
}

module.exports = function() {
  function toggleResolution() {
    let resolutions = document.querySelectorAll('.resolution')
    Array.from(resolutions).forEach(function(el) {
      el.classList.toggle('resolution-shown')
    })
  }

  cheet('i d d q d', toggleResolution)



  let commandPanelEl = document.createElement('aside')

  commandPanelEl.id = 'easter-egg-panel'
  document.getElementById('presentation-container').appendChild(commandPanelEl)

  cheet('↑ ↑ ↓ ↓ ← → ← → b a', {
    next: function(str, key) {
      commandPanelEl.classList.add('active')
      commandPanelEl.innerHTML += ' <span class="easter-egg-key">' + key + '</span> '
      const lastAddedKeyEl = commandPanelEl.querySelectorAll('.easter-egg-key:last-child')[0]
      setTimeout(function() {
        lastAddedKeyEl.classList.add('active')
      }, 0)
    },
    fail: function() {
      commandPanelEl.classList.remove('active')
      commandPanelEl.innerHTML = ''
    },
    done: function() {
      // play super mario audio from: http://themushroomkingdom.net/media/smw/wav
      const soundNames = ['1up', 'coin', 'egg-hatching']
      const chosenSoundIndex = Math.floor(Math.random() * soundNames.length)
      const chosenSoundName = `mario-${soundNames[chosenSoundIndex]}.wav`
      const chosenSoundPath = pathToAssets('audios') + chosenSoundName
      const audio = new Audio(chosenSoundPath)

      audio.play()

      // change avatars
      const authorPictures = document.querySelectorAll('.page-author-picture')
      const avatarThemes = ['paper', '8bit', 'block']
      const chosenThemeIndex = chosenSoundIndex % avatarThemes.length
      const chosenThemeName = `CHARACTER-${avatarThemes[chosenThemeIndex]}-avatar.png`
      const chosenThemePath = pathToAssets('images') + chosenThemeName
      let characterNames = ['mario', 'luigi']

      authorPictures.forEach(pictureEl => {
        let chosenCharacterIndex = Math.floor(Math.random() * characterNames.length)
        let chosenCharacterName = characterNames.splice(chosenCharacterIndex, 1)[0]
        pictureEl.src = chosenThemePath.replace(/CHARACTER/, chosenCharacterName)
        pictureEl.classList.add('shaking')
        pictureEl.addEventListener('animationend', () => pictureEl.classList.remove('shaking'))
      })

      // page header
      const pageHeaderEl = document.querySelector('#page-header')
      pageHeaderEl.classList.add('showing')

      // commands bar
      commandPanelEl.classList.add('success')
      commandPanelEl.addEventListener('animationend', () => {
        commandPanelEl.classList.remove('success')
        commandPanelEl.classList.remove('active')
        commandPanelEl.innerHTML = ''

        pageHeaderEl.classList.remove('showing')
      })

    }
  })

}
