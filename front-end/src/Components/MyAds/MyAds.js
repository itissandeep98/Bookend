import React, { Component } from 'react'
import { AdList } from './AdList';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class MyAds extends Component {
	state = {
		ads: []
	}

	async componentDidMount() {

		const response = await fetch('/myads', {
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
		console.log(this.props)
		if (this.props.login.errmess) {
			return <Redirect to="/login" />
		}
		return (
			<div className="container">
				<div className="row">
				</div>
				<hr />
				<AdList ads = { this.state.ads } />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}
export default connect(mapStateToProps)(MyAds)
