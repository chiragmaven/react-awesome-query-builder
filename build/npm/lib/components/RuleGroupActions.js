"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleGroupActions = void 0;

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

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

var RuleGroupActions = /*#__PURE__*/function (_PureComponent) {
  _inherits(RuleGroupActions, _PureComponent);

  var _super = _createSuper(RuleGroupActions);

  function RuleGroupActions() {
    _classCallCheck(this, RuleGroupActions);

    return _super.apply(this, arguments);
  }

  _createClass(RuleGroupActions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.config.settings,
          addRule = _this$props.addRule,
          canAddRule = _this$props.canAddRule,
          canDeleteGroup = _this$props.canDeleteGroup,
          removeSelf = _this$props.removeSelf;
      var immutableGroupsMode = settings.immutableGroupsMode,
          addRuleLabel = settings.addRuleLabel,
          delGroupLabel = settings.delGroupLabel,
          renderSize = settings.renderSize;
      var _addRuleLabel = "";

      var addRuleBtn = !immutableGroupsMode && canAddRule && /*#__PURE__*/_react["default"].createElement(_button["default"], {
        key: "group-add-rule",
        className: "action action--ADD-RULE",
        onClick: addRule,
        size: renderSize
      }, /*#__PURE__*/_react["default"].createElement(_icons.PlusOutlined, null), _addRuleLabel);

      var delGroupBtn = !immutableGroupsMode && canDeleteGroup && /*#__PURE__*/_react["default"].createElement(_button["default"], {
        key: "group-del",
        type: "danger",
        className: "action action--DELETE",
        size: renderSize,
        onClick: removeSelf
      }, /*#__PURE__*/_react["default"].createElement(_icons.DeleteOutlined, null), delGroupLabel);

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "group--actions"
      }, addRuleBtn);
    }
  }]);

  return RuleGroupActions;
}(_react.PureComponent);

exports.RuleGroupActions = RuleGroupActions;