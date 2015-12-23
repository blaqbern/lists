import {combineReducers} from 'redux';
import lists from './lists';
import list from './list';
import item from './item';

const rootReducer = combineReducers({
  lists,
  list,
  item,
});

export default rootReducer;
