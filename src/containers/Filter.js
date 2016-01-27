import React, {Component, PropTypes} from 'react';
import * as actions from '../actions';

class Filter extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { filter } = this.props;
    return (
      <div
        onClick={
          () => store.dispatch(
            actions.setVisibilityFilter(filter)
          )
        }
      >
        {filter}
      </div>
    );
  }
}
Filter.contextTypes = { store: PropTypes.object };
Filter.propTypes = { filter: PropTypes.string };

export default Filter;
