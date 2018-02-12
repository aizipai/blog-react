import React from 'react'
import './index.css'

import Card from '../Card/index.js'

const pageName= 'page-front-personinfo';
const PersonInfo = (props)=>{
	return (
		<Card 
		className={pageName}
		title='个人信息'>
			<p>13</p>
		</Card>
			)
}

export default PersonInfo