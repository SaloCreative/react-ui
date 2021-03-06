'use strict';
exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var Card = (function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    _Component.apply(this, arguments);
  }

  Card.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var customClasses = _props.customClasses;

    return _react2['default'].createElement(
      'div',
      { className: 'card ' + customClasses },
      children
    );
  };

  return Card;
})(_react.Component);

exports['default'] = Card;

Card.defaultProps = {
  children: '',
  customClasses: ''
};

Card.propTypes = {
  customClasses: _propTypes2['default'].string
};
module.exports = exports['default'];