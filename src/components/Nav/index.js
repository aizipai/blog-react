import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import { Layout } from 'element-react'
const { Col, Row } = Layout

const pageName= 'page-front-nav';
const NavTop = ({links})=>{
	return (
			<div className={pageName}>
				<div className="container">
					<Row gutter="16">
						{
							links.map(link=>{
								return (
									<Col span="2" key={ link.key }>
										<Link to={ link.key }>
											{ link.text }
										</Link>
									</Col>
									)
							})
						}
					</Row>
				</div>
			</div>
			)
}

export default NavTop