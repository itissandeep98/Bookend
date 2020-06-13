import React, { Component } from 'react'

class Profile extends Component {
	render() {
		console.log("profile props", this.props);
		const {name, roll_num} = this.props.login.details
	
		return (
			<div className="container">
				<h1>{ name }</h1>
				<h2>{ roll_num }</h2>
			</div>
		)
	}
}

export default Profile