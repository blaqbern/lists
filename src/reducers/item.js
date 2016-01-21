const item = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      if(state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      }
      return state;

    default:
      return state;
  }
};

export default item;
