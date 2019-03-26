# ref-tree 参照树形


## 何时使用
>单选多选树形参照通用ui


## 如何使用

```
$ ynpm install ref-tree@2.0.0-beta.0 --save

引入

import RefTreeBaseUI from 'ref-tree';

样式

import 'ref-tree/dist/index.css';

```

## 代码演示
```javascript

/**
 *
 * @title 树组件，带有input框
 * @description 树组件，带有input框,同RefTreeWithInput,RefWithInput和RefTreeBaseUI组合
 *
 */

import React, { Component } from 'react';
import RefWithInput from 'ref-core/lib/refs/refcorewithinput.js';
import RefTreeBaseUI from '../../src/RefTreeBaseUI';
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
    emptyBut:true,
    // className:'ref-walsin-modal',
    treeData:[{"code":"org1","children":[{"code":"bj","entityType":"mainEntity","name":"北京总部-简","pid":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","refcode":"bj","refpk":"5305416e-e7b4-4051-90bd-12d12942295b","id":"5305416e-e7b4-4051-90bd-12d12942295b","isLeaf":"true","refname":"北京总部-简"},{"code":"xd","entityType":"mainEntity","name":"新道-简","pid":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","refcode":"xd","refpk":"b691afff-ea83-4a3f-affa-beb2be9cba52","id":"b691afff-ea83-4a3f-affa-beb2be9cba52","isLeaf":"true","refname":"新道-简"},{"code":"yy3","entityType":"mainEntity","name":"test3","pid":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","refcode":"yy3","refpk":"e75694d9-7c00-4e9e-9573-d29465ae79a9","id":"e75694d9-7c00-4e9e-9573-d29465ae79a9","isLeaf":"true","refname":"test3"},{"code":"yy1","entityType":"mainEntity","name":"test1","pid":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","refcode":"yy1","refpk":"fd32ceeb-57a8-4f44-816e-fa660f5715ab","id":"fd32ceeb-57a8-4f44-816e-fa660f5715ab","isLeaf":"true","refname":"test1"},{"code":"dept2","children":[{"code":"cs","entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"测试部-简","pid":"0ebbb6d8-250a-4d1d-a019-7ae951629a2c","refcode":"cs","refpk":"cc43a66a-438d-4106-937f-bec44406f771","id":"cc43a66a-438d-4106-937f-bec44406f771","isLeaf":"true","refname":"测试部-简"},{"code":"qd","entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"前端部-简","pid":"0ebbb6d8-250a-4d1d-a019-7ae951629a2c","refcode":"qd","refpk":"73a10edd-aae8-4f31-af25-1f48f0a3b344","id":"73a10edd-aae8-4f31-af25-1f48f0a3b344","isLeaf":"true","refname":"前端部-简"}],"entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"生产处","refcode":"dept2","refpk":"0ebbb6d8-250a-4d1d-a019-7ae951629a2c","id":"0ebbb6d8-250a-4d1d-a019-7ae951629a2c","refname":"生产处"},{"code":"dept1","children":[{"code":"dept1_2","entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"财务二科","pid":"95b60f35-ed0b-454e-b948-fb45ae30b911","refcode":"dept1_2","refpk":"55b7fff1-6579-4ca9-92b7-3271d288b9f3","id":"55b7fff1-6579-4ca9-92b7-3271d288b9f3","isLeaf":"true","refname":"财务二科"},{"code":"dept1_1","entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"财务一科","pid":"95b60f35-ed0b-454e-b948-fb45ae30b911","refcode":"dept1_1","refpk":"9711d912-3184-4063-90c5-1facc727813c","id":"9711d912-3184-4063-90c5-1facc727813c","isLeaf":"true","refname":"财务一科"}],"entityType":"subEntity","organization_id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","name":"财务处","refcode":"dept1","refpk":"95b60f35-ed0b-454e-b948-fb45ae30b911","id":"95b60f35-ed0b-454e-b948-fb45ae30b911","refname":"财务处"}],"entityType":"mainEntity","name":"用友集团","refcode":"org1","refpk":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","id":"a4cf0601-51e6-4012-9967-b7a64a4b2d47","refname":"用友集团"}]
};
// createRefTree({...option, showModal: true})
class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    getRefTreeData = (value) =>{
      alert(value)
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <RefWithInput
                    {...option}
                    getRefTreeData={this.getRefTreeData}
                    {...getFieldProps('code1', {
                        initialValue: JSON.stringify({
                            code: "org1",
                            id: "a4cf0601-51e6-4012-9967-b7a64a4b2d47",
                            name: "用友集团",
                            refcode: "org1",
                            refname: "用友集团",
                            refpk: "a4cf0601-51e6-4012-9967-b7a64a4b2d47",
                        }),
                        rules: [{
                            message: '请输入请选择', pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                        }]
                    })}
                >
                    <RefTreeBaseUI />
                </RefWithInput>
                
                <Button  
                    colors="primary"
                    onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</Button>
                <span className='error' style={{display:'block',color:'#f53c32'}}>
                    {getFieldError('code1')}
                </span>
            </div>
        )
    }
};

export default Form.createForm()(Demo1);


```




## API

### RefTreeBaseUI

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
treeData | `Array` | []| 树参照数据 | 否
showModal | `bool` | false | 是否展示参照 ，true显示，false不显示(<span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
onSave | `function(value)` | -- | 参照确定的回调(<span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
onCancel | `function(value)` | -- | 参照取消的回调(<span style="color: red; font-size: 15px;">refcorewithinput可以提供</span>)| 否
value| ``string``|空|默认值，RefWithInput和参照组件都会使用，可以初始化树选中的节点。例如 `'{"refname":"初级-T1","refpk":"level1"}'`。|否
matchData | `Array` | [] | 传给树选中的节点(<span style="color: red; font-size: 15px;">macthData优先，其次是value</span>)| 否

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
checkedArray | `Array` | [] | 传给参照选中的节点，所以参照中选中节点通过value和matchData来控制| 否
onMatchInitValue| `function(value)` | onMatchInitValue = (checkedArray) => {this.setState({checkedArray})} | 更改checkedArray | 否

## 注意事项
 > RefCoreWithInput提供的参数可以保证参照组件showModal关闭打开，因此在使用RefCoreWithInput就不需要额外手动维护showModal
 
 > RefCoreWithInput使用value来展示input的值，参照组件使用matchData来初始化选中节点，若matchData为空，使用value来初始化参照中checkedArray（树组件可以，表不可以）

> 注意：modalShow在refcorewithinput中有提供。因此若是refcorewithinput和refmultipletablebaseui配合使用，注意showModal onSave onCancel
## 树形参照分类


### RefTreeBaseUI
    
树的通用ui，只有一个树组件

### RefTree

参照弹出窗，没有输入框，使用时可根据自己需要定义具体的文本框。实质是RefCoreGlobal和RefTreeBaseUI的组合

### RefTreeWithInput
  带文本框的参照弹出窗。在 RefTree 基础上封装实现，RefWithInput和 RefTree组合。
  
### createRefTree
  非 ReactJS 调用方式，与 RefTree 相同没有输入框，使用时可根据自己需要定义具体的文本框。
  
#### createRefTreeWithInput
    非 ReactJS 调用方式，与  RefTreeTableWithInput 相同带文本框的参照弹出窗。

