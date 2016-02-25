import React from 'react';

function Header({ title }) {
  return (
    <h1>
      {title}
    </h1>
  );
}
const { string } = React.PropTypes;
Header.propTypes = { title: string };

export default Header;
