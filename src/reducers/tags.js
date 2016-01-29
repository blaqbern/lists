const tags = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TAG':
      const tag = action.text.replace(' ', '_').toUpperCase();
      if (state.indexOf(tag) === -1) {
        return [
          ...state,
          tag,
        ];
      }
      return state;

    default:
      return state;
  }
};

export default tags;
