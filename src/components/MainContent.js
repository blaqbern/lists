import React from 'react';
import List from './List';

class MainContent extends React.Component {
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const store = this.context.store;
    const state = store.getState();
    return (
      <div className="main-content">
        {state.map(
          (list) => <List key={list.id} name={list.name} items={list.items} />
        )}
        <input ref={(node) => this.listNameInput = node} />
        <button
          onClick={
            () => {
              store.dispatch({
                type: 'ADD_LIST',
                name: this.listNameInput.value,
              });
              this.listNameInput.value = '';
            }
          }
        >
          {'Create a new List'}
        </button>
      </div>
    );
  }
}
MainContent.contextTypes = { store: React.PropTypes.object };

export default MainContent;
