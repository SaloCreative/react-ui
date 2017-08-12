'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Switch = (function (_Component) {
  _inherits(Switch, _Component);

  function Switch() {
    _classCallCheck(this, Switch);

    _Component.apply(this, arguments);
  }

  Switch.prototype.renderLabel = function renderLabel() {
    if (!this.props.state && this.props.labelOff) {
      return this.props.labelOff;
    }
    return this.props.label;
  };

  Switch.prototype.render = function render() {
    var _this = this;

    return _react2['default'].createElement(
      'div',
      { className: 'switch__wrapper ' + (this.props.state ? 'active' : '') },
      _react2['default'].createElement(
        'div',
        { className: 'switch__container', onClick: function () {
            _this.props['switch'](!_this.props.state);
          } },
        _react2['default'].createElement('span', { className: 'switch__handle' })
      ),
      _react2['default'].createElement(
        'span',
        { className: 'switch__label' },
        this.renderLabel()
      )
    );
  };

  return Switch;
})(_react.Component);

exports['default'] = Switch;

Switch.defaultProps = {
  state: false,
  label: '',
  labelOff: ''
};

Switch.propTypes = {
  'switch': _propTypes2['default'].func
};
module.exports = exports['default'];