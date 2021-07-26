let spec = require('specificity'),

  SpecificatorTabajara = function(inputEl, outputAEl, outputBEl,
    outputCEl, buttonEl) {
    this.inputEl = inputEl
    this.outputAEl = outputAEl
    this.outputBEl = outputBEl
    this.outputCEl = outputCEl
    this.buttonEl = buttonEl
  }

// attaches the event handlers
SpecificatorTabajara.prototype.start = function() {
  let specificator = this
  this.buttonEl.onclick = function() {
    specificator.calculate()
  }
}

SpecificatorTabajara.prototype.calculate = function() {
  // gets the value from the input
  const input = this.inputEl.value
  let result = spec.calculate(input)[0]

  if (result && result.specificity) {
    result = result.specificity.split(',')
  } else {
    result = [0, 0, 0, 0]
  }

  // sets the value of the 3 outputs
  this.outputAEl.innerHTML = `${result[1]}`
  this.outputBEl.innerHTML = `${result[2]}`
  this.outputCEl.innerHTML = `${result[3]}`
}


let options = {
    input: 'spec-tabajara-input',
    output: [
      'spec-tabajara-output-a',
      'spec-tabajara-output-b',
      'spec-tabajara-output-c'],
    button: 'spec-tabajara-button'
  },
  inputEl = document.getElementById(options.input)

if (inputEl) {
  new SpecificatorTabajara(
    inputEl,
    document.getElementById(options.output[0]),
    document.getElementById(options.output[1]),
    document.getElementById(options.output[2]),
    document.getElementById(options.button)
  ).start()
}
