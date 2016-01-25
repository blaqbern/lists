import item from './item';

const list = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];

    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.id);

    case 'TOGGLE_COMPLETED':
    case 'ADD_TAG':
      return state.map(
        (i) => {
          if(i.id === action.id) {
            return item(i, action);
          }
          return i;
        }
      );

    default:
      return state;
  }
};

export default list;
