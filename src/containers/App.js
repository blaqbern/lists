import React, { Component } from 'react';
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
const { object } = React.PropTypes;
App.propTypes = { dispatch: object };

export default App;
