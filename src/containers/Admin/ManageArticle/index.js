import React, {Component} from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Layout, Button} from 'element-react'
import './index.css'

import PageTitle from '../components/PageTitle/index'

const {Row, Col} = Layout

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
				<Row className='article-item'>
					<Col span={14}>
						<p>title</p>
						<p className='article-info'> 
							<span>作者：zzb</span>
							<span>阅读数：10</span>
							<span>评论数：0</span>
							<span>发表时间：2018-02-05 17：17：02</span>
						</p>
					</Col>
					<Col span={4}>
						<p>状态</p>
					</Col>
					<Col span={6}>
						<Button>编辑</Button>
						<Button>删除</Button>
						<Button>查看</Button>
					</Col>
				</Row>
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