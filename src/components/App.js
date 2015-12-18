'use strict';

import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header title="App Title!" />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
