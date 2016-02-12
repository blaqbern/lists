import React, { PropTypes } from 'react';

function Header({ title }) {
  return (
    <h1>
      {title}
    </h1>
  );
}
Header.propTypes = { title: PropTypes.string };

export default Header;
