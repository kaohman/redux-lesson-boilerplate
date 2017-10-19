const fakeReducer = (state = [], action) => {
  switch(action.type) {
    case 'NOT_REAL':
      return [] // we make a copy and add to it
    default:
      return ['whytho'];
  };
};

export default fakeReducer;
