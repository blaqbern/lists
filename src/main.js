import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';

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

const finalCreateStore = DevTools.instrument()(createStore);

render(
  <Provider store={finalCreateStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
