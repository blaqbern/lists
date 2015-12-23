const item = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      if(state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

export default item;
