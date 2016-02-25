import React from 'react';
import { connect } from 'react-redux';
import { addTag, removeItem, toggleCompleted } from '../actions';
import SelectBox from '../components/SelectBox';
import AddNew from '../components/AddNew';

function Item({
  item,
  handleItemClick,
  handleTagSelect,
  handleAddTagClick,
  handleRemoveClick,
  defaultTags,
}) {
  return (
    <div className="item">
      <p
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        onClick={handleItemClick}
      >
        {item.text}
      </p>
      <ul>
        {item.tags.map(
          (tag, index) => <li key={index}>{tag}</li>
        )}
      </ul>
      <SelectBox
        what={'tag'}
        options={defaultTags}
        handleSelect={handleTagSelect}
      />
      <AddNew
        what="custom tag"
        handleAddClick={handleAddTagClick}
      />
      <button onClick={handleRemoveClick}>
        {'remove'}
      </button>
    </div>
  );
}
const { object, func } = React.PropTypes;
Item.propTypes = {
  item: object,
  handleItemClick: func,
  handleTagSelect: func,
  handleAddTagClick: func,
  handleRemoveClick: func,
};

function mapStateToProps(state) {
  return {
    defaultTags: state.defaultTags,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { item } = ownProps;
  return {
    item,
    handleItemClick: () => dispatch(toggleCompleted(item.id)),
    handleTagSelect: selected => dispatch(addTag(item.id, selected)),
    handleAddTagClick: text => dispatch(addTag(item.id, text)),
    handleRemoveClick: () => dispatch(removeItem(item.id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
