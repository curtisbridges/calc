import React, { useContext, useCallback } from 'react'

import MathContext from '../context/MathContext'
import useEventListener from '../hooks/useEventListener'

const EqualsButton = ({ span = 1, col }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = useCallback(() => {
    dispatch({ type: 'EQUAL_PRESSED' })
  }, [dispatch])

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        buttonPressed(key)
      }
    },
    [buttonPressed]
  )

  // Add event listener using our hook
  useEventListener('keyup', handler, this)

  return (
    <button
      // style={getColStartStyle(col)}
      className={`Button BinaryOperationButton ${getSpan(span)} ${getColStart(
        col
      )}`}
      onClick={() => {
        buttonPressed()
      }}
    >
      =
    </button>
  )

  function getSpan(span) {
    return span === 2 ? 'span2' : ''
  }

  function getColStart(col) {
    return col === 4 ? 'col4' : ''
  }

  // function getColStartStyle(col) {
  //   return col ? {  gridColumnStart: `'${col}'`  } : {}
  // }
}

export default EqualsButton
