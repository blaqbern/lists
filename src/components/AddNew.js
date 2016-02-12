import React, { PropTypes } from 'react';
import styles from '../styles/add-new.css';

const AddNew = ({
  handleAddClick,
  what,
}) => {
  let inputText;
  return (
    <div>
      <input
        ref={(node) => inputText = node}
        placeholder={`add new ${what}`}
        className={styles.input}
      />
      <button
        onClick={
          () => {
            handleAddClick(inputText.value.trim());
            inputText.value = '';
          }
        }
        className={styles.button}
      >
        {'+'}
      </button>
    </div>
  );
};
AddNew.propTypes = {
  handleAddClick: PropTypes.func,
  what: PropTypes.string,
};

export default AddNew;
