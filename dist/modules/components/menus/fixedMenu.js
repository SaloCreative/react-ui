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

var _gridCard = require('../grid/card');

var _gridCard2 = _interopRequireDefault(_gridCard);

var _buttonsActionButton = require('../buttons/actionButton');

var _buttonsActionButton2 = _interopRequireDefault(_buttonsActionButton);

var FixedMenu = (function (_Component) {
  _inherits(FixedMenu, _Component);

  function FixedMenu() {
    _classCallCheck(this, FixedMenu);

    _Component.call(this);
    this.state = {
      open: false
    };
  }

  FixedMenu.prototype.close = function close(e) {
    e.preventDefault();
    this.setState({ open: false });
  };

  FixedMenu.prototype.open = function open(e) {
    e.preventDefault();
    this.setState({ open: true });
  };

  FixedMenu.prototype.renderMenu = function renderMenu() {
    var _this = this;

    if (!this.state.open) {
      return false;
    }
    return _react2['default'].createElement(
      'div',
      { className: 'fixed-action__inner-wrapper' },
      _react2['default'].createElement(
        'div',
        { className: 'fixed-action__menu' },
        _react2['default'].createElement(
          _gridCard2['default'],
          null,
          this.props.children
        )
      ),
      _react2['default'].createElement('div', { className: 'fixed-action__backdrop', onClick: function (e) {
          return _this.close(e);
        } })
    );
  };

  FixedMenu.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: 'fixed-action__wrapper' },
      this.renderMenu(),
      _react2['default'].createElement(_buttonsActionButton2['default'], {
        type: 'button',
        customClasses: 'fixed',
        icon: this.props.icon,
        buttonPressed: function (e) {
          return _this2.open(e);
        }
      })
    );
  };

  return FixedMenu;
})(_react.Component);

exports['default'] = FixedMenu;

FixedMenu.propTypes = {
  children: _propTypes2['default'].any,
  classes: _propTypes2['default'].string,
  icon: _propTypes2['default'].string
};

FixedMenu.defaultProps = {
  children: '',
  classes: '',
  icon: 'plus'
};
module.exports = exports['default'];