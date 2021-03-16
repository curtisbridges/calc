import React from 'react'

import EqualsButton from './EqualsButton'
import NumberButton from './NumberButton'
import BinaryOperationButton from './BinaryOperationButton'
import UnaryOperationButton from './UnaryOperationButton'


const Buttons = () => {
  return (
    <div className="Buttons">
      <UnaryOperationButton text="AC" />
      <UnaryOperationButton text="±" />
      <UnaryOperationButton text="％" />
      <BinaryOperationButton text="÷" />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <BinaryOperationButton text="⨉" />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <BinaryOperationButton text="−" />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <BinaryOperationButton text="ᐩ" />
      <NumberButton text="0" />
      <NumberButton text="." />

      <EqualsButton span={2} col={3} />
    </div>
  )
}

export default Buttons
