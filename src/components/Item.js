import '../styles/item.css';
import React, { PropTypes } from 'react';

const Item = ({
  text,
  completed,
  handleClick,
  tags,
}) => {
  return (
    <div className="item">
      <p
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
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
