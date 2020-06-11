import React, { Component } from 'react'
import { AdList } from './AdList';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
		if (localStorage.getItem("token") == null) {
			window.open("login", "_self")
		}
		return (
			<div className="container">
				<div className="row">
					<h1>My Ads</h1>
				</div>
				<hr />
				<AdList ads = { this.state.ads } />
			</div>
		)
	}
}
