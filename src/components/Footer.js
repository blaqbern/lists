import React, { PropTypes } from 'react';
import Filter from '../containers/Filter';

const Footer = ({
  tags
}) => (
  <div className="footer">
    <h3>{"Show only items from:"}</h3>
    <ul>
      {tags.map(
        (tag, index) => <li key={index}>
          <Filter filter={tag} />
        </li>
      )}
      <li><Filter filter={'SHOW_ALL'} /></li>
    </ul>
  </div>
);
Footer.propTypes = { tags: PropTypes.array };

export default Footer;
