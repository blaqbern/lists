import React from 'react';

function AddNew({ handleAddClick, what }) {
  let inputText;
  return (
    <div>
      <input
        ref={node => inputText = node}
        placeholder={`add new ${what}`}
      />
      <button
        onClick={
          () => {
            handleAddClick(inputText.value.trim());
            inputText.value = '';
          }
        }
      >
        {'+'}
      </button>
    </div>
  );
}
const { func, string } = React.PropTypes;
AddNew.propTypes = {
  handleAddClick: func,
  what: string,
};

export default AddNew;
