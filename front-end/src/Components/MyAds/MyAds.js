import React, { Component } from 'react'
import { Ads } from './AdList';

export class MyAds extends Component {
	componentDidMount() {
		fetch('myads', {
			method: 'POST',
			body: {id: 1},
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(
				(response) => {
					console.log(response);

				},

				(error) => console.log("Error: " + error)
			);

		console.log("hello");		
	}

	render() {
		return (
			<div className="myads1">
				<h1>My Ads</h1>
			</div>
		)
	}
}
