import React from 'react'
import './index.css'

import ArticalItem from '../ArticalItem/index.js'

const pageName= 'page-front-Category';
const Category = (props)=>{
	const data =  [
					{
					"_id": "5a782076fe2fe87d1e1fcd71",
					"name": "test",
					"title":'title111111',
					"time":'2017-1-1',
					"category":'react',
					"looks":'123',
					"jianjie":"i amm jianjie"
					},
					{
					"_id": "5a782076fe2fe87d1e1fcd71",
					"name": "test",
					"title":'title111111',
					"time":'2017-1-1',
					"category":'react',
					"looks":'123',
					"jianjie":"i amm jianjie"
					}
					
					]
	return (
		<div>
			{
				data.map(item=>(
					<ArticalItem
						_id= "5a782076fe2fe87d1e1fcd71"
						name= "test"
						title='title111111'
						time='2017-1-1'
						category='react'
						looks='123'
						jianjie="i amm jianjie"
					/>))
			}
		</div>
			)
}

export default Category