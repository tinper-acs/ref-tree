/**
 *
 * @title 基础示例3
 * @description 快捷录入和清空功能。快捷录入：在input是空的情况下，可以输入内容进行搜索; 清空功能：配合form表单使用
 *
 */

import React, { Component } from 'react';
import {RefTreeWithInput} from'../../src/index.js';
import '../../src/index.less'
import { Button, Form } from 'tinper-bee';

import request from './request';
class Demo3 extends Component {
    constructor() {
        super();
        this.state = {
            treeData:[],
            matchData:[],
            filterData:[],
        }
    }
    componentDidMount(){
    }
    /**
     * @msg: 打开input右侧menu icon触发的操作
     * @param {type} 
     * @return: 
     */
    canClickGoOn = () =>{
        this.loadData();
        return true;//必须要有
    }
    /**
     * @msg: 请求mock数据
     */
    loadData = async () => {
        this.setState({
          loading:true,
        })
        let ajax={
            url: '/pap_basedoc/common-ref/blobRefTree',
        };
        let results = await request(ajax);
        let treeData = [];
        if (!results || !results.data.length){
          this.setState({ 
            loading:false,
            pageCount:-1,//不展示分页
            totalElements:0,
            treeData,
          });
          return false;
        }
        treeData = results.data;
        let page = results.page;
        this.setState({ 
          treeData,
           ...page,
           loading:false 
        });
        
    }
    /**
     * @msg: filterUrlFunc，快捷录入的回调函数
     * @param {type} 
     * @return: 
     */
    filterUrlFunc = (value) =>{
        //模拟过滤数据
        this.setState({
            filterData:[
                {
                  "code": "asdas",
                  "name": "asfasf",
                  "pid": "44228a37-e97c-4347-8667-3aead5d1261b",
                  "refcode": "asdas",
                  "refpk": "a17df4c2-7b0c-4b26-ba0e-652c380c9f95",
                  "id": "a17df4c2-7b0c-4b26-ba0e-652c380c9f95",
                  "isLeaf": "true",
                  "refname": "asfasf"
                },
                {
                  "code": "bjfs",
                  "name": "北京分公司",
                  "pid": "44228a37-e97c-4347-8667-3aead5d1261b",
                  "refcode": "bjfs",
                  "refpk": "29fedd0a-9d3d-4690-b24d-4a2032cca349",
                  "id": "29fedd0a-9d3d-4690-b24d-4a2032cca349",
                  "isLeaf": "true",
                  "refname": "北京分公司"
                }],
        })
    }
    /**
     * @msg: 保存的回调函数
     * @param {type} 
     * @return: 
     */
    onSave = (result) =>{
        this.setState({
            matchData:result,
        })
    /**
     * @msg: 清空参照值的功能，就是value和matchData置空。前者对应input框，matchData对应树中选中的节点
     * @param {type} 
     * @return: 
     */
    }
    clearFunc = () =>{
       
        this.setState({
            matchData:[],
            random:Math.random()
        },()=>{
            this.props.form.setFieldsValue({tree3:''});
        })
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const {treeData,matchData,filterData} = this.state;
        return (
            <div className="demoPadding">
                <RefTreeWithInput
                    emptyBut={true}
                    nodeDisplay={ (record) => {
                        return record.refname
                    }}
                    displayField={ (record) => {
                        return record.name
                    }}  //显示内容的键
                    valueField={ 'code'}    //真实 value 的键
                    filterUrl={null}
                    filterData={filterData}
                    filterUrlFunc={this.filterUrlFunc}
                    multiple={true}
                    onSave={this.onSave}
                    matchData={matchData}
                    treeData={treeData}
                    canClickGoOn={this.canClickGoOn}
                    {...getFieldProps('tree3', {
                        initialValue:this.state.value,
                        rules: [{
                            message: '请输入请选择', pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                        }]
                    })}
                >
                </RefTreeWithInput>
                <Button  
                    colors="primary"
                    onClick={this.clearFunc}>清空</Button>
            </div>
        )
    }
};

export default Form.createForm()(Demo3);
