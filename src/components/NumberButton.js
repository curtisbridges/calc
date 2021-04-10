import React, { useContext } from 'react'

import MathContext from '../context/MathContext'
import useEventListener from '../hooks/useEventListener'

import styles from './CalcApp.module.css'


const NumberButton = ({ value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = (value) => {
      dispatch({ type: 'NUMBER_PRESSED', value })
    }

  const handler = ({key}) => {
    console.log(key);
    if (key === value) {
      dispatch({ type: 'NUMBER_PRESSED', value })
    }
  }

  // Add event listener using our hook
  useEventListener('keyup', handler, this)

  return (
    <button
      className={`${styles.Button} ${styles.NumberButton} ${
        value === '0' ? styles.zero : ''
      }`}
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {value}
    </button>
  )
}

export default NumberButton
