import '../styles/item.css';
import React from 'react';

const Item = ({
  text,
  completed,
  handleItemClick
}) => {
  return (
    <div className="item">
      <p
        onClick={handleItemClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </p>
    </div>
  );
};

export default Item;
