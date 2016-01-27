import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';
import AddItem from '../components/AddItem';
import Footer from '../components/Footer';
import * as actions from '../actions';

class MainContent extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(
      actions.init()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getVisibleItems(items, visibilityFilter) {
    return items.filter(
      (item) =>
      visibilityFilter === 'SHOW_ALL' ||
      item.tags.indexOf(visibilityFilter) !== -1
    );
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const visibleItems = this.getVisibleItems(state.list, state.visibilityFilter);
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
          {visibleItems.map((item) =>
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
        <Footer tags={state.tags} />
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default MainContent;
