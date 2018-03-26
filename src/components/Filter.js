import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const Filter = ({ active, children, handleClick }) => {
  if (active) {
    return <span>{ children }</span>
  }

  return (
    <a  href="#"
        onClick={ (e) => {
          e.preventDefault()
          handleClick()
        }}
    >
      { children }
    </a>
  )
}

const mapStateToProps = (state, props) => ({
  active: props.filter === state.setFilter
})

const mapDispatchToProps = (dispatch, props) => ({
  handleClick: () => dispatch(setFilter(props.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
