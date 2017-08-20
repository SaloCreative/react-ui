'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var TypeAhead = (function (_Component) {
  _inherits(TypeAhead, _Component);

  function TypeAhead() {
    _classCallCheck(this, TypeAhead);

    _Component.call(this);
    this.state = {
      filteredItems: [],
      filterString: ''
    };
  }

  TypeAhead.prototype.generateFilteredTags = function generateFilteredTags(e) {
    var data = this.props.data;

    var filteredItems = [];
    this.props.items.forEach(function (tag) {
      if (tag[data.title].toLowerCase().includes(e.toLowerCase())) {
        filteredItems.push(tag);
      }
    });
    return this.setState({ filteredItems: filteredItems });
  };

  TypeAhead.prototype.filterTags = function filterTags(e) {
    this.generateFilteredTags(e);
    return this.setState({ filterString: e });
  };

  TypeAhead.prototype.addTag = function addTag(id) {
    if (this.props.selectedItem) {
      this.props.selectedItem(id);
    }
    return this.setState({ filterString: '' });
  };

  TypeAhead.prototype.renderFilteredList = function renderFilteredList() {
    var _this = this;

    if (this.state.filteredItems.length > 0 && this.state.filterString) {
      var _ret = (function () {
        var data = _this.props.data;

        return {
          v: _react2['default'].createElement(
            'ul',
            { className: 'typeahead__list' },
            _this.state.filteredItems.map(function (tag, i) {
              return _react2['default'].createElement(
                'li',
                { className: 'typeahead__list-item', key: i },
                _react2['default'].createElement(
                  'a',
                  { onClick: function () {
                      return _this.addTag(tag[data.id]);
                    } },
                  tag[data.title]
                )
              );
            })
          )
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
    return null;
  };

  TypeAhead.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: 'form-group form-typeahead ' + this.props.customClasses },
      _react2['default'].createElement('input', {
        className: 'form-field ' + (this.state.filterString ? 'has-value' : ''),
        value: this.state.filterString,
        onChange: function (e) {
          return _this2.filterTags(e.target.value);
        } }),
      _react2['default'].createElement('span', { className: 'bar' }),
      _react2['default'].createElement(
        'label',
        null,
        this.props.placeholder
      ),
      this.renderFilteredList()
    );
  };

  return TypeAhead;
})(_react.Component);

exports['default'] = TypeAhead;

TypeAhead.defaultProps = {
  placeholder: 'Start typing...',
  items: [],
  data: {
    id: 'id',
    title: 'title'
  },
  customClasses: ''
};

TypeAhead.propTypes = {
  items: _propTypes2['default'].array,
  placeholder: _propTypes2['default'].string,
  customClasses: _propTypes2['default'].string,
  data: _propTypes2['default'].object,
  selectedItem: _propTypes2['default'].func
};
module.exports = exports['default'];