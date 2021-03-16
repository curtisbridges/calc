import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const UnaryOperationButton = ({ text, value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (value) => {
    dispatch({ type: 'OPERATION_PRESSED', value })
  }

  return (
    <button
      className="Button OperationButton UnaryOperationButton"
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {text}
    </button>
  )
}

export default UnaryOperationButton
