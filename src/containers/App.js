import React, { Component, PropTypes } from 'react';
import { init } from '../actions';
import Header from '../components/Header';
import List from './List';
import Footer from '../components/Footer';
import DevTools from './DevTools';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(init());
  }

  render() {
    return (
      <div className="app">
        <Header title="App Title, suckas!" />
        <List />
        <Footer />
        <DevTools />
      </div>
    );
  }
}
App.propTypes = { dispatch: PropTypes.object };

export default App;
