import { is } from '@magic/test'
import * as Quote from '../src/index.mjs'

const expectedHtml = ['i', { class: 'Quote' }, '“Testing”']

const html = true

export default [
  {
    fn: () => Quote.View('Testing'),
    html,
    expect: t => is.deep.equal(t, expectedHtml),
    info: 'Quote correctly wraps string and applies class string prop',
  },
  {
    fn: () => Quote.View({ quote: 'Testing' }),
    html,
    expect: t => is.deep.equal(t, expectedHtml),
    info: 'Quote correctly wraps string and applies class for prop.quote',
  },
  {
    fn: () => Quote.View({ quote: '' }),
    html,
    expect: undefined,
    info: 'Empty quote leads to no output',
  },
]
