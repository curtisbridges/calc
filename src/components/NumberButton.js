import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const NumberButton = ({ value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'NUMBER_PRESSED', value })
  }

  return (
    <button
      className="Button NumberButton"
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {value}
    </button>
  )
}

export default NumberButton
