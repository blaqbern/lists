import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import AddNew from '../components/AddNew';
import Item from './Item';

function List({ items, handleAddItemClick }) {
  return (
    <div>
      <AddNew
        what="item"
        handleAddClick={handleAddItemClick}
      />
      <ul>
        {items.map(item =>
          <li key={item.id}><Item item={item} /></li>
        )}
      </ul>
    </div>
  );
}
const { array, func } = React.PropTypes;
List.propTypes = {
  items: array,
  handleAddItemClick: func,
};

function mapStateToProps(state) {
  return {
    items: state.list.filter(item =>
      state.visibilityFilter === 'SHOW_ALL' ||
      item.tags.includes(state.visibilityFilter)
    ),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddItemClick: text => dispatch(addItem(text)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
