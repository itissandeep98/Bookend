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
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>My ads</BreadcrumbItem>
					</Breadcrumb>
				</div>
				<h1>My Ads</h1>
				<hr />
				<AdList ads = { this.state.ads } />
			</div>
		)
	}
}
