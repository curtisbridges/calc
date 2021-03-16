import React from 'react'

import EqualsButton from './EqualsButton'
import NumberButton from './NumberButton'
import BinaryOperationButton from './BinaryOperationButton'
import UnaryOperationButton from './UnaryOperationButton'


const Buttons = () => {
  return (
    <div className="Buttons">
      <UnaryOperationButton text="AC" value='AC' />
      <UnaryOperationButton text="±" value="+-" />
      <UnaryOperationButton text="％" value='%' />
      <BinaryOperationButton text="÷" value='/' />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <BinaryOperationButton text="⨉" value='*' />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <BinaryOperationButton text="-" value='-' />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <BinaryOperationButton text="+" value='+' />
      <NumberButton text="0" />
      <NumberButton text="." />

      <EqualsButton span={2} col={3} />
    </div>
  )
}

export default Buttons
