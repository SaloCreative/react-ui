import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default class ActionButton extends Component {

  onClick(e) {
    if (this.props.buttonPressed) {
      this.props.buttonPressed(e);
    }
  }

  render() {
    const { link, type, icon } = this.props;
    switch (type) {
      case 'button' :
        return (
          <button className={ `action-button ${ customClasses }` } onClick={ (e) => this.onClick(e) }>
            <FontAwesome name={ icon } />
          </button>
        );

      case 'link' :
      default :
        return (
          <Link className={ `action-button ${ customClasses }` } to={ link }>
            <FontAwesome name={ icon } />
          </Link>
        );
    }
  }
}

ActionButton.defaultProps = {
  type: 'link',
  link: '',
  icon: 'pencil',
  customClasses: ''
};

ActionButton.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  customClasses: PropTypes.string,
  buttonPressed: PropTypes.func
};