import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header/index.js'

class Front extends Component
{
	pageName= 'page-front';
	state={

	};
	render(){
		return (
			<div className={this.pageName}>
				<Header/>
				front
			</div>
			)
	}
}

function mapStateToProps(state){
	return {

	}
}
function mapDispatchToProps(dispatch){
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps)(Front)