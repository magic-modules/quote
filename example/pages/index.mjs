export const View = state => [
  h1(state.title),

  p([
    'this is the ',
    Link({ text: '@magic-modules', to: 'https://github.com/magic-modules' }),
    ' Quote component.',
  ]),

  p('It adds “” around the quote and sets font - style: italic.'),

  Quote('@magic-modules/quote'),

  h2({ id: 'installation' }, 'installation'),

  Pre(`npm install --save-exact @magic-modules/quote`),

  h2({ id: 'usage' }, 'usage'),

  h3('Markdown:'),

  Pre(`<Quote quote="Insightful Quote String"></Quote>`),

  h3('Javascript:'),
  Pre(`Quote('Insightful Quote String')`),

  p('renders'),

  Quote('Insightful Quote String'),

  h2('source'),

  p([
    'the source for this page is in the ',
    Link({
      text: 'example directory',
      to: 'https://github.com/magic-modules/quote/tree/master/example',
    }),
    ' and gets built and published to github using ',
    Link({ text: '@magic', to: 'https://github.com/magic/core' }),
  ]),
]
