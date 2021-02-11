import { is } from '@magic/test'
import * as Quote from '../src/index.mjs'

export default [
  {
    fn: () => Quote.View,
    expect: is.function,
    info: 'expect Quote.View to be a function',
  },
  {
    fn: () => Quote.style,
    expect: is.object,
    info: 'expect Quote.style to be an object'
  },
  {
    fn: () => Quote.style.fontStyle === 'italic',
    info: 'expect style to be italic',
  },
]
