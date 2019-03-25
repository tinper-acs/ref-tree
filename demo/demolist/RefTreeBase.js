import React, { Component } from 'react';

import { is } from 'immutable';
import RefTreeBaseUI from '../../src/RefTreeBaseUI';
import { refValParse } from './utils';

class RefTreeBase extends Component {
	constructor(props) {
		super(props);
		const { checkedArray, valueField } = props;
		this.state = {
			checkedArray:checkedArray,
			checkedKeys: checkedArray.map(item=>{
				return item[valueField];
			}),
		};
		
	}
	shouldComponentUpdate(nextProps, nextState){
		return !is(nextState, this.state) || nextProps.showModal !== this.props.showModal;
	}
	// componentWillReceiveProps(nextProps) {
	// 	let {checkedArray,valueField } = nextProps;
	// 	if(checkedArray){
	// 		this.setState({
	// 			checkedKeys: checkedArray.map(item=>{
	// 				return item[valueField];
	// 			}),
	// 		})
	// 	}
	// }
	getRefTreeData = () =>{
		this.treeData = this.props.treeData
	}
	initComponent = () => {
		let { value, checkedArray, matchData=[] } = this.props;
		this.getRefTreeData();
		//当有已选值，不做校验，即二次打开弹出层不做校验
		let valueMap = refValParse(value)
		if(checkedArray.length != 0 || !valueMap.refpk) return;
		if(matchData.length>0){
			this.setState({
				checkedArray: data,
				// selectedArray: data,
				showLoading: false,
				checkedKeys: data.map(item=>{
					return item.refpk;
				})
			});
		}else{
			//当时不使用 matchUrl 做校验时，直接使用默认数护具标记选项，但数据完整性会变弱。
			this.setState({
				checkedArray: [valueMap],
				showLoading: false,
				checkedKeys: valueMap.refpk.split(',')
			});
		}
		
	}

	render() {
		const {checkedArray } = this.state;
		let childrenProps = Object.assign({},this.props,{
			checkedArray: checkedArray,
		});
		return (
			<RefTreeBaseUI {...childrenProps}/>
		);
	}
}
export default RefTreeBase;
