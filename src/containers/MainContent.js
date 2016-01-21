import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';

class MainContent extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div className="main-content">
        <input ref={(node) => this.newItemInput = node} />
        <button
          onClick={
            () => {
              store.dispatch({
                type: 'ADD_ITEM',
                text: this.newItemInput.value,
              });
              this.newItemInput.value = '';
            }
          }
        >
          {'+'}
        </button>
        {state.map((item) =>
          <Item
            key={item.id}
            text={item.text}
            completed={item.completed}
            handleItemClick={() =>
              store.dispatch({
                type: 'TOGGLE_COMPLETED',
                id: item.id
              })
            }
          />
        )}
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default MainContent;
