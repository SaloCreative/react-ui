'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var ActionButton = (function (_Component) {
  _inherits(ActionButton, _Component);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    _Component.apply(this, arguments);
  }

  ActionButton.prototype.onClick = function onClick(e) {
    if (this.props.buttonPressed) {
      this.props.buttonPressed(e);
    }
  };

  ActionButton.prototype.render = function render() {
    var _this = this;

    var _props = this.props;
    var link = _props.link;
    var type = _props.type;
    var icon = _props.icon;
    var customClasses = _props.customClasses;

    switch (type) {
      case 'button':
        return _react2['default'].createElement(
          'button',
          { className: 'action-button ' + customClasses, onClick: function (e) {
              return _this.onClick(e);
            } },
          _react2['default'].createElement(_reactFontawesome2['default'], { name: icon })
        );

      case 'link':
      default:
        return _react2['default'].createElement(
          _reactRouter.Link,
          { className: 'action-button ' + customClasses, to: link },
          _react2['default'].createElement(_reactFontawesome2['default'], { name: icon })
        );
    }
  };

  return ActionButton;
})(_react.Component);

exports['default'] = ActionButton;

ActionButton.defaultProps = {
  type: 'link',
  link: '',
  icon: 'pencil',
  customClasses: ''
};

ActionButton.propTypes = {
  type: _propTypes2['default'].string,
  link: _propTypes2['default'].string,
  icon: _propTypes2['default'].string,
  customClasses: _propTypes2['default'].string,
  buttonPressed: _propTypes2['default'].func
};
module.exports = exports['default'];