import React from 'react'
import './index.css'

import { Carousel } from 'element-react'

const pageName= 'page-front-Carousel';
const _Carousel = (props)=>{
	return (
		
			<div className={`${pageName} `}>
				<Carousel interval="4000" type="card" height="200px">
	        {
	          [1,2,3,4,5,6].map((item, index) => {
	            return (
	              <Carousel.Item key={index}>
	                <h3>{item}</h3>
	              </Carousel.Item>
	            )
	          })
	        }
	      </Carousel>
			</div>
		
			)
}

export default _Carousel