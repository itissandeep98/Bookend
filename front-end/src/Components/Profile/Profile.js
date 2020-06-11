import React, { Component } from 'react'

export default class Profile extends Component {
	state = {
		name: null,
		rollNum: null
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
			name: data.profile.name,
			rollNum: data.profile.roll_num
		})
	}

	render() {
		return (
			<div className="container">
				<h1>{ this.state.name }</h1>
				<h2>{ this.state.rollNum }</h2>
			</div>
		)
	}
}
