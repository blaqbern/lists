const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return 'SHOW_ALL';

    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFilter;
