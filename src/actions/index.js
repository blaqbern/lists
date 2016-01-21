import * as types from '../constants';

export const addItem = (text) => {
  return {
    type: types.ADD_ITEM,
    text
  };
};

export const toggleCompleted = (id) => {
  return {
    type: types.TOGGLE_COMPLETED,
    id
  };
};
