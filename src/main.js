import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import list from './reducers/list';

class Provider extends Component {
  getChildContext() {
    return { store: this.props.store };
  }
  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = { store: React.PropTypes.object };
Provider.propTypes = {
  children: PropTypes.node,
  store: PropTypes.object
};

render(
  <Provider store={createStore(list)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
