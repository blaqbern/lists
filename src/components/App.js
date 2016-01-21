import React, { PropTypes } from 'react';
import Header from './Header';
import MainContent from '../containers/MainContent';
import Footer from './Footer';

const App = () => (
  <div className="app">
    <Header title="App Title, suckas!" />
    <MainContent />
    <Footer />
  </div>
);
App.contextTypes = { store: PropTypes.object };

export default App;
