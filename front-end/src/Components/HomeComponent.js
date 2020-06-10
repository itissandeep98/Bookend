import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class Home extends Component {
	render() {
		if (localStorage.getItem("token") == null) {
			window.open("login", "_self")
		}
		return (
			<div className="container-fluid">
				<hr />
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem active>Home</BreadcrumbItem>
					</Breadcrumb>
				</div>
			</div>

		)
	}
}
