import React, { useReducer } from 'react'

import Buttons from './Buttons'
import Display from './Display'
import mathReducer from '../reducers/mathReducer'
import MathContext from '../context/MathContext'

import './CalcApp.css'

function CalcApp() {
  const [equation, dispatch] = useReducer(mathReducer, {
    values: [0, 0],
  })

  return (
    <MathContext.Provider value={{ equation, dispatch }}>
      <div className="CalcApp">
        <Display />
        <Buttons />
      </div>
    </MathContext.Provider>
  )
}

export default CalcApp
