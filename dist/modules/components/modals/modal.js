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

var Modal = (function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    _Component.apply(this, arguments);
  }

  Modal.prototype.close = function close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  Modal.prototype.renderFooter = function renderFooter() {
    if (this.props.footer) {
      return _react2['default'].createElement(
        'div',
        { className: 'modal__footer' },
        this.props.footer
      );
    }
  };

  Modal.prototype.render = function render() {
    var _this = this;

    if (this.props.isOpen === false) {
      return null;
    }

    return _react2['default'].createElement(
      'div',
      { className: 'modal ' + this.props.customClasses, role: 'dialog' },
      _react2['default'].createElement(
        'div',
        { className: 'modal__wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'modal__header' },
          _react2['default'].createElement(
            'h3',
            null,
            this.props.title
          ),
          _react2['default'].createElement(
            'h3',
            { className: 'modal__subheading' },
            this.props.subtitle
          ),
          _react2['default'].createElement(
            'a',
            { className: 'modal__close', onClick: function (e) {
                return _this.close(e);
              }, role: 'button', tabIndex: '-1' },
            _react2['default'].createElement(_reactFontawesome2['default'], { name: 'times' })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'modal__body' },
          this.props.children
        ),
        this.renderFooter()
      ),
      _react2['default'].createElement('div', { className: 'modal__backdrop', onClick: function (e) {
          return _this.close(e);
        }, role: 'presentation' })
    );
  };

  return Modal;
})(_react.Component);

exports['default'] = Modal;

Modal.propTypes = {
  children: _propTypes2['default'].node.isRequired,
  isOpen: _propTypes2['default'].bool,
  title: _propTypes2['default'].string,
  subtitle: _propTypes2['default'].string,
  onClose: _propTypes2['default'].func,
  customClasses: _propTypes2['default'].string,
  footer: _propTypes2['default'].any
};

Modal.defaultProps = {
  children: _react2['default'].createElement(
    'p',
    null,
    'No modal content set'
  ),
  title: 'Modal title',
  subtitle: '',
  onClose: null,
  isOpen: null,
  customClasses: '',
  footer: ''
};
module.exports = exports['default'];