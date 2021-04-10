import React, { useContext } from 'react'

import { getDisplayValue } from '../model/calculator'
import MathContext from '../context/MathContext'

import styles from './CalcApp.module.css'


const Display = () => {
  const { model } = useContext(MathContext)

  return <div className={styles.Display}>{getDisplayValue(model)}</div>
}

export default Display
