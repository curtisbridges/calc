import { appendValue, evaluate, operation } from '../model/calculator'

const mathReducer = (state, action) => {
  // console.log('state', state)
  // console.log('action', action)

  const model = { ...state }

  // console.log(action.type, model)
  switch (action.type) {
    case 'NUMBER_PRESSED':
      return appendValue(model, action.value)
    case 'OPERATION_PRESSED':
      return operation(model, action.value)
    case 'EQUAL_PRESSED':
      return evaluate(model)
    default:
      return model
  }
}

export default mathReducer
