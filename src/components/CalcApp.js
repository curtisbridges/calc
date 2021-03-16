import React, { useReducer } from 'react'

import { create } from '../model/calculator'
import Buttons from './Buttons'
import Display from './Display'
import mathReducer from '../reducers/mathReducer'
import MathContext from '../context/MathContext'

import './CalcApp.css'

function CalcApp() {
  const [model, dispatch] = useReducer(mathReducer, create())

  return (
    <MathContext.Provider value={{ model, dispatch }}>
      <div className="CalcApp">
        <Display />
        <Buttons />
      </div>
    </MathContext.Provider>
  )
}

export default CalcApp
