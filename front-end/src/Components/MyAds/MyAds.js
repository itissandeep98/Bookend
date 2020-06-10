import React, { Component } from 'react'
import { Ads } from './AdList';

export class MyAds extends Component {
	componentDidMount() {
		

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
