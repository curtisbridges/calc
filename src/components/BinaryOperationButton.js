import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const BinaryOperationButton = ({ text, value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'OPERATION_PRESSED', value })
  }

  return (
    <button
      className="Button OperationButton BinaryOperationButton"
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {text}
    </button>
  )
}

export default BinaryOperationButton
