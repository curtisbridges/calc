import React, { useContext, useEffect } from 'react'

import MathContext from '../context/MathContext'

const Display = () => {
  const { display } = useContext(MathContext)

  useEffect(() => {
    console.log('display', display);
  }, [display])

  return <div className="Display">{display}</div>
}

export default Display
