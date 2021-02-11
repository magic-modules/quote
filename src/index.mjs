export const View = c => {
  // make sure both Quote('quote') and Quote({ quote: 'quote' }) work
  if (c.hasOwnProperty('quote')) {
    c = c.quote
  }

  // return nothing if there is no quote
  if (!c) {
    return
  }

  return i({ class: 'Quote' }, `“${c}”`)
}

export const style = {
  fontStyle: 'italic',
}
