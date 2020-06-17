import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { connect } from 'react-redux'
import { searchAdsAction } from '../../store/ActionCreators';
import { Alert, Button, Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';



class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			isModalOpen: false,
			message: "",
			showA: false,
			time: "",
			type: "",
			button: <Button> <span className="fa fa-search fa-lg"></span>Search</Button>
		}
		this.onfieldsChange=this.onfieldsChange.bind(this);
		this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.toggleAlert = this.toggleAlert.bind(this);
		this.handleInfo=this.handleInfo.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
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

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSearchSubmit(e){
		e.preventDefault();
		this.setState({
			button:<Spinner></Spinner>
		})
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
			this.setState({
				button: <Button> <span className="fa fa-search fa-lg"></span>Search</Button>
			})
		});
		
	}

	handleInfo(user_id){
		this.toggleModal()
		console.log(user_id);
		
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
						<SearchForm fields={this.state} onChange={this.onfieldsChange} handleSubmit={this.handleSearchSubmit} button={this.state.button}/>
					</div>
					<div className="col-12 col-md-8 col-lg-9">
						<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
							{this.state.time} , {this.state.message}
						</Alert>
						<SearchResults ads={this.props.ads} handleInfo={this.handleInfo}/>					
					</div>
				</div>
				<Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>User Info</ModalHeader>
					<ModalBody>
						To be Filled with Data
					</ModalBody>
				</Modal>
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