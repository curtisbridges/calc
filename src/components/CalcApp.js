import React, { useReducer } from 'react'

import Buttons from './Buttons'
import Display from './Display'
import mathReducer from '../reducers/mathReducer'
import MathContext from '../context/MathContext'

import './CalcApp.css'

function CalcApp() {
  const [display, dispatch] = useReducer(mathReducer, '0')

  return (
    <MathContext.Provider value={{ display, dispatch }}>
      <div className="CalcApp">
        <Display />
        <Buttons />
      </div>
    </MathContext.Provider>
  )
}

export default CalcApp
