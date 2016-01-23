import '../styles/item.css';
import React from 'react';

const Item = ({
  text,
  completed,
  handleClick
}) => {
  return (
    <div className="item">
      <p
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={handleClick}
      >
        {text}
      </p>
    </div>
  );
};

export default Item;
