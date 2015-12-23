'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import lists from './reducers/lists';

class Provider extends React.Component {
  getChildContext() {
    return { store: this.props.store };
  }
  render() {
    return this.props.children;
  }
}
Provider.propTypes = { children: React.PropTypes.node, store: React.PropTypes.object };
Provider.childContextTypes = { store: React.PropTypes.object };

ReactDOM.render(
  <Provider store={createStore(lists)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
