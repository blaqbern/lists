import * as types from '../constants';

// List actions
let nextId = 0;
export const addItem = (text) => {
  return {
    type: types.ADD_ITEM,
    id: nextId++,
    text
  };
};

export const removeItem = (id) => {
  return {
    type: types.REMOVE_ITEM,
    id
  };
};

// Item actions
export const toggleCompleted = (id) => {
  return {
    type: types.TOGGLE_COMPLETED,
    id
  };
};
