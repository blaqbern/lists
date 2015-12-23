import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => (
  <div className="app">
    <Header title="App Title, suckas!" />
    <MainContent />
    <Footer />
  </div>
);
App.contextTypes = { store: React.PropTypes.object };

export default App;
