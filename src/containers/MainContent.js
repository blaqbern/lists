import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';
import * as actions from '../actions';

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
              store.dispatch(
                actions.addItem(this.newItemInput.value)
              );
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
              store.dispatch(
                actions.toggleCompleted(item.id)
              )
            }
          />
        )}
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default MainContent;
