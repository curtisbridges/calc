import React, { useContext } from 'react'

import MathContext from '../context/MathContext'

const Display = () => {
  const { equation } = useContext(MathContext)

  function getDisplayValue(equation) {
    if (equation.operation) {
      return equation.values[1].toLocaleString()
    } else {
      return equation.values[0].toLocaleString()
    }
  }

  return <div className="Display">{getDisplayValue(equation)}</div>
}

export default Display
