import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { myAdsAction } from '../../store/ActionCreators';
import AdList from './AdList';
import { Alert } from 'reactstrap';

class MyAds extends Component {
	constructor(props){
		super(props);
		this.state={
			showA: false,
			messageA: "",
			timeA: "",
			type: "",
		}
		this.showAlert = this.showAlert.bind(this);
		this.toggleAlert = this.toggleAlert.bind(this);
	}

	showAlert(type, message) {
		this.setState({
			showA: true,
			messageA: message,
			timeA: new Date().toLocaleTimeString(),
			type: type
		})
		this.props.getMyAds()
	}

	toggleAlert() {
		this.setState({
			showA: !this.state.showA
		})
	}

	componentDidMount() {
		this.props.getMyAds()
	}

	render() {
		if (this.props.login.errmess) {
			return <Redirect to="/login" />
		}

		return (
			<div className="container">
				<hr />
				<div className="row">
					<h1>My Ads</h1>
				</div>
				<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
					{this.state.timeA}  {this.state.messageA}
				</Alert>
				<AdList ads={this.props.myAds} showAlert={this.showAlert} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAds)
