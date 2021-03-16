import React, { useContext, useCallback } from 'react'

import MathContext from '../context/MathContext'
import useEventListener from '../hooks/useEventListener'

const NumberButton = ({ value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = useCallback(
    (value) => {
      dispatch({ type: 'NUMBER_PRESSED', value })
    },
    [dispatch]
  )

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ key }) => {
      if (key === value) {
        buttonPressed(key)
      }
    },
    [buttonPressed, value]
  )

  // Add event listener using our hook
  useEventListener('keyup', handler, this)

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
