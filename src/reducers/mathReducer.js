const mathReducer = (state, action) => {
  // console.log('state', state)
  // console.log('action', action)

  const results = { ...state }

  switch (action.type) {
    case 'NUMBER_PRESSED': {
      if (results.operation) {
        // second operand
        if (hasRoom(results.values[1])) {
          results.values[1] = +(results.values[1] + `${action.value}`)
        }
      } else {
        // first operand
        if (hasRoom(results.values[0])) {
          results.values[0] = +(results.values[0] + `${action.value}`)
        }
      }
      return results
    }
    case 'BINARY_OPERATION_PRESSED': {
      results.operation = action.value
      return results
    }
    case 'UNARY_OPERATION_PRESSED': {
      switch (action.value) {
        case 'AC':
          return { values: [0, 0] }
        case '+-':
          return results.operation
            ? {
                ...results,
                values: [results.values[0], results.values[1] * -1],
              }
            : {
                ...results,
                values: [results.values[0] * -1, results.values[1]],
              }
        case '%':
          return results.operation
            ? {
                ...results,
                values: [results.values[0], results.values[1] / 100.0],
              }
            : {
                ...results,
                values: [results.values[0] / 100.0, results.values[1]],
              }
        default:
          return results
      }
    }
    case 'EQUAL_PRESSED': {
      const equation = `${results.values[0]} ${results.operation} ${results.values[1]}`
      // console.log('equation', equation)
      delete results.operation
      // eslint-disable-next-line no-eval
      results.values = [eval(equation), 0]
      return results
    }

    default:
      return state
  }
}

const maxLength = 9
function hasRoom(num) {
  return num.toString().length + 1 <= maxLength
}

export default mathReducer
