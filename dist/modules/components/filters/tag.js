'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var Tag = (function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    _classCallCheck(this, Tag);

    _Component.apply(this, arguments);
  }

  Tag.prototype.deleteTag = function deleteTag(id) {
    if (this.props.removeTag) {
      this.props.removeTag(id);
    }
  };

  Tag.prototype.render = function render() {
    var _this = this;

    return _react2['default'].createElement(
      'span',
      { className: 'tag-item ' + this.props.customClasses },
      this.props.title,
      _react2['default'].createElement(
        'a',
        { className: 'tag-item--delete', onClick: function () {
            return _this.deleteTag(_this.props.id);
          } },
        _react2['default'].createElement(_reactFontawesome2['default'], { name: 'times' })
      )
    );
  };

  return Tag;
})(_react.Component);

exports['default'] = Tag;

Tag.propTypes = {
  title: _propTypes2['default'].string.isRequired,
  id: _propTypes2['default'].number.isRequired,
  removeTag: _propTypes2['default'].func,
  customClasses: _propTypes2['default'].string
};
module.exports = exports['default'];