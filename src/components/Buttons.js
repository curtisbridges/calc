import React from 'react'

import EqualsButton from './EqualsButton'
import NumberButton from './NumberButton'
import BinaryOperationButton from './BinaryOperationButton'
import UnaryOperationButton from './UnaryOperationButton'


const Buttons = () => {
  return (
    <div className="Buttons">
      <UnaryOperationButton text="AC" value="AC" />
      <UnaryOperationButton text="±" value="+-" />
      <UnaryOperationButton text="％" value="%" />
      <BinaryOperationButton text="÷" value="/" />
      <NumberButton value="7" />
      <NumberButton value="8" />
      <NumberButton value="9" />
      <BinaryOperationButton text="⨉" value="*" />
      <NumberButton value="4" />
      <NumberButton value="5" />
      <NumberButton value="6" />
      <BinaryOperationButton text="-" value="-" />
      <NumberButton value="1" />
      <NumberButton value="2" />
      <NumberButton value="3" />
      <BinaryOperationButton text="+" value="+" />
      <NumberButton value="0" />
      <NumberButton value="." />

      <EqualsButton span={1} col={4} />
    </div>
  )
}

export default Buttons
