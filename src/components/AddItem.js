import React, { PropTypes } from 'react';

const AddItem = ({
  handleAddItem
}) => {
  let newItemInput;
  return (
    <div>
      <input ref={(node) => newItemInput = node} />
      <button
        onClick={
          () => {
            handleAddItem(newItemInput.value);
            newItemInput.value = '';
          }
        }
      >
        {'+'}
      </button>
    </div>
  );
};
AddItem.propTypes = { handleAddItem: PropTypes.func };

export default AddItem;
