import * as types from '../constants';

// Initialize state
export const init = () => ({ type: types.INIT });

// List actions
let nextId = 0;
export const addItem = (text) => {
  return {
    type: types.ADD_ITEM,
    id: nextId++,
    tags: [],
    text,
  };
};

export const removeItem = (id) => {
  return {
    type: types.REMOVE_ITEM,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
  };
};

// Item actions
export const toggleCompleted = (id) => {
  return {
    type: types.TOGGLE_COMPLETED,
    id,
  };
};

export const addTag = (id, text) => {
  return {
    type: types.ADD_TAG,
    id,
    text,
  };
};
