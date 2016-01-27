import list from './list';
import tags from './tags';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  list,
  tags,
  visibilityFilter,
});

export default rootReducer;
