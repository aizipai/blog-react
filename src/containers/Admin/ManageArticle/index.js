import React, {Component} from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Tag, Input , Button} from 'element-react'

import PageTitle from '../components/PageTitle/index'

class ManageArticle extends Component
{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	pageName = 'admin-manage-article';

	
	render(){

		return (
			<div className={this.pageName}>
				<PageTitle titleName="文章管理"/>
				<div>
					
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return{

	}
}
function mapDispatchToprops(dispatch){
	return{

	}
}
export default connect(
	mapStateToProps,
	mapDispatchToprops)(ManageArticle)