import React, { Component } from 'react'

export default class Profile extends Component {
	render() {
		return (
			<div className="container">
				<h1>{localStorage.getItem("name")}</h1>
				<hr/>
				<div className="row border">
					<div className="col-8">
						<div className="row">
							
						</div>
					</div>
					
					<div className="col-3">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>

				</div>
			</div>
		)
	}
}
