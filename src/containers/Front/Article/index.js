import React, { Component } from 'react'
import { connect } from 'react-redux'

class Article extends Component
{
	
	
	render(){
		return (
			<div>
				Article
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
	mapDispatchToProps)(Article)