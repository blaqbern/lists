import React from 'react';
import { connect } from 'react-redux';
import Filter from '../containers/Filter';

function Footer({ tags }) {
  return (
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
}
const { array } = React.PropTypes;
Footer.propTypes = { tags: array };

export default connect(
  state => ({ tags: state.tags })
)(Footer);
