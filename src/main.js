import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';
import DevTools from './containers/DevTools';

const finalCreateStore = DevTools.instrument()(createStore);
const store = finalCreateStore(rootReducer);

render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('app')
);
