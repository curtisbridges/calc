import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const UnaryOperationButton = ({ text = '' }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'UNARY_OPERATION_PRESSED', value: text })
  }

  return (
    <button
      className="Button OperationButton UnaryOperationButton"
      onClick={() => {
        buttonPressed(text)
      }}
    >
      {text}
    </button>
  )
}

export default UnaryOperationButton
