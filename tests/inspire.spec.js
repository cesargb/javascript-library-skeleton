import { test, expectTypeOf } from 'vitest'
import { inspire } from "../dist/myLibrary.js"

test('inspire is a function', () => {
  expectTypeOf(inspire).toBeFunction()
})