'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { children, customClasses } = this.props;
    return (
      <div className={ `card ${ customClasses }` }>
        { children }
      </div>
    );
  }
}

Card.defaultProps = {
  children: '',
  customClasses: ''
};

Card.propTypes = {
  customClasses: PropTypes.string
};