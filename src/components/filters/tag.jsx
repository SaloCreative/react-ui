import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Tag extends Component {

  deleteTag(id) {
    if (this.props.removeTag) {
      this.props.removeTag(id);
    }
  }

  render() {
    return (
      <span className={ `tag-item ${ this.props.customClasses }` }>
        { this.props.title }
        <a className='tag-item--delete' onClick={ () => this.deleteTag(this.props.id) }>
          <FontAwesome name='times' />
        </a>
      </span>
    );
  }
}


Tag.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeTag: PropTypes.func,
  customClasses: PropTypes.string
};