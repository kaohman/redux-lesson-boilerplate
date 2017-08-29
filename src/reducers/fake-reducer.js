const fakeReducer = (state= 'fake', action) => {
  switch (action.type) {
    case 'why_tho': {
      return 'something'
    }
    default: {
      return state
    }
  }
}

export default fakeReducer
