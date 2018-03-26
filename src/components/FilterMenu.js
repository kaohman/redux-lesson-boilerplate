import React from 'react'
import Filter from '../components/Filter'

const FilterMenu = () => {
  return (
    <section className="FilterMenu">
      <Filter filter="SHOW_ALL">All Todos</Filter>
      <Filter filter="SHOW_ACTIVE">Active</Filter>
      <Filter filter="SHOW_COMPLETED">Completed</Filter>
    </section>
  )
}

export default FilterMenu
