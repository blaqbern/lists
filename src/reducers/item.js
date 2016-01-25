const item = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      if(state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      }
      return state;

    case 'ADD_TAG':
      if(state.id === action.id) {
        return Object.assign({}, state,{
          tags: [
            ...state.tags,
            action.text
          ]
        });
      }
      return state;

    default:
      return state;
  }
};

export default item;
