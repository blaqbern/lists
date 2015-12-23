import list from './list';

let nextId = 0;
const lists = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: nextId++,
          name: action.name,
          items: [],
        }
      ];
    case 'REMOVE_LIST':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
    case 'ADD_ITEM':
      return state.map((l) => list(l, action));
    default:
      return state;
  }
};

export default lists;
