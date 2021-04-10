import React, { useContext, useCallback } from 'react'

import MathContext from '../context/MathContext'
import useEventListener from '../hooks/useEventListener'

import styles from './CalcApp.module.css'

const BinaryOperationButton = ({ text, value }) => {
  const { dispatch } = useContext(MathContext)

  const buttonPressed = useCallback(() => {
    dispatch({ type: 'OPERATION_PRESSED', value })
  }, [dispatch, value])

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ key }) => {
      switch (key) {
        case '%':
        case '/':
        case 'x':
        case 'X':
        case '*':
        case '-':
        case '+':
          if (key === value) {
            buttonPressed(value)
          }
          break
        default:
          // console.log('BinaryOperationButton ignoring key', key)
      }
    },
    [buttonPressed, value]
  )

  // Add event listener using our hook
  useEventListener('keyup', handler, this)

  return (
    <button
      className={`${styles.Button} ${styles.OperationButton} ${styles.BinaryOperationButton}`}
      onClick={() => {
        buttonPressed(value)
      }}
    >
      {text}
    </button>
  )
}

export default BinaryOperationButton
