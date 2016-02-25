import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

function Filter({ filter, onFilterClick }) {
  return (
    <div onClick={onFilterClick}>
      {filter}
    </div>
  );
}
const { string } = React.PropTypes;
Filter.propTypes = { filter: string };

function mapDispatchToProps(dispatch, ownProps) {
  const { filter } = ownProps;
  return { onFilterClick: () => dispatch(setVisibilityFilter(filter)) };
}

export default connect(
  (state, ownProps) => Object.assign({}, ownProps),
  mapDispatchToProps
)(Filter);
