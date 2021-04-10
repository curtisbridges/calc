import * as calc from '../../model/calculator'

test('1 + 1 = 2', () => {
  const model = calc.create()

  calc.appendValue(model, '1')
  calc.operation(model, '+')
  calc.appendValue(model, '1')
  calc.evaluate(model)

  expect(calc.getValue(model)).toBe(2)
})

test('11 + 1 = 12', () => {
  const model = calc.create()

  calc.appendValue(model, '1')
  calc.appendValue(model, '1')
  calc.operation(model, '+')
  calc.appendValue(model, '1')
  calc.evaluate(model)

  expect(calc.getValue(model)).toBe(12)
})
