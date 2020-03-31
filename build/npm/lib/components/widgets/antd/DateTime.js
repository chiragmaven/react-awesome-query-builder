"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _datePicker = _interopRequireDefault(require("antd/lib/date-picker"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DateTimeWidget = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateTimeWidget, _PureComponent);

  var _super = _createSuper(DateTimeWidget);

  function DateTimeWidget(props) {
    var _this;

    _classCallCheck(this, DateTimeWidget);

    _this = _super.call(this, props);

    _this.handleChange = function (_value) {
      var _this$props = _this.props,
          setValue = _this$props.setValue,
          valueFormat = _this$props.valueFormat;
      var value = _value && _value.isValid() ? _value.format(valueFormat) : undefined;
      if (value || _value === null) setValue(value);
    };

    var _valueFormat = props.valueFormat,
        _value2 = props.value,
        _setValue = props.setValue;
    var mValue = _value2 ? (0, _moment["default"])(_value2, _valueFormat) : null;

    if (mValue && !mValue.isValid()) {
      _setValue(null);
    }

    return _this;
  }

  _createClass(DateTimeWidget, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          customProps = _this$props2.customProps,
          value = _this$props2.value,
          valueFormat = _this$props2.valueFormat,
          dateFormat = _this$props2.dateFormat,
          timeFormat = _this$props2.timeFormat,
          use12Hours = _this$props2.use12Hours,
          config = _this$props2.config,
          readonly = _this$props2.readonly;
      var renderSize = config.settings.renderSize;
      var dateValue = value ? (0, _moment["default"])(value, valueFormat) : null;
      var dateTimeFrmat = dateFormat + ' ' + timeFormat;
      return /*#__PURE__*/_react["default"].createElement(_datePicker["default"], _extends({
        disabled: readonly,
        key: "widget-datetime",
        use12Hours: use12Hours,
        showTime: {
          format: timeFormat
        },
        placeholder: placeholder,
        size: renderSize,
        format: dateTimeFrmat,
        value: dateValue,
        onChange: this.handleChange,
        ref: "datetime"
      }, customProps));
    }
  }]);

  return DateTimeWidget;
}(_react.PureComponent);

exports["default"] = DateTimeWidget;
DateTimeWidget.propTypes = {
  setValue: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].string,
  //in valueFormat
  config: _propTypes["default"].object.isRequired,
  field: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  customProps: _propTypes["default"].object,
  readonly: _propTypes["default"].bool,
  // from fieldSettings:
  timeFormat: _propTypes["default"].string,
  dateFormat: _propTypes["default"].string,
  valueFormat: _propTypes["default"].string,
  use12Hours: _propTypes["default"].bool
};
DateTimeWidget.defaultProps = {
  timeFormat: 'HH:mm',
  dateFormat: 'YYYY-MM-DD',
  valueFormat: 'YYYY-MM-DD HH:mm:ss',
  use12Hours: false
};