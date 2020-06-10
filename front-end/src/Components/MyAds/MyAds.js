import React, { Component } from 'react'
import { AdList } from './AdList';

export class MyAds extends Component {
	state = {
		ads: []
	}

	sleep = (milliseconds) => {
		return new Promise(resolve => setTimeout(resolve, milliseconds))
	  }

	// componentDidMount() {
	// 	fetch('myads', {
	// 		method: 'POST',
	// 		body: JSON.stringify({user_id: 1}),
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 	})
	// 		.then(res => res.json())
	// 		.then(res => { 
	// 			this.setState({
	// 				ads: res
	// 			})

	// 			console.log(this.state.ads);

	// 		})
	// 		.catch(error => console.log(error))

	// 	console.log("hello");				
	// }

	async componentDidMount() {

		const response = await fetch('myads', {
			method: 'POST',
			body: JSON.stringify({user_id: 1}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		console.log(response);

		const data = await response.json();
		
		console.log(data);

		this.setState({
			ads: data.ads
		})
	}

	render() {
		return (
			<div className="myads1">
				<h1>My Ads</h1>
				<AdList ads = { this.state.ads } />
			</div>
		)
	}
}
