const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        tags: [],
      };

    case 'TOGGLE_COMPLETED':
      return Object.assign({}, state, {
        completed: !state.completed
      });

    case 'ADD_TAG':
      const tag = action.text.replace(' ', '_').toUpperCase();
      if (state.tags.indexOf(tag) === -1) {
        return Object.assign({}, state,{
          tags: [
            ...state.tags,
            tag,
          ]
        });
      }
      return state;

    default:
      return state;
  }
};

export default item;
