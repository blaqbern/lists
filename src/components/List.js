import React from 'react';
import Item from './Item';

const List = ({
  items,
  handleItemClick,
  handleRemoveClick
}) => {
  return (
    <ul>
      {items.map((item) =>
        <li key={item.id}>
          <Item
            text={item.text}
            completed={item.completed}
            handleClick={() => handleItemClick(item.id)}
          />
          <button onClick={() => handleRemoveClick(item.id)}>
            {'remove'}
          </button>
        </li>
      )}
    </ul>
  );
};

export default List;
