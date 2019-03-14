## ref-tree 参照-树形通用ui

>树形参照通用ui

## 代码演示
```sh
$ npm install ref-tree --save
```

```javascript
//demo2.js

/**
 *
 * @title 树组件，没有input框
 * @description 树组件，没有input框
 *
 */

import React, { Component } from 'react';
import RefTreeBase from './RefTreeBase';
import  'ref-core/lib/refs/refcorewithinput.css';
import { Button, Form } from 'tinper-bee';
const option = {
    title: '树',
    searchable: true,
    multiple: true,
    param: {
        "refCode":"neworganizition_tree",
    },
    checkStrictly: true,
    disabled: false,
    nodeDisplay: (record) => {
        return record.refname
    },
    displayField: (record) => {
        return record.refname
    },//显示内容的键
    valueField: 'refpk',//真实 value 的键
    refModelUrl: {
        treeUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTree',
        treeUrl: '/pap_basedoc/common-ref/blobRefTree',
    },
    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',
    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',
    lazyModal: false,
    strictMode: true,
    lang: 'zh_CN',
    // className:'ref-walsin-modal'
};
// createRefTree({...option, showModal: true})
class Demo2 extends Component {
    constructor() {
        super();
        this.state = {
            showModal:false,//如果不配合withinput使用必须手动控制showModal，和onSave函数
            checkedArray:[],//如果不配合withinput使用必须手动控制checkedArray
        }
    }
    onSave= (result) =>{
        console.log(result)
        this.setState({
            showModal:false,
            checkedArray:result
        })
    }
    onCancel = () =>{
        this.setState({showModal:false});
    }
    render() {
        let {showModal,checkedArray} = this.state;
        let childrenOptions = Object.assign({},option,{
            showModal,
            checkedArray,
            onSave:this.onSave,
            onCancel:this.onCancel,
        })
        return (
            <div className="demoPadding">
                 <RefTreeBase {...childrenOptions}/>
                 <Button onClick={()=>{this.setState({showModal:true})}}>打开参照</Button>
            </div>
        )
    }
};

export default Demo2;
```

```javascript
//reftreebase.js

/**
 *
 * @title 树组件，没有input框
 * @description 树组件，没有input框
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import RefTreeBaseUI from 'ref-tree';
import { refValParse } from './utils';
import request from './request';
const noop = () => {
};
const getTreeList = (url,param, content="",  jsonp = false) => request(url, {
	method: 'get',
	params: Object.assign(param,{content}),
	jsonp: jsonp
});
// data:this.treeData,树的所有节点，curKey:正在操作的节点的key值，
// child:1.request请求得到的该key下的子节点，或者缓存中该key下的子节点
const clearChild = (data, curKey, child) => {
	data.map((item) => {
		if (curKey == item.id) {
			item.children = child;
		} else if (item.children){
			 clearChild( item.children,curKey,child);
		}else{
		}
	});
	return data;
};
const propTypes = {
	checkedArray: PropTypes.array, //  指定已选择数据id
	param: PropTypes.object,
	lazyModal: PropTypes.bool,
	lazyParam:PropTypes.array, // 20190127懒加载需要多传参数，暂时不对外暴露
	onCancel: PropTypes.func,
	onSave: PropTypes.func,
	value: PropTypes.string,
	matchUrl: PropTypes.string,
	jsonp: PropTypes.object,
	headers:PropTypes.object,
	onMatchInitValue: PropTypes.func,
	refModelUrl:PropTypes.object,
	onAfterAjax: PropTypes.func,
};
const defaultProps = {
	checkStrictly: false,
	checkedArray: [], //  指定已选择数据id
	lazyModal: false,
	lazyParam:[],// 20190127懒加载需要多传参数，暂时不对外暴露
	param: {
		refCode: '',
	},
	onCancel: noop,
	onSave: noop,
	value: '',
}

class RefTreeBase extends Component {
	constructor(props) {
		super(props);
		const { checkedArray, valueField } = props;
		this.state = {
			showLoading:false,
			selectedArray: checkedArray || [], //  记录保存的选择项
			checkedKeys: checkedArray.map(item=>{
				return item[valueField];
			}),
			expandedKeys: [],
			onSaveCheckItems: [],
			isAfterAjax: false,
			showLoading: false
		};
		
		this.treeData = [];
		this.treeDataCache = {};
	}
	shouldComponentUpdate(nextProps, nextState){
		return !is(nextState, this.state) || nextProps.showModal !== this.props.showModal;
	}
	componentWillReceiveProps(nextProps) {
		let { strictMode,checkedArray,valueField } = nextProps;
		//严格模式下每次打开必须重置数据
		if( nextProps.showModal && !this.props.showModal ){ //正在打开弹窗
			if( strictMode || !this.treeData.length ) {
				//开启严格模式 
				this.setState({
					showLoading: true
				},() => {
					this.initComponent();
				});
			}
			//20190124因為不再走constructor，导致checkedKeys和selectedArray不一致
			if(checkedArray.length>0){
				this.setState({
					selectedArray: checkedArray || [], //  记录保存的选择项
					checkedKeys: checkedArray.map(item=>{
						return item[valueField];
					}),
				})
			}
		}
	}
	initComponent = () => {
		let { matchUrl, param, value, jsonp, headers, checkedArray, onMatchInitValue } = this.props;
		this.getRefTreeData();
		//当有已选值，不做校验，即二次打开弹出层不做校验
		let valueMap = refValParse(value)
		if(checkedArray.length != 0 || !valueMap.refpk) return;
		if(matchUrl){
			request(matchUrl, { 
				method: 'post',
				data: {
					...param,
					refCode: param.refCode,
					pk_val: valueMap.refpk.split(',') || ''
				},
				jsonp: jsonp,
				headers
				
			}).then(response=>{
				let { data = [] } = response || {};
				if(Object.prototype.toString.call(onMatchInitValue) === '[object Function]'){
					onMatchInitValue(data);
				}
				this.setState({
					checkedArray: data,
					selectedArray: data,
					showLoading: false,
					checkedKeys: data.map(item=>{
						return item.refpk;
					})
				});
			}).catch(()=>{
				this.setState({
					checkedArray: [],
					selectedArray: [],
					showLoading: false,
					checkedKeys: []
				});
			});
		}else{
			//当时不使用 matchUrl 做校验时，直接使用默认数护具标记选项，但数据完整性会变弱。
			this.setState({
				checkedArray: [valueMap],
				selectedArray: [valueMap],
				showLoading: false,
				checkedKeys: valueMap.refpk.split(',')
			});
		}
		
	}
	//   获取树组件数据
	getRefTreeData(value) {
		let { param, refModelUrl, lazyModal, onAfterAjax, jsonp } = this.props;
		const URL = refModelUrl.treeUrl;
		param = Object.assign(param, {
			treeNode: "",
			treeloadData: lazyModal
		});
		getTreeList(URL, param, value, jsonp).then((res) => {
			if (onAfterAjax && !this.state.isAfterAjax) {
				onAfterAjax(res)
				this.setState({ isAfterAjax: true })
			}
			let { data, page } = res;
			if (data && data.length > 0) {
				if (lazyModal) {
					data = data.map((item) => {
						delete item.children;
						return item;
					})
				}
				this.treeData = data;
				this.setState({
					showLoading: false
				});
				if (data[0].id) {
					this.setState({
						expandedKeys: [data[0].id],
					});
				}
			} else {
				this.treeData = [];
				this.setState({
					showLoading: false,
				});
			}
		}).catch(()=>{
			this.treeData = [];
			this.setState({
				showLoading: false
			});
		});
	}
	onLoadData = (treeNode) => {
		return new Promise((resolve) => {
			this.getRefTreeloadData(treeNode.props.eventKey,treeNode.props.attr)
			resolve();
		});
	}
	/**
	 * 懒加载
	 * @param {选择的节点} treeNode 
	 */
	getRefTreeloadData(treeNode,treeNodeAttr) {
		let { param, refModelUrl, lazyModal, tabData, jsonp ,lazyParam} = this.props;
		const URL = refModelUrl.treeUrl;
		if(this.treeDataCache[treeNode]){
			this.treeData = clearChild(this.treeData, treeNode, this.treeDataCache[treeNode]);
			this.setState({
				showLoading: false
			});
			return ;
		}
		//lazyModal 懒加载模式,懒加载的参数传递与其他的不一样
		// 两种情况，单树只需要一个参数，组合树需要多个参数
		if(!lazyParam.length){
			param = Object.assign(param, {
				treeNode: treeNode,
				treeloadData: lazyModal
			});
		}else{
			let treeNodeVal = {};
			treeNodeVal['refpk'] = treeNode;
			lazyParam.forEach(key=>{
				treeNodeVal[key] = treeNodeAttr[key]
			});
			param = Object.assign(param, {
				treeNode: JSON.stringify(treeNodeVal),
				treeloadData: lazyModal
			});
		}
		
		this.setState({
			showLoading: true
		});
		getTreeList(URL, param, "", jsonp).then((res) => {
			if (res) {
				let { data = [] } = res;
				this.treeDataCache[treeNode] = data;
				if(data.length !== 0){
					this.treeData = clearChild(this.treeData, treeNode, data);
				}
			}
			this.setState({
				showLoading: false
			});
			
		}).catch(()=>{
			this.setState({
				showLoading: false
			});
		});
	}

	
	render() {
		const {showLoading,selectedArray,checkedKeys,expandedKeys,onSaveCheckItems } = this.state;
		let childrenProps = Object.assign({},this.props,{
			treeData:this.treeData,
			showLoading:showLoading,
			selectedArray: selectedArray, //  记录保存的选择项
			checkedKeys: checkedKeys,
			expandedKeys: expandedKeys,
			onSaveCheckItems: onSaveCheckItems,
		});
		return (
			<RefTreeBaseUI {...childrenProps}/>
		);
	}
}
RefTreeBase.propTypes = propTypes;
RefTreeBase.defaultProps = defaultProps;
export default RefTreeBase;


```


## 树形参照通用ui

### RefTreeBaseUI
    
树的通用ui，只有一个树组件


## RefTreeBaseUI API

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
className |`string`|空 | 参照class样式，作用于弹出层的样式，默认为空。 | 否
title |``string``|空 |打开上传的模态框显示的标题文字 | 否
className |`string`|空 | 参照class样式，作用sh于弹出层的样式，默认为空。'ref-walsin-modal'参照使用另外一种风格 | 否
showLoading | `bool` | false | 是否展示loading，多用于请求中| 否
backdrop |`bool`| true |弹出层是否有模态层，true 显示，false 不显示 | 否
lang|`string`| `zh_TW` |多语配置，详情查看参数详解 | 否
buttons|`object`| - |{buttons:{cancelText:'',confirmText:'',okText:''}} 按钮文字展示| 否
emptyBut| `bool` | false| 清空按钮是否展示 |否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
nodeDisplay |<code>string 或 function</code>| `{refname}` |节点渲染时可匹配的内容，这里为了提供根据数据渲染节点图标使用 | 否
checkStrictly| `bool` | checkable状态下节点选择完全受控（父子节点选中状态不再关联）|否
multiple |`bool`| false |是否单选， true 多选，false 单选， 同时多选时不会有确认和取消按钮，多选时会出现复选框 | 否
searchable |`bool`|true |是否显示搜索框，弹出层是否带有搜索框，true 显示，false 不显示。 | 否
defaultExpandAll |`bool`|false |展开所有节点 true 展开，false 不展开 | 否
nodeDisplay |<code>string 或 function</code>|'{refname}' |指定树节点渲染内容。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}。是树节点展示的内容| 否
showModal | `bool` | false | 是否展示参照 ，true显示，false不显示(span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
onSave | `function(value)` | -- | 参照确定的回调(<span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
onCancel | `function(value)` | -- | 参照取消的回调(span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
checkedArray | `Array` | [] | 传给树选中的节点(span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否



## RefWithInput  API
<span style="color: red; font-size: 15px;">注意：RefWithInput（ref-core）可以和RefTreeBaseUI配套使用，下面是RefWithInput可以接收的参数，以及RefWithInput给RefTreBaseUI提供的参数</span>

### RefWithInput接收的参数

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
wrapClassName|`string`|空 | 文本框的class样，默认为空。 | 否
placeholder|`string`| 空 |文本框的 placeholder | 否
style| `object`| {width:200}| 文本框的style，默认宽度200px | 否 
filterUrl| `string`|空|快捷录入接口。|否
displayField |<code>string 或 function</code>|'{refname}' |记录中显示的键。<br/>当为字符串时则会根据`{}`包裹的增则匹配替换。<br/>如：`'人员姓名：{refname}，编号：{refcode}'`<br/>当为函数时则需自定义返回内容，参数为迭代已选择的记录。<br/>如：<br/>displayField: (record)=>  ${record.refname}-${record.refname}，是input展示value| 否
valueField |``string``|'refcode' |待提交的 value 的键。 | 否
value| ``string``|空|默认值，例如 `'{"refname":"初级-T1","refpk":"level1"}'`。|否
disabled|`bool`| false |禁用整个参照 | 否
onChange|`function(values, record)`|--|value改变、快捷录入和保存时数据回调|否
canClickGoOn|`function()`| ()=>{return true}|当点击文本框右侧弹出按钮时是否打开modal<br>适用于级联情况下当选择不全时的处理| 否 
canInputGoOn|`function()`| ()=>{return true}|当点击文本框触发快捷录入时是否可以录入<br>适用于级联情况下当选择不全时的处理| 否 

### RefWithInput提供的参数

参数 | 类型 |默认值| 说明 | 必选
---|---|--- | --- | ---
showModal | `bool` | false | 是否展示参照 ，true显示，false不显示| 否
onSave | `function(value)` | -- | 参照确定的回调，会更新checkedArray，showname（input的value），showModal关闭,最后回调RefWithInput接收的参数onSave| 否
onCancel | `function()` | -- | 参照取消的回调，会更新showModal关闭,最后回调RefWithInput接收的参数onCancel| 否
checkedArray | `Array` | [] | 传给树选中的节点| 否
onMatchInitValue| `function(value)` | onMatchInitValue = (checkedArray) => {this.setState({checkedArray})} | 更改checkedArray | 否

> RefWithInput提供的参数可以保证参照组件的checkedArray更新以及参照showModal关闭打开，因此在使用RefWithInput就需要额外手动维护这两个参数



## 参数详解

```js
eg:
    nodeDisplay:'{refname}-{refcode}',
    lang:
      "zh_CN" // 中文
      "en_US" // 英文
      "zh_TW" // 繁体中文
      "fr_FR" // 法文
      "de_DE" // 德文
      "ja_JP" // 日文
```

## 开发调试

```sh

$ npm install

$ npm run dev

```
