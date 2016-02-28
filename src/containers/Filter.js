import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

function Filter({ active, filter, onFilterClick }) {
  return (
    <div
      onClick={onFilterClick}
      style={{ color: active ? '#6aa' : 'inherit' }}
    >
      {filter}
    </div>
  );
}
const { string } = React.PropTypes;
Filter.propTypes = { filter: string };

function mapStateToProps(state, ownProps) {
  const { filter } = ownProps;
  return {
    active: state.visibilityFilter === filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { filter } = ownProps;
  return { onFilterClick: () => dispatch(setVisibilityFilter(filter)) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
