import item from './item';

let nextId = 0;
const list = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: nextId++,
          text: action.text,
          completed: false,
          tags: []
        }
      ];

    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];

    case 'TOGGLE_COMPLETED':
      return state.map((i) => item(i, action));

    default:
      return state;
  }
};

export default list;
