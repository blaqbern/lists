import item from './item';

const list = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          tags: []
        }
      ];

    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);

    case 'TOGGLE_COMPLETED':
      return state.map((i) => item(i, action));

    case 'ADD_TAG':
      return state.map((i) => item(i, action));

    default:
      return state;
  }
};

export default list;
