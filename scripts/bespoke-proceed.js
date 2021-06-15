module.exports = function() {
  function getChildNumber(node) {
    return Array.prototype.indexOf.call(node.parentElement.children, node)
  }

  function resolveOperand(operand) {
    let elements = [],
      result = operand,
      element = null
    switch (typeof operand) {
    case 'string':
      try {
        elements = document.querySelectorAll(operand)
      } catch (error) {
        // ignores the error: the operand was not a selector
      }
      if (elements && elements.length === 1) {
        element = elements[0]
        if (typeof elements[0].value !== 'undefined') {
          result = elements[0].value
        } else {
          result = elements[0].innerHTML
        }
      } else {
        result = operand
      }
      break
    case 'bool':
    case 'number':
      result = operand
      break
    default:
      result = null
    }
    return { result, element }
  }

  let operators = {
    'equal': function(condition) {
      // all operands must be equal... the current must equal the previous
      return condition.operands.reduce((prev, current) => {
        let resolvedOperand = resolveOperand(current).result
        // eslint-disable-next-line eqeqeq
        return prev == resolveOperand(current).result ? resolvedOperand : false
      }, resolveOperand(condition.operands[0]).result)
    },

    'contains': function(condition, ignoreCase) {
      let [firstOperand, ...remainingOperands] = condition.operands
      firstOperand = resolveOperand(firstOperand).result
      if (ignoreCase) {
        firstOperand = firstOperand.toLocaleLowerCase()
      }

      // the first operand must contain all the others
      return remainingOperands.every(operand => {
        let resolvedOperand = resolveOperand(operand).result
        if (ignoreCase) {
          resolvedOperand = resolvedOperand.toLocaleLowerCase()
        }
        return firstOperand.indexOf(resolvedOperand) !== -1
      })

    }
  }

  function checkCondition(configEl) {
    let config = JSON.parse(configEl.value)
    let satisfies = false

    satisfies = config.every(function(current) {
      let result
      switch (current.operation) {
      case 'equal':
        result = operators.equal(current)
        break
      case 'contains':
        result = operators.contains(current, false)
        break
      case 'containsIgnoreCase':
        result = operators.contains(current, true)
        break
      case 'leq':
      case 'geq':
      case 'lt':
      case 'gt':
      case 'nequal':
        throw new Error(`bespoke-proceed: operation ${current.operation}
            not yet implemented`)
      }
      return result
    })

    return satisfies
  }

  function verifyConditionUponInput(configEl) {
    let config = JSON.parse(configEl.value)
    config.forEach(condition => {
      let inputOperandEl = condition.operands.map(o => resolveOperand(o).element).find(o => o instanceof HTMLElement)

      if (inputOperandEl) {
        inputOperandEl.addEventListener('input', e => {

          if (checkCondition(configEl)) {
            e.currentTarget.classList.add('bespoke-proceed-success')
            e.currentTarget.blur()
          }
        })
      }
    })
  }

  return function(deck) {

    // gets all conditions
    let conditions = Array.from(document.querySelectorAll('.bespoke-proceed-condition'))

    if (conditions) {
      // turns conditions array into object like:
      // {
      //   25: {
      //     configEl: htmlEl(.bespoke-proceed-condition),
      //     satisfied: false
      //   }
      // }
      conditions = conditions.reduce(function(prev, current) {
        let slideEl = current.closest('.bespoke-slide'),
          slideIndex = getChildNumber(slideEl)

        prev[slideIndex] = {
          configEl: current,
          satisfied: false
        }

        return prev
      }, {})


      // set input lisenters on every condition input to unlock its proceed
      // button
      deck.on('slide', e => {
        let conditionForCurrentSlide = conditions[e.index]

        if (conditionForCurrentSlide && !conditionForCurrentSlide.satisfied) {
          verifyConditionUponInput(conditionForCurrentSlide.configEl)
        }
      })

      // on deck.next event, check if we are in a slide with a condition,
      // check the condition and conditionally prevent proceeding
      deck.on('next', function(e) {
        let conditionForCurrentSlide = conditions[e.index]


        if (conditionForCurrentSlide && !conditionForCurrentSlide.satisfied) {
          conditionForCurrentSlide.satisfied = checkCondition(conditionForCurrentSlide.configEl)
          return conditionForCurrentSlide.satisfied
        }
      })
    }
  }
}
