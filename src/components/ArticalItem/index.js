import React from 'react'
import './index.css'

import Card from '../Card/index.js'

const pageName= 'page-front-artical-item';
const Category = (props)=>{
	return (
		<div className={`${pageName} shadow1`}>
			<p>{props.title}</p>
			<p>time：{props.title} 分类：{props.category} 浏览：{props.looks}</p>
			<p>{props.title}</p>
			<p>{props.jianjie}</p>
			<p>阅读全文 >></p>
		</div>
			)
}

export default Category