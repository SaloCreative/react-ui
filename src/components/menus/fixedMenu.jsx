import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import Card from '../grid/card';
import ActionButton from '../buttons/actionButton';

export default class FixedMenu extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  close(e) {
    e.preventDefault();
    this.setState({open: false})
  }

  open(e) {
    e.preventDefault();
    this.setState({open: true})
  }

  renderMenu() {
    if (!this.state.open) { return false }
    return(
      <div className='fixed-action__inner-wrapper'>
        <div className='fixed-action__menu'>
          <Card>
            { this.props.children }
          </Card>
        </div>
      <div className='fixed-action__backdrop' onClick={ e => this.close(e) }></div>
    </div>
  );
  }

  render() {
    return (
      <div className='fixed-action__wrapper'>
        { this.renderMenu() }
        <ActionButton
          type='button'
          customClasses='fixed'
          icon={ this.props.icon }
          buttonPressed={ e => this.open(e) }
        />
      </div>
    );
  }
}

FixedMenu.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  icon: PropTypes.string
};

FixedMenu.defaultProps = {
  children: '',
  classes: '',
  icon: 'plus'
};