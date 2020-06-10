import React, { Component } from 'react'
import { Ads } from './AdList';

export class MyAds extends Component {
	componentDidMount() {
		const getMyAds = async () => {
			const res = await fetch('/myads');
			return res.json();
		};

		console.log(getMyAds());
	}

	render() {
		return (
			<div className="my-ads">
				<h1>My Ads</h1>
				<Ads ads={ this.state.ads } />
			</div>
		)
	}
}

