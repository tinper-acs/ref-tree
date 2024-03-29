'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _extends = _assign2["default"] || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RefCoreError = require('ref-core/lib/refs/RefCoreError');

var _RefCoreError2 = _interopRequireDefault(_RefCoreError);

var _RefCoreTree = require('ref-core/lib/refs/RefCoreTree');

var _RefCoreTree2 = _interopRequireDefault(_RefCoreTree);

var _RefCoreSearch = require('ref-core/lib/refs/RefCoreSearch');

var _RefCoreSearch2 = _interopRequireDefault(_RefCoreSearch);

var _RefCoreButton = require('ref-core/lib/refs/RefCoreButton');

var _RefCoreButton2 = _interopRequireDefault(_RefCoreButton);

var _nextUi = require('@tinper/next-ui');

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2["default"])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2["default"])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2["default"])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2["default"])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2["default"] ? (0, _setPrototypeOf2["default"])(subClass, superClass) : _defaults(subClass, superClass); }
// import { refValParse,deepTraversal } from './utils';


var noop = function noop() {};
var propTypes = {
  title: _propTypes2["default"].string,
  backdrop: _propTypes2["default"].bool,
  className: _propTypes2["default"].string,
  showLoading: _propTypes2["default"].bool,
  searchable: _propTypes2["default"].bool, //  是否应用搜索 默认 false,
  valueField: _propTypes2["default"].string,
  checkStrictly: _propTypes2["default"].bool,
  showLine: _propTypes2["default"].bool,
  lazyModal: _propTypes2["default"].bool,
  showModal: _propTypes2["default"].bool,
  lang: _propTypes2["default"].string,
  defaultExpandAll: _propTypes2["default"].bool, // 数默认展开
  nodeDisplay: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].func]),
  buttons: _propTypes2["default"].object,
  emptyBut: _propTypes2["default"].bool, //清空按钮
  getRefTreeData: _propTypes2["default"].func,
  multiple: _propTypes2["default"].bool, //  默认单选
  treeData: _propTypes2["default"].array, //接收树的数据
  onLoadData: _propTypes2["default"].func,
  onTreeSelecting: _propTypes2["default"].func,
  isLocalSearch: _propTypes2["default"].bool //  默搜索是否是本地
};
var defaultProps = {
  title: '弹窗标题',
  searchable: false, //  是否应用搜索 默认 false,
  multiple: false, //  默认单选
  showLine: false, //  默认单选
  defaultExpandAll: true, // 数默认展开
  checkStrictly: true,
  lazyModal: false,
  emptyBut: false,
  onCancel: noop,
  onSave: noop,
  lang: 'zh_CN',
  nodeDisplay: '{refname}',
  valueField: 'refpk',
  treeData: [],
  onLoadData: function onLoadData() {},
  getRefTreeData: function getRefTreeData() {},
  onTreeSelecting: function onTreeSelecting() {},
  isLocalSearch: false //默认是true
};

var RefTreeBaseUI = function (_Component) {
  _inherits(RefTreeBaseUI, _Component);

  function RefTreeBaseUI(props) {
    _classCallCheck(this, RefTreeBaseUI);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var _props$matchData = props.matchData,
        matchData = _props$matchData === undefined ? [] : _props$matchData,
        valueField = props.valueField,
        showLoading = props.showLoading;

    _this.state = {
      selectedArray: matchData || [], //  记录保存的选择项
      checkedKeys: matchData.map(function (item) {
        return item[valueField];
      }),
      onSaveCheckItems: [],
      showLoading: showLoading,
      searchValue: '' //20190527新增搜索
    };
    _this.flatTreeData = new _map2["default"]();
    _this.currentParentChildrenArr = new _set2["default"]();
    return _this;
  }

  RefTreeBaseUI.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    //重新渲染数据获取selectedArray,因为取消操作重置了selectedArray，需要初始化
    if (!(0, _shallowequal2["default"])(nextProps.treeData, this.props.treeData) && !nextProps.checkStrictly) {
      //非严格模式需要平铺数据
      this.flatTreeData = new _map2["default"]();
      this.deepTraversal(nextProps.treeData, null, nextProps.valueField);
    }

    if (nextProps.showModal) this.initComponent(nextProps);
  };

  //  tree EventHandler
  //  多选才走这里
  RefTreeBaseUI.prototype.onCheck = function onCheck(selectedKeys, event) {
    var _this2 = this;

    var multiple = this.props.multiple;

    if (!multiple) {
      //单选
      this.setState({
        selectedArray: [event.node.props.attr],
        checkedKeys: [event.node.props.eventKey],
        onSaveCheckItems: [event.node.props.attr]
      }, function () {
        _this2.props.onTreeSelecting([event.node.props.attr], [event.node.props.eventKey]);
      });
    } else {
      //多选
      var _props = this.props,
          valueField = _props.valueField,
          checkStrictly = _props.checkStrictly;

      var allProcessCheckedArray = [].concat(this.state.selectedArray);
      var newCheckedKeys = this.state.checkedKeys;
      var key = event.node.props.attr[valueField];
      var currentNode = event.node.props.attr;

      if (!checkStrictly) {
        //下面涉及到checkStricly=false/true，涉及删除会多个删除，新增会新增多个
        if (event.checked) {
          //新增操作，checkNodes会平铺所有的，没问题
          event.checkedNodes.forEach(function (item) {
            var curKey = item.props.attr[valueField];
            if (newCheckedKeys.indexOf(curKey) < 0) {
              allProcessCheckedArray.push(item.props.attr);
              newCheckedKeys.push(item.props.attr[valueField]);
            }
          });
        } else {
          //删除操作，父节点，删除当前，并且删除children；叶子节点，只删除当前就好
          //往上找父节点删除
          this.currentParentChildrenArr = new _set2["default"]();
          this.currentParentChildrenArr.add(key); //节点本身
          this.getParentKeys(key);
          //往下找子节点删除
          if (event.node.props.attr.children && event.node.props.attr.children.length) {
            var _loop = function _loop(data, arr) {
              data.forEach(function (item) {
                arr.add(item[valueField]);
                if (item.children && item.children.length) {
                  _loop(item.children, arr);
                }
              });
            };

            _loop(event.node.props.attr.children, this.currentParentChildrenArr);
          }
          this.currentParentChildrenArr.forEach(function (key) {
            allProcessCheckedArray = allProcessCheckedArray.filter(function (item) {
              return item[valueField] !== key;
            });
            if (newCheckedKeys.indexOf(key) > -1) newCheckedKeys.splice(newCheckedKeys.indexOf(key), 1);
          });
        }
      } else {
        //这里是checkStrictly为true的时候，增删都是一个
        if (event.checked) {
          //新增操作
          allProcessCheckedArray.push(currentNode);
          if (newCheckedKeys.indexOf(key) < 0) {
            newCheckedKeys.push(key);
          }
        } else {
          //删除操作
          allProcessCheckedArray = allProcessCheckedArray.filter(function (item) {
            return item[valueField] !== key;
          });
          if (newCheckedKeys.indexOf(key) > -1) newCheckedKeys.splice(newCheckedKeys.indexOf(key), 1);
        }
      }
      this.setState({
        selectedArray: allProcessCheckedArray,
        checkedKeys: newCheckedKeys,
        onSaveCheckItems: allProcessCheckedArray
      }, function () {
        _this2.props.onTreeSelecting(allProcessCheckedArray, newCheckedKeys);
      });
    }
  };

  RefTreeBaseUI.prototype.onDoubleClick = function onDoubleClick(selectedKeys, event) {
    var _this3 = this;

    var item = event.node.props;
    var arr = [_extends({}, item.attr, { refpk: item.eventKey, id: item.eventKey })];
    this.setState({
      selectedArray: arr,
      checkedKeys: [item.eventKey]
    }, function () {
      _this3.onClickBtn('save');
    });
  };
  //单选


  RefTreeBaseUI.prototype.onSelect = function onSelect(selectedKeys, event) {
    var _this4 = this;

    var _props2 = this.props,
        checkAllChildren = _props2.checkAllChildren,
        multiple = _props2.multiple;

    var eventKey = event.node.props.eventKey;
    var onSaveCheckItems = this.state.onSaveCheckItems;

    var ishaskey = false;
    var keyIndex = void 0;
    if (multiple) return;
    onSaveCheckItems.forEach(function (v, i) {
      if (v.id == eventKey) {
        keyIndex = i;
      }
      if (v.id == eventKey && v.checkAllchildren) {
        ishaskey = true;
        return false;
      }
    });
    if (ishaskey) {
      this.setState({
        checkedKeys: selectedKeys
      }, function () {
        _this4.props.onTreeSelecting([event.node.props.attr], selectedKeys);
      });
      return false;
    }
    if (!checkAllChildren) {
      var arr = event.selectedNodes.map(function (item) {
        return _extends({}, item.props.attr, { refpk: item.key, id: item.key });
      });
      this.setState({
        selectedArray: arr,
        checkedKeys: selectedKeys
      }, function () {
        _this4.props.onTreeSelecting(arr, selectedKeys);
      });
    } else {
      var _arr = {};
      event.selectedNodes.forEach(function (item) {
        if (item.key == eventKey) {
          _arr = _extends({}, item.props.attr, { refname: item.props.title, refpk: item.key, id: item.key });
        }
      });
      if (selectedKeys.indexOf(eventKey) > -1) {
        onSaveCheckItems.push(_arr);
      } else {

        onSaveCheckItems.splice(keyIndex, 1);
      }

      this.setState({
        selectedArray: onSaveCheckItems,
        checkedKeys: selectedKeys,
        onSaveCheckItems: onSaveCheckItems
      }, function () {
        _this4.props.onTreeSelecting(onSaveCheckItems, selectedKeys);
      });
    }
  };

  RefTreeBaseUI.prototype.render = function render() {
    var _this5 = this;

    var _props3 = this.props,
        title = _props3.title,
        backdrop = _props3.backdrop,
        className = _props3.className,
        showLoading = _props3.showLoading,
        searchable = _props3.searchable,
        valueField = _props3.valueField,
        checkStrictly = _props3.checkStrictly,
        showLine = _props3.showLine,
        lazyModal = _props3.lazyModal,
        showModal = _props3.showModal,
        lang = _props3.lang,
        defaultExpandAll = _props3.defaultExpandAll,
        _props3$nodeDisplay = _props3.nodeDisplay,
        nodeDisplay = _props3$nodeDisplay === undefined ? "{refname}" : _props3$nodeDisplay,
        buttons = _props3.buttons,
        emptyBut = _props3.emptyBut,
        multiple = _props3.multiple,
        treeData = _props3.treeData,
        _props3$theme = _props3.theme,
        theme = _props3$theme === undefined ? 'ref-red' : _props3$theme,
        _props3$modalProps = _props3.modalProps,
        modalProps = _props3$modalProps === undefined ? {} : _props3$modalProps,
        isLocalSearch = _props3.isLocalSearch,
        treeNodeDisabledKey = _props3.treeNodeDisabledKey,
        _props3$treeProps = _props3.treeProps,
        treeProps = _props3$treeProps === undefined ? {} : _props3$treeProps,
        _props3$footerBtnDom = _props3.footerBtnDom,
        footerBtnDom = _props3$footerBtnDom === undefined ? '' : _props3$footerBtnDom,
        searchPlaceholder = _props3.searchPlaceholder,
        fieldid = _props3.fieldid,
        nodataText = _props3.nodataText;
    var _state = this.state,
        checkedKeys = _state.checkedKeys,
        searchValue = _state.searchValue;

    if (checkedKeys.length === 0) emptyBut = false; //20190226没有选中数据清空按钮不展示
    return _react2["default"].createElement(
      _nextUi.Modal,
      _extends({
        show: showModal,
        size: 'sm',
        wrapClassName: theme + ' ' + className + ' ref-core ref-core-modal ref-tree',
        backdrop: backdrop,
        onHide: function onHide() {
          return _this5.onClickBtn('cancel');
        },
        autoFocus: false
      }, modalProps, {
        fieldid: fieldid ? fieldid + '_modal' : undefined
      }),
      _react2["default"].createElement(
        _nextUi.Modal.Header,
        { closeButton: true, fieldid: fieldid ? fieldid + '_modal_header' : undefined },
        _react2["default"].createElement(
          _nextUi.Modal.Title,
          { fieldid: fieldid ? fieldid + '_modal_title' : undefined },
          ' ',
          title,
          ' '
        )
      ),
      _react2["default"].createElement(
        _nextUi.Modal.Body,
        { ref: function ref(_ref) {
            return _this5.modalRef = _ref;
          }, fieldid: fieldid ? fieldid + '_modal_body' : undefined },
        _react2["default"].createElement(_nextUi.Spin, { getPopupContainer: this.modalRef, spinning: showLoading }),
        _react2["default"].createElement(_RefCoreSearch2["default"], {
          show: searchable,
          onSearch: this.onSearch,
          onChange: this.onSearch,
          language: lang,
          placeholder: searchPlaceholder,
          fieldid: fieldid ? fieldid + '_refcoresearch' : undefined
        }),
        treeData.length ? _react2["default"].createElement(_RefCoreTree2["default"], _extends({}, treeProps, {
          show: Boolean(treeData.length),
          nodeKeys: function nodeKeys(item) {
            return item[valueField];
          },
          displayField: nodeDisplay,
          data: treeData,
          defaultExpandAll: lazyModal ? false : defaultExpandAll,
          checkable: multiple,
          multiple: multiple,
          onCheck: this.onCheck.bind(this),
          onSelect: this.onSelect.bind(this),
          onDoubleClick: this.onDoubleClick.bind(this),
          checkedKeys: checkedKeys,
          selectedKeys: checkedKeys,
          checkStrictly: checkStrictly,
          showLine: showLine,
          lazyModal: lazyModal,
          loadData: lazyModal ? this.props.onLoadData : null,
          searchValue: isLocalSearch ? searchValue : '',
          treeNodeDisabledKey: treeNodeDisabledKey,
          fieldid: fieldid ? fieldid + '_refcoretree' : undefined
        })) : _react2["default"].createElement(_RefCoreError2["default"], { show: !Boolean(treeData.length), nodataText: nodataText, language: lang, fieldid: fieldid ? fieldid + '_refcoreerror' : undefined })
      ),
      _react2["default"].createElement(
        _nextUi.Modal.Footer,
        { className: 'ref-core-modal-footer', fieldid: fieldid ? fieldid + '_modal_footer' : undefined },
        _react2["default"].createElement(_RefCoreButton2["default"], { fieldid: fieldid ? fieldid + '_refcorebutton' : undefined, language: lang, onClickBtn: this.onClickBtn, buttons: buttons, emptyBut: emptyBut, footerBtnDom: footerBtnDom })
      )
    );
  };

  return RefTreeBaseUI;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.deepTraversal = function (treeData) {
    var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var valueField = arguments[2];

    var dataCopy = [].concat(treeData);
    if (Array.isArray(dataCopy)) {
      for (var i = 0, l = dataCopy.length; i < l; i++) {
        var _dataCopy$i = dataCopy[i],
            refname = _dataCopy$i.refname,
            children = _dataCopy$i.children,
            props = _objectWithoutProperties(_dataCopy$i, ['refname', 'children']);

        var key = dataCopy[i][valueField];
        var dataCopyI = new Object(),
            isLeaf = children ? false : true;
        dataCopyI = _extends(dataCopyI, {
          key: key,
          refname: refname,
          parentKey: parentKey || null,
          isLeaf: isLeaf
        }, props);
        _this6.flatTreeData.set(key, dataCopyI); // 取每项数据放入一个新数组
        if (Array.isArray(children) && children.length > 0) {
          // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
          _this6.deepTraversal(children, key, valueField);
        }
      }
    }
  };

  this.getParentKeys = function (key) {
    var data = _this6.flatTreeData.get(key);
    if (data.parentKey) {
      _this6.currentParentChildrenArr.add(data.parentKey); //加入当前节点的父节点
      var parentData = _this6.flatTreeData.get(data.parentKey);
      if (parentData) {
        _this6.getParentKeys(data.parentKey); //去找父节点的父级
      }
    }
  };

  this.initComponent = function (props) {
    var _props$matchData2 = props.matchData,
        matchData = _props$matchData2 === undefined ? [] : _props$matchData2,
        value = props.value,
        valueField = props.valueField,
        checkStrictly = props.checkStrictly;

    _this6.setState({
      searchValue: '', //清空搜索
      selectedArray: matchData,
      showLoading: false,
      checkedKeys: matchData.map(function (item) {
        return item[valueField];
      })
    });
  };

  this.onSearch = function (searchValue) {
    if (_this6.props.isLocalSearch) {
      _this6.setState({
        searchValue: searchValue
      });
    } else {
      _this6.props.getRefTreeData(searchValue.trim());
    }
  };

  this.onClickBtn = function (type) {
    var _props4 = _this6.props,
        onCancel = _props4.onCancel,
        onSave = _props4.onSave;

    switch (type) {
      case 'save':
        onSave(_this6.state.selectedArray);
        break;
      case 'cancel':
        _this6.setState({
          selectedArray: [],
          checkedKeys: [],
          onSaveCheckItems: [] //20190124不保存那么选中的数据清空
        }, function () {
          onCancel();
        });
        break;
      case 'clear':
        _this6.setState({
          selectedArray: [],
          checkedKeys: []
        }, function () {});
        break;
      default:
        _this6.setState({ selectedArray: [] }, function () {});
    }
  };
};

RefTreeBaseUI.propTypes = propTypes;
RefTreeBaseUI.defaultProps = defaultProps;
exports["default"] = RefTreeBaseUI;
module.exports = exports["default"];