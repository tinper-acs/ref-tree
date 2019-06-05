import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss';


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";import Demo4 from "./demolist/Demo4";
var DemoArray = [{"example":<Demo1 />,"title":" 基础示例1","code":"/**\n *\n * @title 基础示例1\n * @description RefTreeBaseUI\n *\n */\n\nimport React, { Component } from 'react';\nimport RefTreeBaseUI from '../../src/index';\nimport '../../src/index.less'\nimport { Button } from 'tinper-bee';\nimport request from './request';\n\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            showModal:false,//如果不配合withinput使用必须手动控制showModal，和onSave函数\n            treeData:[],\n        }\n    }\n    /**\n     * @msg: 请求mock数据\n     */\n    loadData = async () => {\n        this.setState({\n          loading:true,\n        })\n        let ajax={\n            url: '/pap_basedoc/common-ref/blobRefTree',\n        };\n        let results = await request(ajax);\n        let treeData = [];\n        if (!results || !results.data.length){\n          this.setState({ \n            loading:false,\n            pageCount:-1,//不展示分页\n            totalElements:0,\n            treeData,\n          });\n          return false;\n        }\n        treeData = results.data;\n        let page = results.page;\n        this.setState({ \n          treeData,\n           ...page,\n           loading:false \n        });\n        \n    }\n    /**\n     * @msg: modal弹框确定按钮\n     * @param {type} \n     * @return: \n     */\n    onSave= (result) =>{\n        this.setState({\n            showModal:false,\n            matchData:result,//保存选中的数据\n        })\n    }\n    /**\n     * @msg: modal弹框右上角X和取消按钮\n     * @param {type} \n     * @return: \n     */\n    onCancel = () =>{\n        this.setState({showModal:false});\n    }\n    \n    render() {\n        let {showModal,matchData,treeData} = this.state;\n        let childrenOptions = Object.assign({},{\n            treeData,\n            showModal,\n            onSave:this.onSave,\n            onCancel:this.onCancel,\n            matchData,\n            onLoadData:this.onLoadData\n        })\n        return (\n            <div className=\"demoPadding\">\n                 <RefTreeBaseUI {...childrenOptions} />\n                 <Button colors=\"primary\" onClick={()=>{this.setState({showModal:true},()=>{\n                     this.loadData()\n                 })}}>打开参照</Button>\n            </div>\n        )\n    }\n};\n\n\n","desc":" RefTreeBaseUI"},{"example":<Demo2 />,"title":" 基础示例2","code":"/**\n *\n * @title 基础示例2\n * @description RefTreeWithInput\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport '../../src/index.less'\nimport { Button, Form } from 'tinper-bee';\n\nimport request from './request';\nclass Demo2 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            treeData:[],\n            matchData:[{name:'用友集团',refname:'用友集团',code:'001'}],\n        }\n    }\n    componentDidMount(){\n    }\n    /**\n     * @msg: 打开input右侧menu icon触发的操作\n     * @param {type} \n     * @return: \n     */\n    canClickGoOn = () =>{\n        this.loadData();\n        return true;//必须要有\n    }\n    /**\n     * @msg: 请求mock数据\n     */\n    loadData = async () => {\n        this.setState({\n          loading:true,\n        })\n        let ajax={\n            url: '/pap_basedoc/common-ref/blobRefTree',\n        };\n        let results = await request(ajax);\n        let treeData = [];\n        if (!results || !results.data.length){\n          this.setState({ \n            loading:false,\n            pageCount:-1,//不展示分页\n            totalElements:0,\n            treeData,\n          });\n          return false;\n        }\n        treeData = results.data;\n        let page = results.page;\n        this.setState({ \n          treeData,\n           ...page,\n           loading:false \n        });\n        \n    }\n    \n    /**\n     * @msg: 保存操作的回调\n     * @param {type} \n     * @return: \n     */\n    onSave = (result) =>{\n        this.setState({\n            matchData:result,\n        })\n    }\n    \n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        const {treeData,matchData,filterData} = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    emptyBut={true}\n                    nodeDisplay={ (record) => {\n                        return record.refname\n                    }}\n                    displayField={ (record) => {\n                        return record.name\n                    }}  //显示内容的键\n                    valueField={ 'code'}    //真实 value 的键\n                    multiple={true}\n                    onSave={this.onSave}\n                    matchData={matchData}\n                    treeData={treeData}\n                    canClickGoOn={this.canClickGoOn}\n                    {...getFieldProps('code1', {\n                        initialValue: JSON.stringify({\n                            refname: \"用友集团\",\n                            refpk: \"org1\",  //value中指定的refpk要等于valueField对应的字段\n                        }),\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        // console.log(err, values)\n                        alert(JSON.stringify(values));\n                    });\n                }}>提交</Button>\n                <span className='error' >\n                    {getFieldError('code1')}\n                </span>\n            </div>\n        )\n    }\n};\n\n\n","desc":" RefTreeWithInput"},{"example":<Demo3 />,"title":" 基础示例3","code":"/**\n *\n * @title 基础示例3\n * @description 快捷录入和清空功能。快捷录入：在input是空的情况下，可以输入内容进行搜索; 清空功能：配合form表单使用\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport '../../src/index.less'\nimport { Button, Form } from 'tinper-bee';\n\nimport request from './request';\nclass Demo3 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            treeData:[],\n            matchData:[],\n            filterData:[],\n        }\n    }\n    componentDidMount(){\n    }\n    /**\n     * @msg: 打开input右侧menu icon触发的操作\n     * @param {type} \n     * @return: \n     */\n    canClickGoOn = () =>{\n        this.loadData();\n        return true;//必须要有\n    }\n    /**\n     * @msg: 请求mock数据\n     */\n    loadData = async () => {\n        this.setState({\n          loading:true,\n        })\n        let ajax={\n            url: '/pap_basedoc/common-ref/blobRefTree',\n        };\n        let results = await request(ajax);\n        let treeData = [];\n        if (!results || !results.data.length){\n          this.setState({ \n            loading:false,\n            pageCount:-1,//不展示分页\n            totalElements:0,\n            treeData,\n          });\n          return false;\n        }\n        treeData = results.data;\n        let page = results.page;\n        this.setState({ \n          treeData,\n           ...page,\n           loading:false \n        });\n        \n    }\n    /**\n     * @msg: filterUrlFunc，快捷录入的回调函数\n     * @param {type} \n     * @return: \n     */\n    filterUrlFunc = (value) =>{\n        //模拟过滤数据\n        this.setState({\n            filterData:[\n                {\n                  \"code\": \"asdas\",\n                  \"name\": \"asfasf\",\n                  \"pid\": \"44228a37-e97c-4347-8667-3aead5d1261b\",\n                  \"refcode\": \"asdas\",\n                  \"refpk\": \"a17df4c2-7b0c-4b26-ba0e-652c380c9f95\",\n                  \"id\": \"a17df4c2-7b0c-4b26-ba0e-652c380c9f95\",\n                  \"isLeaf\": \"true\",\n                  \"refname\": \"asfasf\"\n                },\n                {\n                  \"code\": \"bjfs\",\n                  \"name\": \"北京分公司\",\n                  \"pid\": \"44228a37-e97c-4347-8667-3aead5d1261b\",\n                  \"refcode\": \"bjfs\",\n                  \"refpk\": \"29fedd0a-9d3d-4690-b24d-4a2032cca349\",\n                  \"id\": \"29fedd0a-9d3d-4690-b24d-4a2032cca349\",\n                  \"isLeaf\": \"true\",\n                  \"refname\": \"北京分公司\"\n                }],\n        })\n    }\n    /**\n     * @msg: 保存的回调函数\n     * @param {type} \n     * @return: \n     */\n    onSave = (result) =>{\n        this.setState({\n            matchData:result,\n        })\n    /**\n     * @msg: 清空参照值的功能，就是value和matchData置空。前者对应input框，matchData对应树中选中的节点\n     * @param {type} \n     * @return: \n     */\n    }\n    clearFunc = () =>{\n       \n        this.setState({\n            matchData:[],\n            random:Math.random()\n        },()=>{\n            this.props.form.setFieldsValue({tree3:''});\n        })\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        const {treeData,matchData,filterData} = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    emptyBut={true}\n                    nodeDisplay={ (record) => {\n                        return record.refname\n                    }}\n                    displayField={ (record) => {\n                        return record.name\n                    }}  //显示内容的键\n                    valueField={ 'code'}    //真实 value 的键\n                    filterUrl={null}\n                    filterData={filterData}\n                    filterUrlFunc={this.filterUrlFunc}\n                    multiple={true}\n                    onSave={this.onSave}\n                    matchData={matchData}\n                    treeData={treeData}\n                    canClickGoOn={this.canClickGoOn}\n                    {...getFieldProps('tree3', {\n                        initialValue:this.state.value,\n                        rules: [{\n                            message: '请输入请选择', pattern: /[^{\"refname\":\"\",\"refpk\":\"\"}|{\"refpk\":\"\",\"refname\":\"\"}]/\n                        }]\n                    })}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={this.clearFunc}>清空</Button>\n            </div>\n        )\n    }\n};\n\n\n","desc":" 快捷录入和清空功能。快捷录入：在input是空的情况下，可以输入内容进行搜索; 清空功能：配合form表单使用"},{"example":<Demo4 />,"title":" 基础示例4","code":"/**\n *\n * @title 基础示例4\n * @description 清空功能：不使用form表单\n *\n */\n\nimport React, { Component } from 'react';\nimport {RefTreeWithInput} from'../../src/index.js';\nimport '../../src/index.less'\nimport { Button, Form } from 'tinper-bee';\n\nimport request from './request';\nclass Demo4 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            value:'{\"refname\":\"用友集团\",\"refpk\":\"001\"}',\n            treeData:[],\n            matchData:[{name:'用友集团',refname:'用友集团',code:'001'}],\n        }\n    }\n    componentDidMount(){\n    }\n    /**\n     * @msg: 打开input右侧menu icon触发的操作\n     * @param {type} \n     * @return: \n     */\n    canClickGoOn = () =>{\n        this.loadData();\n        return true;//必须要有\n    }\n    /**\n     * @msg: 请求mock数据\n     */\n    loadData = async () => {\n        this.setState({\n          loading:true,\n        })\n        let ajax={\n            url: '/pap_basedoc/common-ref/blobRefTree',\n        };\n        let results = await request(ajax);\n        let treeData = [];\n        if (!results || !results.data.length){\n          this.setState({ \n            loading:false,\n            pageCount:-1,//不展示分页\n            totalElements:0,\n            treeData,\n          });\n          return false;\n        }\n        treeData = results.data;\n        let page = results.page;\n        this.setState({ \n          treeData,\n           ...page,\n           loading:false \n        });\n        \n    }\n    \n    /**\n     * @msg: 保存操作的回调\n     * @param {type} \n     * @return: \n     */\n    onSave = (result) =>{\n        console.log(result)\n        this.setState({\n            matchData:result,\n        })\n    }\n    /**\n     * @msg: 清空操作\n     * @param {type} 此时value不可以直接传'',因为''下只能清除一次，第二次清除时前后value都是''，不会触发更新操作，\n     * 因此通过refpk不一致来触发\n     * @return: \n     */\n    clearFunc = () =>{\n        this.setState({\n            matchData:[],\n            value:`{\"refname\":\"\",\"refpk\":\"${Math.random()}\"}`,\n        })\n    }\n    render() {\n        const {treeData,matchData,filterData} = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <RefTreeWithInput\n                    emptyBut={true}\n                    nodeDisplay={ (record) => {\n                        return record.refname\n                    }}\n                    displayField={ (record) => {\n                        return record.name\n                    }}  //显示内容的键\n                    valueField={ 'code'}    //真实 value 的键\n                    multiple={true}\n                    onSave={this.onSave}\n                    matchData={matchData}\n                    treeData={treeData}\n                    canClickGoOn={this.canClickGoOn}\n                    value={this.state.value}\n                >\n                </RefTreeWithInput>\n                <Button  \n                    colors=\"primary\"\n                    onClick={this.clearFunc}>清空</Button>\n               \n            </div>\n        )\n    }\n};\n\n\n","desc":" 清空功能：不使用form表单"}]


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
                <code className="hljs javascript">{ code.replace('../../src/index.less',COMPONENT+'/lib/index.css').replace('../../src/index.js',COMPONENT).replace('../../src/index',COMPONENT).replace('../../src',COMPONENT)}</code>
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
