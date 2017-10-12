import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter }) => (
  <NavLink exact to={`/${filter === 'all' ? '' : filter}`}
    activeStyle={{
      textDecoration: 'none'
    }}
  >
    {filter}
  </NavLink>
)

export default FilterLink
