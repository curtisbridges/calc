// Floating point regex
// ^([+-]?)(\d+).?(\d*)
const FLOATING_PT_REGEX = /^[+-]?([0-9]*[.])?[0-9]+/
const MAX_DISPLAY_LENGTH = 9
const MAX_DISPLAY_VALUE = 999999999

export const model = {
  values: [0, 0],
}

export const getDisplayValue = (model) => {
  const value = getValue(model)

  if (Math.abs(value) > MAX_DISPLAY_VALUE) {
    return value.toExponential(2)
  } else {
    return value.toLocaleString()
  }
}

export const getValue = (model) => {
  return model.operator ? +model.values[1] : +model.values[0]
}

export const appendValue = (model, value) => {
  // console.log('model', model)
  // console.log('value', value)

  if (model.operator) {
    // second operand
    if (hasRoom(model.values[1])) {
      const string = model.values[1].toString() + value.toString()
      model.values[1] = string.match(FLOATING_PT_REGEX)
        ? +string
        : model.values[1]
    }
  } else {
    // first operand
    if (hasRoom(model.values[0])) {
      const string = model.values[0].toString() + value.toString()
      model.values[0] = string.match(FLOATING_PT_REGEX)
        ? +string
        : model.values[0]
    }
  }

  return model
}

export const create = () => {
  return {
    values: [0, 0],
    operation: null,
  }
}

export const clear = (model) => {
  model.values = [0, 0]
  delete model.operator
}

function hasRoom(num) {
  return num.toString().length + 1 <= MAX_DISPLAY_LENGTH
}

export const operation = (model, operation) => {
  switch (operation) {
    case 'AC':
      return { values: [0, 0] }
    case '+-':
      return model.operator
        ? {
            ...model,
            values: [model.values[0], +model.values[1] * -1],
          }
        : {
            ...model,
            values: [+model.values[0] * -1, model.values[1]],
          }
    case '%':
      return model.operator
        ? {
            ...model,
            values: [model.values[0], +model.values[1] / 100.0],
          }
        : {
            ...model,
            values: [+model.values[0] / 100.0, model.values[1]],
          }
    default:
      model.operator = operation
      return model
  }
}

export const evaluate = (model) => {
  if (model.operator) {
    const equation = `${+model.values[0]} ${model.operator} ${+model.values[1]}`
    console.log('equation', equation)
    delete model.operator
    // eslint-disable-next-line no-eval
    model.values = [eval(equation), 0]
  }
  return model
}
