'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Loader = (function (_Component) {
  _inherits(Loader, _Component);

  function Loader() {
    _classCallCheck(this, Loader);

    _Component.apply(this, arguments);
  }

  Loader.prototype.render = function render() {
    if (this.props.display) {
      switch (this.props.style) {
        case 'inline':
          return _react2['default'].createElement(
            'div',
            { className: 'salo-loader--inline' },
            'Loading…'
          );
        case 'default':
        default:
          return _react2['default'].createElement(
            'div',
            { className: 'salo-loader' },
            'Loading…'
          );
      }
    } else {
      return null;
    }
  };

  return Loader;
})(_react.Component);

exports['default'] = Loader;

Loader.defaultProps = {
  display: false,
  style: 'default'
};

Loader.propTypes = {
  display: _propTypes2['default'].bool,
  style: _propTypes2['default'].string
};
module.exports = exports['default'];