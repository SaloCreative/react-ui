import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loader extends Component {
  render() {
    if (this.props.display) {
      switch (this.props.style) {
        case 'inline':
          return (
            <div className='salo-loader--inline'>Loading&hellip;</div>
          );
        case 'default':
        default:
          return (
            <div className='salo-loader'>Loading&hellip;</div>
          );
      }
    } else {
      return null;
    }
  }

}

Loader.defaultProps = {
  display: false,
  style: 'default'
};

Loader.propTypes = {
  display: PropTypes.bool,
  style: PropTypes.string
};