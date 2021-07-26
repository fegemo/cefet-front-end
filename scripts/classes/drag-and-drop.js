let dragTarget = document.getElementById('dnd-target'),
  draggables = document.getElementsByClassName('dnd-draggable')

for (let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', this.id)
  })
}

dragTarget.addEventListener('dragover', function(e) {
  e.preventDefault()
  this.classList.add('dnd-over')
  e.dataTransfer.dropEffect = 'move'
})


dragTarget.addEventListener('dragenter', function(e) {
  e.preventDefault()
  this.classList.add('dnd-over')
})

dragTarget.addEventListener('dragleave', function() {
  this.classList.remove('dnd-over')
})

dragTarget.addEventListener('drop', function(e) {
  e.preventDefault()
  let el = document.getElementById(e.dataTransfer.getData('text/plain'))
  this.appendChild(el)
  el.classList.add('dnd-destroying')
  dragTarget.classList.remove('dnd-over')
})
