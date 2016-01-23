import React from 'react';

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

export default AddItem;
