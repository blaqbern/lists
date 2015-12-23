'use strict';

import ReactDOM from 'react-dom';


const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
}

let store = createStore(render);

const Item = (
  id,
  name,
  onItemClick,
  completed
) => {
  <li onClick={onItemClick}>{item.name}</li>
}

const List = (
  items,
  name
) => {
  const handleItemClick = () => {
    store.dispatch({
      type: 'TOGGLE_COMPLETED',
      id
    });
  };
  <div className="list-box">
    <h3>{name}</h3>
    <ul className="list">
      {items.map((item) =>
        <Item id={item.id} name={item.name} onItemClick={handleItemClick}/>
      )}
    </ul>
  </div>
};
