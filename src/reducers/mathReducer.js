import { appendValue, evaluate, operation } from '../model/calculator'

const mathReducer = (state, action) => {
  // console.log('state', state)
  // console.log('action', action)

  const model = { ...state }

  switch (action.type) {
    case 'NUMBER_PRESSED':
      return appendValue(model, action.value)
    case 'OPERATION_PRESSED':
      return operation(model, action.value)
    case 'EQUAL_PRESSED':
      return evaluate(model)
    default:
      return state
  }
}

export default mathReducer
