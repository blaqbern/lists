import React, { Component, PropTypes } from 'react';
import List from '../components/List';
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
        <List
          items={state}
          handleItemClick={
            (id) => store.dispatch(
              actions.toggleCompleted(id)
            )
          }
          handleRemoveClick={
            (id) => store.dispatch(
              actions.removeItem(id)
            )
          }
        />
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default MainContent;
