import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss'



import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";
var DemoArray = [{"example":<Demo1 />,"title":" 只有RefTreeBaseUI","code":"/**\n *\n * @title 只有RefTreeBaseUI\n * @description 树组件，只有RefTreeBaseUI，没有input框\n *\n */\n\nimport React, { Component } from 'react';\nimport RefTreeBaseUI from '../../src/index';\nimport { Button } from 'tinper-bee';\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return `${record.refname}-标签`\n    },\n    valueField: 'refpk',//真实 value 的键\n    lazyModal: false,\n    // strictMode: false,\n    lang: 'zh_CN',\n    lazyModal:true,\n    value: JSON.stringify({\n        code: \"bj\",\n        id: \"5305416e-e7b4-4051-90bd-12d12942295b\",\n        name: \"北京总部-简\",\n        refcode: \"bj\",\n        refname: \"北京总部-简\",\n        refpk: \"5305416e-e7b4-4051-90bd-12d12942295b\",\n    }),\n    treeData:[{\"code\":\"org1\",\"children\":[{\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},\n    {\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},\n    {\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}]\n};\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            showModal:false,//如果不配合withinput使用必须手动控制showModal，和onSave函数\n            matchData:[],\n        }\n    }\n    onSave= (result) =>{\n        this.setState({\n            showModal:false,\n            matchData:result\n        })\n    }\n    onCancel = () =>{\n        this.setState({showModal:false});\n    }\n    onLoadData = (treeNode) =>{\n        return new Promise((resolve) => {\n\t\t\tthis.getRefTreeloadData(treeNode.props.eventKey,treeNode.props.attr)\n\t\t\tresolve();\n\t\t});\n    }\n    render() {\n        let {showModal,matchData,value} = this.state;\n        let childrenOptions = Object.assign({},option,{\n            showModal,\n            onSave:this.onSave,\n            onCancel:this.onCancel,\n            matchData,\n            onLoadData:this.onLoadData\n        })\n        return (\n            <div className=\"demoPadding\">\n                 <RefTreeBaseUI {...childrenOptions} />\n                 <Button onClick={()=>{this.setState({showModal:true})}}>打开参照</Button>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，只有RefTreeBaseUI，没有input框"},{"example":<Demo2 />,"title":" 使用RefTreeWithInput","code":"/**\n *\n * @title 使用RefTreeWithInput\n * @description 树组件，带有input框,使用RefTreeWithInput\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport { Button, Form } from 'tinper-bee';\n\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return record.refname\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'code',//真实 value 的键\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN',\n    emptyBut:true,\n    filterData:[],\n    matchData:[{refname:'用友集团',code:'org1'}],\n    treeData:[{\"code\":\"org1\",\"children\":[\n        {\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},{\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},{\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}],\n};\nclass Demo2 extends Component {\n    constructor() {\n        super();\n        this.state = {\n        }\n    }\n    componentDidMount(){\n   \n    }\n    getRefTreeData = (value) =>{\n        alert(value)\n      }\n    filterUrlFunc = (value) =>{\n        //模拟过滤数据\n        option['filterData'] = [{name:'111',code:'222'},{name:'233',code:'www'}]\n        this.setState({\n            randon:Math.random()\n        })\n    }\n    onSave = (result) =>{\n        option[\"matchData\"] = result;\n        this.setState({\n            random:Math.random()\n        })\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    {...option}\n                    getRefTreeData={this.getRefTreeData}\n                    onSave={this.onSave}\n                    {...getFieldProps('code1', {\n                        initialValue: JSON.stringify({\n                            refname: \"用友集团\",\n                            refpk: \"org1\",//value中指定的refpk要等于valueField对应的字段\n                        }),\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                    filterUrlFunc={this.filterUrlFunc}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        // console.log(err, values)\n                        alert(JSON.stringify(values));\n                    });\n                }}>提交</Button>\n                <span className='error' style={{display:'block',color:'#f53c32'}}>\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，带有input框,使用RefTreeWithInput"},{"example":<Demo3 />,"title":" 过滤和清空","code":"/**\n *\n * @title 过滤和清空\n * @description 树组件，带有过滤功能和清空功能\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport { Button, Form } from 'tinper-bee';\n\nconst option = {\n    title: '树',\n    searchable: true,\n    multiple: true,\n    checkStrictly: true,\n    disabled: false,\n    nodeDisplay: (record) => {\n        return `${record.refname}-自定义标签`\n    },\n    displayField: (record) => {\n        return record.refname\n    },//显示内容的键\n    valueField: 'code',//真实 value 的键\n    lazyModal: false,\n    strictMode: true,\n    lang: 'zh_CN',\n    emptyBut:true,\n    filterData:[],\n    matchData:[{refname:'北京总部-简',code:'bj'}],//注意要与value保持一致才会让input与树选中节点展示一致\n    treeData:[{\"code\":\"org1\",\"children\":[\n        {\"code\":\"bj\",\"entityType\":\"mainEntity\",\"name\":\"北京总部-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"bj\",\"refpk\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"id\":\"5305416e-e7b4-4051-90bd-12d12942295b\",\"isLeaf\":\"true\",\"refname\":\"北京总部-简\"},{\"code\":\"xd\",\"entityType\":\"mainEntity\",\"name\":\"新道-简\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"xd\",\"refpk\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"id\":\"b691afff-ea83-4a3f-affa-beb2be9cba52\",\"isLeaf\":\"true\",\"refname\":\"新道-简\"},{\"code\":\"yy3\",\"entityType\":\"mainEntity\",\"name\":\"test3\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy3\",\"refpk\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"id\":\"e75694d9-7c00-4e9e-9573-d29465ae79a9\",\"isLeaf\":\"true\",\"refname\":\"test3\"},{\"code\":\"yy1\",\"entityType\":\"mainEntity\",\"name\":\"test1\",\"pid\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refcode\":\"yy1\",\"refpk\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"id\":\"fd32ceeb-57a8-4f44-816e-fa660f5715ab\",\"isLeaf\":\"true\",\"refname\":\"test1\"},{\"code\":\"dept2\",\"children\":[{\"code\":\"cs\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"测试部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"cs\",\"refpk\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"id\":\"cc43a66a-438d-4106-937f-bec44406f771\",\"isLeaf\":\"true\",\"refname\":\"测试部-简\"},{\"code\":\"qd\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"前端部-简\",\"pid\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refcode\":\"qd\",\"refpk\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"id\":\"73a10edd-aae8-4f31-af25-1f48f0a3b344\",\"isLeaf\":\"true\",\"refname\":\"前端部-简\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"生产处\",\"refcode\":\"dept2\",\"refpk\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"id\":\"0ebbb6d8-250a-4d1d-a019-7ae951629a2c\",\"refname\":\"生产处\"},{\"code\":\"dept1\",\"children\":[{\"code\":\"dept1_2\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务二科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_2\",\"refpk\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"id\":\"55b7fff1-6579-4ca9-92b7-3271d288b9f3\",\"isLeaf\":\"true\",\"refname\":\"财务二科\"},{\"code\":\"dept1_1\",\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务一科\",\"pid\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refcode\":\"dept1_1\",\"refpk\":\"9711d912-3184-4063-90c5-1facc727813c\",\"id\":\"9711d912-3184-4063-90c5-1facc727813c\",\"isLeaf\":\"true\",\"refname\":\"财务一科\"}],\"entityType\":\"subEntity\",\"organization_id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"name\":\"财务处\",\"refcode\":\"dept1\",\"refpk\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"id\":\"95b60f35-ed0b-454e-b948-fb45ae30b911\",\"refname\":\"财务处\"}],\"entityType\":\"mainEntity\",\"name\":\"用友集团\",\"refcode\":\"org1\",\"refpk\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"id\":\"a4cf0601-51e6-4012-9967-b7a64a4b2d47\",\"refname\":\"用友集团\"}],\n};\nclass Demo3 extends Component {\n    constructor() {\n        super();\n        this.state = {\n        }\n    }\n    componentDidMount(){\n    }\n    getRefTreeData = (value) =>{\n        alert(value)\n      }\n    filterUrlFunc = (value) =>{\n        //模拟过滤数据\n        option['filterData'] = [\n            {name:'用友集团',code:'org1'},\n            {name:'北京总部-简',code:'bj'}\n        ]\n        this.setState({\n            randon:Math.random()\n        })\n    }\n    onSave = (result) =>{\n        option[\"matchData\"] = result;\n        this.setState({\n            random:Math.random()\n        })\n    }\n    clearFunc = () =>{\n        this.props.form.setFieldsValue({demo3:{refname:'',refpk:''}});\n        option[\"matchData\"] =[];\n        this.setState({\n            random:Math.random()\n        })\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    {...option}\n                    getRefTreeData={this.getRefTreeData}\n                    theme={'ref-red'}\n                    onSave={this.onSave}\n                    {...getFieldProps('demo3', {\n                        initialValue: `{\"refname\":\"北京总部-简\",\"refpk\":\"bj\"}`,\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                    filterUrlFunc={this.filterUrlFunc}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={this.clearFunc}>清空选择</Button>\n                <span className='error' style={{display:'block',color:'#f53c32'}}>\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 树组件，带有过滤功能和清空功能"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
