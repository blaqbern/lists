import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

function Filter({ filter, onFilterClick }) {
  return (
    <div onClick={onFilterClick}>
      {filter}
    </div>
  );
}
Filter.propTypes = { filter: PropTypes.string };

function mapDispatchToProps(dispatch, ownProps) {
  const { filter } = ownProps;
  return { onFilterClick: () => dispatch(setVisibilityFilter(filter)) };
}

export default connect(
  (state, ownProps) => Object.assign({}, ownProps),
  mapDispatchToProps
)(Filter);
