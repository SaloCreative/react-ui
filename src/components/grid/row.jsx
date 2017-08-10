'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Row extends Component {
  render() {
    const { children, customClasses } = this.props;
    return (
      <div className={ `row ${ customClasses }` }>
        { children }
      </div>
    );
  }
}

Row.defaultProps = {
  children: '',
  customClasses: ''
};

Row.propTypes = {
  customClasses: PropTypes.string
};