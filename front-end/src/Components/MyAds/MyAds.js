import React, { Component } from 'react'
import { AdList } from './AdList';
import { Breadcrumb } from 'reactstrap';
import Header from './../NavbarComponent';

export class MyAds extends Component {
	state = {
		ads: []
	}

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
			<div className="myads">
				<h1>My Ads</h1>
				<AdList ads = { this.state.ads } />
			</div>
		)
	}
}
