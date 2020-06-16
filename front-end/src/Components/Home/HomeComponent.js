import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { connect } from 'react-redux'
import { searchAdsAction } from '../../store/ActionCreators';
import { Alert } from 'reactstrap';



class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			message: "",
			showA: false,
			time: "",
			type: ""
		}
		this.onfieldsChange=this.onfieldsChange.bind(this);
		this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.toggleAlert = this.toggleAlert.bind(this);
	}

	onfieldsChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	toggleAlert() {
		this.setState({
			showA: !this.state.showA
		})
	}

	showAlert(type, message) {
		this.setState({
			showA: true,
			message: message,
			time: new Date().toLocaleTimeString(),
			type: type
		})
	}

	handleSearchSubmit(e){
		e.preventDefault();
		const searchData={
			title:e.target.title.value,
			author: e.target.author.value,
			course: e.target.course.value,
			tags: e.target.tags.value,
			pricemin: e.target.pricemin.value,
			pricemax: e.target.pricemax.value,
		}
		this.props.searchAd(searchData).then(res => {
			if (this.props.errmess) {
				this.showAlert("danger", this.props.errmess)
			}
		});
		
	}

	render() {
		const { name } = this.props.login.details

		var errmess = this.props.login.details.email_id
		
		if (!errmess) {
			return <Redirect to="/login" />
		}

		return (
			<div className="container">
				<hr />
				<div className="row">
					<h1>Welcome, {name}!</h1>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-3">
						<SearchForm fields={this.state} onChange={this.onfieldsChange} handleSubmit={this.handleSearchSubmit}/>
					</div>
					<div className="col-12 col-md-8 col-lg-9">
						<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
							{this.state.time} , {this.state.message}
						</Alert>
						<SearchResults ads={this.props.ads}/>					
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		errmess: state.searchAds.errmess,
		ads: state.searchAds.ads
	}
}

const mapDispatchToProps = (dispatch) => ({
	searchAd: (searchData) => dispatch(searchAdsAction(searchData)),
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)