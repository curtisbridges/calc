import React, { useReducer } from 'react'

import { create } from '../model/calculator'
import Buttons from './Buttons'
import Display from './Display'
import mathReducer from '../reducers/mathReducer'
import MathContext from '../context/MathContext'

import styles from './CalcApp.module.css'


function CalcApp() {
  const [model, dispatch] = useReducer(mathReducer, create())

  return (
    <MathContext.Provider value={{ model, dispatch }}>
      <div className={styles.CalcApp}>
        <Display />
        <Buttons />
      </div>
    </MathContext.Provider>
  )
}

export default CalcApp
