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
