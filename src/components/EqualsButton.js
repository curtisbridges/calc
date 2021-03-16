import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const EqualsButton = ({ span = 1, col }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (text) => {
    dispatch({ type: 'EQUAL_PRESSED' })
  }

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
