
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";
var DemoArray = [{"example":<Demo1 />,"title":" 树组件，带有input框","code":"/**\n *\n * @title 树组件，带有input框\n * @description 树组件，带有input框,同RefTreeWithInput,RefWithInput和RefTreeBaseUI组合\n *\n */\n\nimport React, { Component } from 'react';\nimport RefTreeBase from './RefTreeBase';\nimport RefWithInput from 'ref-core/lib/refs/refcorewithinput.js';\nimport  'ref-core/lib/refs/refcorewithinput.css';\nimport { Button, Form } from 'tinper-bee';\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    param: {\n        \"refCode\":\"neworganizition_tree\",\n    },\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return record.refname\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'refpk',//真实 value 的键\n    refModelUrl: {\n        treeUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTree',\n        treeUrl: '/pap_basedoc/common-ref/blobRefTree',\n    },\n    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',\n    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN',\n    emptyBut:true,\n    // className:'ref-walsin-modal',\n    treeData:[{\"code\":\"org1\",\"children\":[{\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},{\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},{\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}]\n};\n// createRefTree({...option, showModal: true})\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n        }\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefWithInput\n                    {...option}\n                    {...getFieldProps('code1', {\n                        initialValue: JSON.stringify({\n                            code: \"org1\",\n                            id: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                            name: \"用友集团\",\n                            refcode: \"org1\",\n                            refname: \"用友集团\",\n                            refpk: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                        }),\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                >\n                 <RefTreeBase />\n                </RefWithInput>\n                \n                <Button  \n                    colors=\"primary\"\n                    onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        console.log(err, values)\n                    });\n                }}>submit</Button>\n                <span className='error' style={{display:'block',color:'#f53c32'}}>\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，带有input框,同RefTreeWithInput,RefWithInput和RefTreeBaseUI组合"},{"example":<Demo2 />,"title":" 树组件，带有input框，使用封装完成","code":"/**\n *\n * @title 树组件，带有input框，使用封装完成的RefTreeWidthInput\n * @description 树组件，带有input框,同RefTreeWidthInput\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport { Button, Form } from 'tinper-bee';\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: false,\n    param: {\n        \"refCode\":\"neworganizition_tree\",\n    },\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return record.refname\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'refpk',//真实 value 的键\n    refModelUrl: {\n        treeUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTree',\n        treeUrl: '/pap_basedoc/common-ref/blobRefTree',\n    },\n    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',\n    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN',\n    emptyBut:true,\n    checkedArray:[{\n        code: \"org1\",\n        id: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n        name: \"用友集团\",\n        refcode: \"org1\",\n        refname: \"用友集团\",\n        refpk: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n    }],\n    treeData:[{\"code\":\"org1\",\"children\":[{\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},{\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},{\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}],\n};\nclass Demo3 extends Component {\n    constructor() {\n        super();\n        this.state = {\n        }\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    {...option}\n                    {...getFieldProps('code1', {\n                        initialValue: JSON.stringify({\n                            code: \"org1\",\n                            id: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                            name: \"用友集团\",\n                            refcode: \"org1\",\n                            refname: \"用友集团\",\n                            refpk: \"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\n                        }),\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        console.log(err, values)\n                    });\n                }}>summit</Button>\n                <span className='error' style={{display:'block',color:'#f53c32'}}>\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，带有input框,同RefTreeWidthInput"},{"example":<Demo3 />,"title":" 树组件，没有input框","code":"/**\n *\n * @title 树组件，没有input框\n * @description 树组件，没有input框\n *\n */\n\nimport React, { Component } from 'react';\nimport RefTreeBase from './RefTreeBase';\nimport  'ref-core/lib/refs/refcorewithinput.css';\nimport { Button, Form } from 'tinper-bee';\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    param: {\n        \"refCode\":\"neworganizition_tree\",\n    },\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return record.refname\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'refpk',//真实 value 的键\n    refModelUrl: {\n        treeUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTree',\n        treeUrl: '/pap_basedoc/common-ref/blobRefTree',\n    },\n    matchUrl: '/pap_basedoc/common-ref/matchPKRefJSON',\n    filterUrl: '/pap_basedoc/common-ref/filterRefJSON',\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN',\n    // className:'ref-walsin-modal',\n    treeData:[{\"code\":\"org1\",\"children\":[{\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},{\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},{\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}]\n\n};\n// createRefTree({...option, showModal: true})\nclass Demo2 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            showModal:false,//如果不配合withinput使用必须手动控制showModal，和onSave函数\n            checkedArray:[],//如果不配合withinput使用必须手动控制checkedArray\n        }\n    }\n    onSave= (result) =>{\n        console.log(result)\n        this.setState({\n            showModal:false,\n            checkedArray:result\n        })\n    }\n    onCancel = () =>{\n        this.setState({showModal:false});\n    }\n    render() {\n        let {showModal,checkedArray} = this.state;\n        let childrenOptions = Object.assign({},option,{\n            showModal,\n            checkedArray,\n            onSave:this.onSave,\n            onCancel:this.onCancel,\n        })\n        return (\n            <div className=\"demoPadding\">\n                 <RefTreeBase {...childrenOptions}/>\n                 <Button onClick={()=>{this.setState({showModal:true})}}>打开参照</Button>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，没有input框"}]


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

