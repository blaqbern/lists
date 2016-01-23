import React from 'react';
import Item from './Item';

const List = ({
  items,
  handleItemClick
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
        </li>
      )}
    </ul>
  );
};

export default List;
