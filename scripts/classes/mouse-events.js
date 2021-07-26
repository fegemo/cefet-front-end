let mouseEventsEl = document.querySelector('#mouse-events')

mouseEventsEl.querySelectorAll('li').forEach(triggeredEl => {
  // recupera o elemento onde vamos escrever que o evento foi disparado
  // (i.e., o <strong></strong>)
  let outputEl = triggeredEl.querySelector('strong')

  // remove o que quer que estivesse dentro dos <strong></strong>
  outputEl.innerHTML = ''
  outputEl.tiraImagemTimerId = []
  outputEl.classList.add('triggered-event')

  // determina de qual evento este li se trata (olha para o <code></code>)
  let evento = triggeredEl.querySelector('code').innerHTML

  // coloca o evento no li
  triggeredEl.addEventListener(evento, () => {

    // interrompe um possível timeout que poderia já estar correndo para o
    // anúncio deste evento
    outputEl.tiraImagemTimerId.forEach(clearTimeout)

    // coloca uma imagem nesse elemento
    outputEl.innerHTML = '📢'
    outputEl.classList.add('active')


    // registra uma callback para retirar a imagem
    outputEl.tiraImagemTimerId.push(setTimeout(() => {
      outputEl.classList.remove('active')
    }, 0))
    outputEl.tiraImagemTimerId.push(setTimeout(() => {
      outputEl.innerHTML = ''
    }, 2000))

  })
})
