import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Home extends Component {
	render() {
		console.log("home props", this.props);
		const { name } = this.props.login.details

		var errmess = this.props.login.details.email_id
		
		if (!errmess) {
			return <Redirect to="/login" />
		}

		return (
			<div className="container-fluid">
				<hr />
				<div className="row">
					<h1>Welcome, {name}!</h1>
				</div>
			</div>
		)
	}
}

export default Home