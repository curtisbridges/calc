const mathReducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)

  switch (action.type) {
    case 'NUMBER_PRESSED':
      return state + action.value
    case 'OPERATION_PRESSED':
    case 'UNARY_OPERATION_PRESSED':
    case 'EQUAL_PRESSED':
    default:
      return state
  }
}

export default mathReducer
