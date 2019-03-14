/**
 *
 * @title 树组件，带有input框
 * @description 树组件，带有input框,同RefTreeWidthInput
 *
 */

import React, { Component } from 'react';
import RefTreeBase from './RefTreeBase';
import RefWithInput from 'ref-core/lib/refs/refcorewithinput.js';
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
class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <RefWithInput
                    {...option}
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
                 <RefTreeBase />
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
