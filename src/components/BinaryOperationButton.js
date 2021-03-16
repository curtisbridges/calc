import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const BinaryOperationButton = ({ text = '' }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'BINARY_OPERATION_PRESSED', text })
  }

  return (
    <button
      className="Button OperationButton BinaryOperationButton"
      onClick={() => {
        buttonPressed(text)
      }}
    >
      {text}
    </button>
  )
}

export default BinaryOperationButton
