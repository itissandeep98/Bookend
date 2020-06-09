import React, { Component } from 'react'
import Header from "./NavbarComponent";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				<hr/>	
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem active>Home</BreadcrumbItem>
					</Breadcrumb>
				</div>	
			</div>
				
		)
	}
}
