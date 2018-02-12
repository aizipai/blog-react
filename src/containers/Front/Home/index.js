import React, { Component } from 'react'
import { connect } from 'react-redux'

// import NavComponent from '../../../components/Nav/index.js'

class Home extends Component
{
	
	
	render(){
		return (
			<div>
				Home
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
	mapDispatchToProps)(Home)