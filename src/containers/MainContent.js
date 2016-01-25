import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';
import AddItem from '../components/AddItem';
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
        <AddItem
          handleAddItem={
            (text) => store.dispatch(
              actions.addItem(text)
            )
          }
        />
        <ul>
          {state.map((item) =>
            <li key={item.id}>
              <Item
                text={item.text}
                completed={item.completed}
                handleClick={
                  () => store.dispatch(
                    actions.toggleCompleted(item.id)
                  )
                }
                tags={item.tags}
              />
              <AddItem
                handleAddItem={
                  (text) => store.dispatch(
                    actions.addTag(item.id, text)
                  )
                }
              />
              <button
                onClick={
                  () => store.dispatch(
                    actions.removeItem(item.id)
                  )
                }
              >
                {'remove'}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default MainContent;
