import * as calc from '../../model/calculator'

test('should create default model', () => {
  const model = calc.create()
  expect(model).toEqual({ values: [0, 0] })
})
