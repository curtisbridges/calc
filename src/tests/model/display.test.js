import * as calc from '../../model/calculator'

test('default display should be 0', () => {
  const model = calc.create()
  expect(calc.getDisplayValue(model)).toBe('0')
})
