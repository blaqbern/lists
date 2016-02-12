import React from 'react';
import Header from './Header';
import MainContent from '../containers/MainContent';
// import DevTools from '../containers/DevTools';
import styles from '../styles/app.css';

const App = () => (
  <div className={styles.app}>
    <Header title="App Title, suckas!" />
    <MainContent />
  </div>
);

export default App;
