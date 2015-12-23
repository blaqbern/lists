import React from 'react';
import Item from './Item';

const List = ({
  name,
  items
}) => {
  return (
    <div className="list">
      <h2>{name}</h2>
      {items.map(
        (item) => <Item id={item.id} text={item.text} completed={item.completed} />
      )}
    </div>
  );
};
List.propTypes = {
  id: React.PropTypes.number,
  items: React.PropTypes.array,
  name: React.PropTypes.string,
};

export default List;
