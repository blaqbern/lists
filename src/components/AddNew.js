import React from 'react';

function AddNew({ handleAddClick, what }) {
  let inputText;
  const handleClick = () => {
    handleAddClick(inputText.value.trim());
    inputText.value = '';
  };
  return (
    <div>
      <input
        ref={node => inputText = node}
        placeholder={`add new ${what}`}
      />
      <button onClick={handleClick}>
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
