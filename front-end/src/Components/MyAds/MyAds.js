import React, { Component } from 'react'
import AdList from './AdList'

class MyAds extends Component {
	componentDidMount() {
		const getMyAds = async () => {
			const res = await fetch('/myads');
			return res.json();
		};

		console.log(res);
	}

	render() {
		return (
			<div class="my-ads">
				<h1>My Ads</h1>
				<AdsList ads={ this.state.ads } />
			</div>
		)
	}
}

