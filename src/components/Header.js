import React, { PropTypes } from 'react';
import styles from '../styles/header.css';

const Header = ({ title }) => (
  <h1 className={styles.header}>
    {title}
  </h1>
);
Header.propTypes = { title: PropTypes.string };

export default Header;
