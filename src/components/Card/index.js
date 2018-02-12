import React from 'react'
import './index.css'

const pageName= 'page-front-card';
const Card = (props)=>{
	return (
		<div className={`${pageName} ${props.className}`}>
			<div className="card-tit">{props.title}</div>
			<div className="card-body">
				{
					props.children
				}
			</div>
		</div>
			)
}

export default Card