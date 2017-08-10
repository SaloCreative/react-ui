'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Column extends Component {
  render() {
    const { children, customClasses } = this.props;
    return (
      <div className={ `column ${ customClasses }` }>
        { children }
      </div>
    );
  }
}

Column.defaultProps = {
  children: '',
  customClasses: ''
};

Column.propTypes = {
  customClasses: PropTypes.string
};