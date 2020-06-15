import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { myAdsAction } from '../../store/ActionCreators';
import AdList from './AdList';

class MyAds extends Component {
	componentDidMount() {
		this.props.getMyAds()
	}

	render() {
			if (this.props.login.errmess) {
			return <Redirect to="/login" />
		}

		return (
			<div className="container">
				<div className="row">
					<h1>My Ads</h1>
				</div>
				<hr />
				<AdList ads = { this.props.myAds } />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		myAds: state.myAds.myAds,
		login: state.login
	}
}
const mapDispatchToProps = (dispatch) => ({
	getMyAds: () => dispatch(myAdsAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(MyAds)
