module.exports = function() {
  function getChildNumber(node) {
    return Array.prototype.indexOf.call(node.parentElement.children, node);
  }

  function resolveOperand(operand) {
    let elements = [],
      result = operand;
    switch (typeof operand) {
      case 'string':
        try {
          elements = document.querySelectorAll(operand);
        } catch (error) {
          // ignores the error: the operand was not a selector
        }
        if (elements && elements.length == 1) {
          if (typeof elements[0].value !== 'undefined') {
            result = elements[0].value;
          } else {
            result = elements[0].innerHTML;
          }
        } else {
          result = operand;
        }
        break;
      case 'bool':
      case 'number':
        result = operand;
        break;
      default:
        result = null;
    }
    return result;
  }

  let operators = {
    'equal': function(condition) {
      // all operands must be equal... the current must equal the previous
      return condition.operands.reduce((prev, current) => {
        let resolvedOperand = resolveOperand(current);
        return prev == resolveOperand(current) ? resolvedOperand : false;
      }, resolveOperand(condition.operands[0]));
    },

    'contains': function(condition, ignoreCase) {
      let [firstOperand, ...remainingOperands] = condition.operands;
      firstOperand = resolveOperand(firstOperand)
      if (ignoreCase) {
        firstOperand = firstOperand.toLocaleLowerCase();
      }

      // the first operand must contain all the others
      return remainingOperands.every(operand => {
        let resolvedOperand = resolveOperand(operand);
        if (ignoreCase) {
          resolvedOperand = resolvedOperand.toLocaleLowerCase();
        }
        return firstOperand.indexOf(resolvedOperand) !== -1;
      });

    }
  }

  function checkCondition(configEl) {
    let config = JSON.parse(configEl.value);
    let satisfies = false;

    satisfies = config.every(function(current, index) {
      let result;
      switch (current.operation) {
        case 'equal':
          result = operators.equal(current);
          break;
        case 'contains':
          result = operators.contains(current, false);
          break;
        case 'containsIgnoreCase':
          result = operators.contains(current, true);
          break;
        case 'leq':
        case 'geq':
        case 'lt':
        case 'gt':
        case 'nequal':
          throw new Error(`bespoke-proceed: operation ${current.operation}
            not yet implemented`);
          break;
      }
      return result;
    });

    return satisfies;
  }

  return function(deck) {

    // gets all conditions
    let conditions = Array.from(document.querySelectorAll('.bespoke-proceed-condition'));

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
          slideIndex = getChildNumber(slideEl);

        prev[slideIndex] = {
          configEl: current,
          satisfied: false
        };

        return prev;
      }, {});

      // on deck.next event, check if we are in a slide with a condition,
      // check the condition and conditionally prevent proceeding
      deck.on('next', function(e) {
        let conditionForCurrentSlide = conditions[e.index];
        if (conditionForCurrentSlide && !conditionForCurrentSlide.satisfied) {
          conditionForCurrentSlide.satisfied = checkCondition(conditionForCurrentSlide.configEl);

          return conditionForCurrentSlide.satisfied;
        }
      });
    }
  }
}
