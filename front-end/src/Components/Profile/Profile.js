import React, { Component } from 'react'

export default class Profile extends Component {
	state = {
		profile: 'Anmol'
	}

	async componentDidMount() {
		const response = await fetch('/profile', {
			method: 'POST',
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await response.json();
		
		console.log(data);

		this.setState({
			profile: data.profile
		})
	}

	render() {
		return (
			<div className="container">
				<h1>Anmols</h1>
			</div>
		)
	}
}
