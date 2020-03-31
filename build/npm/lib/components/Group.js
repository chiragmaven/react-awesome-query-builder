"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Group = void 0;

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _modal = _interopRequireDefault(require("antd/lib/modal"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _GroupContainer = _interopRequireDefault(require("./containers/GroupContainer"));

var _Draggable = _interopRequireDefault(require("./containers/Draggable"));

var _Item = _interopRequireDefault(require("./Item"));

var _Conjs = require("./Conjs");

var _GroupActions = require("./GroupActions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var confirm = _modal["default"].confirm;

var classNames = require('classnames');

var defaultPosition = 'topRight';

var Group = /*#__PURE__*/function (_PureComponent) {
  _inherits(Group, _PureComponent);

  var _super = _createSuper(Group);

  function Group(props) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this, props);

    _this.childrenClassName = function () {
      return '';
    };

    _this.renderBeforeActions = function () {
      var BeforeActions = _this.props.config.settings.renderBeforeActions;
      if (BeforeActions == undefined) return null;
      return typeof BeforeActions === 'function' ? /*#__PURE__*/_react["default"].createElement(BeforeActions, _this.props) : BeforeActions;
    };

    _this.renderAfterActions = function () {
      var AfterActions = _this.props.config.settings.renderAfterActions;
      if (AfterActions == undefined) return null;
      return typeof AfterActions === 'function' ? /*#__PURE__*/_react["default"].createElement(AfterActions, _this.props) : AfterActions;
    };

    _this.canAddGroup = function () {
      return _this.props.allowFurtherNesting;
    };

    _this.canAddRule = function () {
      return true;
    };

    _this.canDeleteGroup = function () {
      return !_this.props.isRoot;
    };

    _this.removeSelf = _this.removeSelf.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Group, [{
    key: "isGroupTopPosition",
    value: function isGroupTopPosition() {
      return (0, _startsWith["default"])(this.props.config.settings.groupActionsPosition || defaultPosition, 'top');
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      var _this2 = this;

      var confirmOptions = this.props.config.settings.removeGroupConfirmOptions;

      var doRemove = function doRemove() {
        _this2.props.removeSelf();
      };

      if (confirmOptions && !this.isEmptyCurrentGroup()) {
        confirm(_objectSpread({}, confirmOptions, {
          onOk: doRemove,
          onCancel: null
        }));
      } else {
        doRemove();
      }
    }
  }, {
    key: "isEmptyCurrentGroup",
    value: function isEmptyCurrentGroup() {
      var children = this.props.children1;
      return children.size == 0 || children.size == 1 && this.isEmpty(children.first());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(item) {
      return item.get("type") == "group" || item.get("type") == "rule_group" ? this.isEmptyGroup(item) : this.isEmptyRule(item);
    }
  }, {
    key: "isEmptyGroup",
    value: function isEmptyGroup(group) {
      var children = group.get("children1");
      return children.size == 0 || children.size == 1 && this.isEmpty(children.first());
    }
  }, {
    key: "isEmptyRule",
    value: function isEmptyRule(rule) {
      var properties = rule.get('properties');
      return !(properties.get("field") !== null && properties.get("operator") !== null && properties.get("value").filter(function (val) {
        return val !== undefined;
      }).size > 0);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderHeaderWrapper(), this.renderChildrenWrapper(), this.renderFooterWrapper());
    }
  }, {
    key: "renderChildrenWrapper",
    value: function renderChildrenWrapper() {
      return this.props.children1 && /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-children",
        className: classNames("group--children", this.props.children1.size < 2 && this.props.config.settings.hideConjForOne ? 'hide--line' : '', this.props.children1.size < 2 ? 'one--child' : '', this.childrenClassName())
      }, this.renderChildren());
    }
  }, {
    key: "renderHeaderWrapper",
    value: function renderHeaderWrapper() {
      var isGroupTopPosition = this.isGroupTopPosition();
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-header",
        className: "group--header"
      }, this.renderHeader(), isGroupTopPosition && this.renderBeforeActions(), isGroupTopPosition && this.renderActions(), isGroupTopPosition && this.renderAfterActions());
    }
  }, {
    key: "renderFooterWrapper",
    value: function renderFooterWrapper() {
      var isGroupTopPosition = this.isGroupTopPosition();
      return !isGroupTopPosition && /*#__PURE__*/_react["default"].createElement("div", {
        key: "group-footer",
        className: "group--footer"
      }, this.renderBeforeActions(), this.renderActions(), this.renderAfterActions());
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this$props = this.props,
          config = _this$props.config,
          addRule = _this$props.addRule,
          addGroup = _this$props.addGroup;
      return /*#__PURE__*/_react["default"].createElement(_GroupActions.GroupActions, {
        config: config,
        addRule: addRule,
        addGroup: addGroup,
        canAddGroup: this.canAddGroup(),
        canAddRule: this.canAddRule(),
        canDeleteGroup: this.canDeleteGroup(),
        removeSelf: this.removeSelf
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children1 = this.props.children1;
      return children1 ? children1.map(this.renderItem.bind(this)).toList() : null;
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      var props = this.props;
      var config = props.config,
          actions = props.actions,
          onDragStart = props.onDragStart;
      var isRuleGroup = item.get('type') == 'group' && item.getIn(['properties', 'field']) != null;
      var type = isRuleGroup ? 'rule_group' : item.get('type');
      return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({}, this.extraPropsForItem(item), {
        key: item.get('id'),
        id: item.get('id') //path={props.path.push(item.get('id'))}
        ,
        path: item.get('path'),
        type: type,
        properties: item.get('properties'),
        config: config,
        actions: actions,
        children1: item.get('children1') //tree={props.tree}
        ,
        treeNodesCnt: this.reordableNodesCnt(),
        onDragStart: onDragStart
      }));
    }
  }, {
    key: "extraPropsForItem",
    value: function extraPropsForItem(_item) {
      return {};
    }
  }, {
    key: "reordableNodesCnt",
    value: function reordableNodesCnt() {
      var treeNodesCnt = this.props.treeNodesCnt;
      return treeNodesCnt;
    }
  }, {
    key: "renderDrag",
    value: function renderDrag() {
      var _this$props2 = this.props,
          config = _this$props2.config,
          isRoot = _this$props2.isRoot,
          treeNodesCnt = _this$props2.treeNodesCnt,
          handleDraggerMouseDown = _this$props2.handleDraggerMouseDown;
      var reordableNodesCnt = treeNodesCnt;
      var showDragIcon = config.settings.canReorder && !isRoot && reordableNodesCnt > 1;

      var drag = showDragIcon && /*#__PURE__*/_react["default"].createElement("span", {
        key: "group-drag-icon",
        className: "qb-drag-handler group--drag-handler",
        onMouseDown: handleDraggerMouseDown
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "bars"
      }), " ");

      return drag;
    }
  }, {
    key: "renderConjs",
    value: function renderConjs() {
      var _this$props3 = this.props,
          config = _this$props3.config,
          children1 = _this$props3.children1,
          selectedConjunction = _this$props3.selectedConjunction,
          setConjunction = _this$props3.setConjunction,
          conjunctionOptions = _this$props3.conjunctionOptions,
          not = _this$props3.not,
          setNot = _this$props3.setNot;
      var _config$settings = config.settings,
          immutableGroupsMode = _config$settings.immutableGroupsMode,
          renderConjsAsRadios = _config$settings.renderConjsAsRadios;
      var Conjs = renderConjsAsRadios ? _Conjs.ConjsRadios : _Conjs.ConjsButtons;

      var conjs = /*#__PURE__*/_react["default"].createElement(Conjs, {
        disabled: children1.size < 2,
        selectedConjunction: selectedConjunction,
        setConjunction: immutableGroupsMode ? null : setConjunction,
        conjunctionOptions: conjunctionOptions,
        config: config,
        not: not,
        setNot: immutableGroupsMode ? null : setNot,
        readonly: immutableGroupsMode
      });

      return conjs;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames("group--conjunctions" // children1.size < 2 && config.settings.hideConjForOne ? 'hide--conj' : ''
        )
      }, this.renderConjs(), this.renderDrag());
    }
  }]);

  return Group;
}(_react.PureComponent);

exports.Group = Group;
Group.propTypes = {
  //tree: PropTypes.instanceOf(Immutable.Map).isRequired,
  treeNodesCnt: _propTypes["default"].number,
  conjunctionOptions: _propTypes["default"].object.isRequired,
  allowFurtherNesting: _propTypes["default"].bool.isRequired,
  isRoot: _propTypes["default"].bool.isRequired,
  not: _propTypes["default"].bool,
  selectedConjunction: _propTypes["default"].string,
  config: _propTypes["default"].object.isRequired,
  id: _propTypes["default"].string.isRequired,
  path: _propTypes["default"].any,
  //instanceOf(Immutable.List)
  children1: _propTypes["default"].any,
  //instanceOf(Immutable.OrderedMap)
  isDraggingMe: _propTypes["default"].bool,
  isDraggingTempo: _propTypes["default"].bool,
  //actions
  handleDraggerMouseDown: _propTypes["default"].func,
  onDragStart: _propTypes["default"].func,
  addRule: _propTypes["default"].func.isRequired,
  addGroup: _propTypes["default"].func.isRequired,
  removeSelf: _propTypes["default"].func.isRequired,
  setConjunction: _propTypes["default"].func.isRequired,
  setNot: _propTypes["default"].func.isRequired,
  actions: _propTypes["default"].object.isRequired
};

var _default = (0, _GroupContainer["default"])((0, _Draggable["default"])("group")(Group));

exports["default"] = _default;