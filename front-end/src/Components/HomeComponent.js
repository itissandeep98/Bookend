import React, { Component } from 'react'


export default class Home extends Component {
	render() {
		if (localStorage.getItem("token") == null) {
			window.open("login", "_self")
		}
		return (
			<div className="container-fluid">
				<hr />
				<div className="row">
					<h1>Home</h1>
				</div>
			</div>

		)
	}
}
