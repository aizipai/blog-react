import React, { Component } from 'react'
import { connect } from 'react-redux'
class Admin extends Component
{
	static pageName= 'page-admin';
	constructor(props){
		super(props)
		this.state={

		}
	}

	render(){


		return (
			<div className={this.pageName}>
				admin
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
	mapDispatchToProps)(Admin)