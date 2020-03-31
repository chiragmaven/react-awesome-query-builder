"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueSources = void 0;

var _popover = _interopRequireDefault(require("antd/lib/popover"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _radio = _interopRequireDefault(require("antd/lib/radio"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var RadioButton = _radio["default"].Button;
var RadioGroup = _radio["default"].Group;

var ValueSources = /*#__PURE__*/function (_PureComponent) {
  _inherits(ValueSources, _PureComponent);

  var _super = _createSuper(ValueSources);

  function ValueSources() {
    _classCallCheck(this, ValueSources);

    return _super.apply(this, arguments);
  }

  _createClass(ValueSources, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          config = _this$props.config,
          valueSources = _this$props.valueSources,
          valueSrc = _this$props.valueSrc,
          setValueSrcHandler = _this$props.setValueSrcHandler,
          readonly = _this$props.readonly;
      var valueSourcesInfo = config.settings.valueSourcesInfo;
      var valueSourcesPopupTitle = config.settings.valueSourcesPopupTitle; //const fieldDefinition = getFieldConfig(field, config);
      //let valueSources = fieldDefinition.valueSources;
      //let valueSources = getValueSourcesForFieldOp(config, field, operator);

      if (!valueSources || Object.keys(valueSources).length == 1 || readonly) return null;

      var content = /*#__PURE__*/_react["default"].createElement(RadioGroup, {
        value: valueSrc || "value",
        size: config.settings.renderSize,
        onChange: setValueSrcHandler,
        disabled: readonly
      }, valueSources.map(function (srcKey) {
        return /*#__PURE__*/_react["default"].createElement(RadioButton, {
          key: srcKey,
          value: srcKey //checked={item.checked}

        }, valueSourcesInfo[srcKey].label);
      }));

      return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_popover["default"], {
        content: content,
        title: valueSourcesPopupTitle
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "ellipsis"
      })));
    }
  }]);

  return ValueSources;
}(_react.PureComponent);

exports.ValueSources = ValueSources;