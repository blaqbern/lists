import * as tags from '../constants/defaultTags';

const defaults = [
  tags.TARGET,
  tags.HOME_DEPOT,
  tags.COSTCO,
  tags.AMAZON,
  tags.SAFEWAY,
  tags.GIANT,
];

const defaultTags = (state=[], action) => {
  switch(action.type) {
    case 'INIT':
      return defaults;

    default:
      return state;
  }
};

export default defaultTags;
