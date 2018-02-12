import React, { Component } from 'react'

import './index.css'

class Header extends Component
{
	pageName= 'page-front-header';
	
	render(){

		return (
			<div className={this.pageName}>
				<div className="container">
					<h2 className="blog-name">
						<span>Zz</span><span className="">bao</span>
					</h2>
					<p>没事走两步儿！</p>
				</div>
			</div>
			)
	}
}

export default Header