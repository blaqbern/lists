import * as types from '../constants';

// Initialize state
export const init = () => ({ type: types.INIT });

// List actions
let nextId = 0;
export function addItem(text) {
  return {
    type: types.ADD_ITEM,
    id: nextId++,
    tags: [],
    text,
  };
}

export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
  };
}

// Item actions
export function toggleCompleted(id) {
  return {
    type: types.TOGGLE_COMPLETED,
    id,
  };
}

export function addTag(id, text) {
  return {
    type: types.ADD_TAG,
    id,
    text,
  };
}
