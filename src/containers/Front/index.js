import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Header from '../../components/Header/index.js'
import NavTop from '../../components/Nav/index.js'
import Home from './Home/index.js'
import Article from  './Article/index.js'

class Front extends Component
{
	pageName= 'page-front';
	links = [
			{key: "home", text: '主页', component: Home},
			{key: "article", text: '文章',  component: Article},
			{key: "timeline", text: '归档'},
			{key: "gather", text: '点滴'},
			{key: "gossip", text: '慢生活'},
		];
	render(){
		return (
			<div className={this.pageName}>
				<Header/>
				<NavTop
					links={ this.links }/>
				<div className="main-content container">
					<Switch>
						{
							this.links.map(link=>(
								<Route 
								key={ link.key }
								path={ `/${link.key}` } 
								component={ link.component }/>))
						}
						<Route component={ Home }/>
					</Switch>
				</div>
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