const initalState = 'SHOW_ALL'

const filterReducer = (state = initalState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filterReducer
