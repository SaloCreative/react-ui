'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    const { classes, customClasses } = this.props;
    return (
      <div className={ `card ${ customClasses } ${ classes.card }` }>
        { this.props.children }
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

export default Card;