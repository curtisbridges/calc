import React, { useContext, useCallback } from 'react'

import MathContext from '../context/MathContext'
import useEventListener from '../hooks/useEventListener'

import styles from './CalcApp.module.css'


const UnaryOperationButton = ({ text, value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = useCallback(() => {
    dispatch({ type: 'OPERATION_PRESSED', value })
  }, [dispatch, value])

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ key }) => {
      switch (key) {
        case 'AC':
        case 'C':
        case 'c':
        case 'Escape':
          if (value === 'AC') {
            buttonPressed(value)
          }
          break
        default:
          if (key === value) {
            buttonPressed(value)
          }
      }
    },
    [buttonPressed, value]
  )

  // Add event listener using our hook
  useEventListener('keyup', handler, this)

  return (
    <button
      className={`${styles.Button} ${styles.OperationButton} ${styles.UnaryOperationButton}`}
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {text}
    </button>
  )
}

export default UnaryOperationButton
