
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 树组件，带有input框","code":"/**\n *\n * @title 树组件，带有input框\n * @description 树组件，带有input框,通RefTreeWidthInput\n *\n */\n\nimport React, { Component } from 'react';\nimport RefTreeBase from './RefTreeBase';\nimport RefWithInput from 'ref-core/lib/refs/refcorewithinput.js';\nimport  'ref-core/lib/refs/refcorewithinput.css';\nimport { Button, Form } from 'tinper-bee';\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    param: {\n        \"refCode\":\"neworganizition_tree\",\n    },\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return record.refname\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'refpk',//真实 value 的键\n    refModelUrl: {\n        treeUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTree',\n        treeUrl: '/pap_basedoc/common-ref/blobRefTree',\n    },\n    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',\n    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN'\n};\n// createRefTree({...option, showModal: true})\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n        }\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefWithInput\n                    {...option}\n                    {...getFieldProps('code1', {\n                        initialValue: JSON.stringify({\n                            code: \"org1\",\n                            id: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                            name: \"用友集团\",\n                            refcode: \"org1\",\n                            refname: \"用友集团\",\n                            refpk: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                        }),\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                >\n                 <RefTreeBase />\n                </RefWithInput>\n                \n                <Button  \n                    colors=\"primary\"\n                    onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        console.log(err, values)\n                    });\n                }}>submit</Button>\n                <span className='error' style={{display:'block',color:'#f53c32'}}>\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，带有input框,通RefTreeWidthInput"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

