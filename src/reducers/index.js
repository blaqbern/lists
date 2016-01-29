import list from './list';
import tags from './tags';
import visibilityFilter from './visibilityFilter';
import defaultTags from './defaultTags';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  defaultTags,
  list,
  tags,
  visibilityFilter,
});

export default rootReducer;
