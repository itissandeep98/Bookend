import React, { Component } from 'react'
import { Ads } from './AdList';

export class MyAds extends Component {
	componentDidMount() {
		

		console.log("hello");
	}

	render() {
		return (
			<div className="my-ads">
				<h1>My Ads</h1>
			</div>
		)
	}
}
