import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const NumberButton = ({ text = '' }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'NUMBER_PRESSED', value: text })
  }

  return (
    <button
      className="Button NumberButton"
      onClick={() => {
        buttonPressed(text)
      }}
    >
      {text}
    </button>
  )
}

export default NumberButton
