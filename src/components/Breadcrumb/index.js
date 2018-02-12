import React from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

import { Breadcrumb } from 'element-react'

const pageName= 'page-front-Breadcrumb';
const _Breadcrumb = withRouter((props)=>{
	return (
		<div className="container">
			<div className={`${pageName} `}>
				<span style={{float:'left'}}>当前位置： </span>
				<Breadcrumb >
					<Breadcrumb.Item className="bread-item">首页</Breadcrumb.Item>
				</Breadcrumb>
			</div>
		</div>
			)
})

export default _Breadcrumb