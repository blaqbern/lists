import React, { PropTypes } from 'react';
import styles from '../styles/Item.css';

const Item = ({
  text,
  completed,
  handleClick,
  tags,
}) => {
  return (
    <div className={styles.root}>
      <p
        className={completed
          ? styles.completed
          : styles.pending
        }
        onClick={handleClick}
      >
        {text}
      </p>
      <ul>
        {tags.map(
          (tag, index) => <li key={index}>{tag}</li>
        )}
      </ul>
    </div>
  );
};
Item.propTypes = {
  completed: PropTypes.bool,
  handleClick: PropTypes.func,
  tags: PropTypes.array,
  text: PropTypes.string,
};

export default Item;
