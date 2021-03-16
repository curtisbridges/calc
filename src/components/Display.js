import React, { useContext } from 'react'

import { getDisplayValue } from '../model/calculator'
import MathContext from '../context/MathContext'

const Display = () => {
  const { model } = useContext(MathContext)

  return <div className="Display">{getDisplayValue(model)}</div>
}

export default Display
