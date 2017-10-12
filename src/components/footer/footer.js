import React from 'react'

import FilterLink from '../filterLink'

const Footer = () => (
  <footer>
    Show:
    {' '}
    <FilterLink filter='all' />
    {' '}
    <FilterLink filter='completed' />
    {' '}
    <FilterLink filter='active' />
  </footer>
)

export default Footer
