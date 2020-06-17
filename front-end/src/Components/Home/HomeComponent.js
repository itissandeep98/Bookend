import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { connect } from 'react-redux'
import { searchAdsAction, searchUserAction, courseFetchAction } from '../../store/ActionCreators';
import { Alert, Button, Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';



class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			title:"",
			author:"",
			courses:[],
			tags:[],
			pricemin:"",
			pricemax:"",
			isModalOpen: false,
			message: "",
			showA: false,
			time: "",
			type: "",
			button: <Button> <span className="fa fa-search fa-lg"/>Search</Button>,
		}
		this.onfieldsChange=this.onfieldsChange.bind(this);
		this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.toggleAlert = this.toggleAlert.bind(this);
		this.handleInfo=this.handleInfo.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleCourseChange = this.handleCourseChange.bind(this);
	}

	onfieldsChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleCourseChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		});
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
			button:<Spinner/>
		})
		console.log(this.state)
		const searchData={
			title:this.state.title,
			author: this.state.author,
			course: this.state.courses,
			tags: this.state.tags,
			pricemin: this.state.pricemin,
			pricemax: this.state.pricemax,
		}
		this.props.searchAd(searchData).then(res => {
			if (this.props.errmess) {
				this.showAlert("danger", this.props.errmess)
			}
			this.setState({
				button: <Button> <span className="fa fa-search fa-lg"/>Search</Button>
			})
		});
		
	}

	handleInfo(user_id){
		this.props.searchUser({user_id:user_id})
			.then((response) => {
				var data = this.props.contactDetails;
				if(data.errmess){
					this.showAlert("danger",data.errmess)
				}
				else{
					this.toggleModal()
				}				
			});
	}
	modalBody({data}){
		if(data){
			return (
				<div>
					<p>Name: {data.name}</p>
					<p>Roll Number: {data.roll_num}</p>
					<p>Email Id: {data.email_id}</p>
				</div>
			);
		}
		else{
			return (<Spinner></Spinner>)
		}
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
						<SearchForm fields={this.state} onChange={this.onfieldsChange} handleSubmit={this.handleSearchSubmit} button={this.state.button} courses={this.props.courses} handleCourseChange={this.handleCourseChange}/>
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
						<modalBody data={this.props.contactDetails.info}/>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		errmess: state.searchAds.errmess,
		ads: state.searchAds.ads,
		contactDetails: state.searchUser,
		courses: state.courses,
	}
}

const mapDispatchToProps = (dispatch) => ({
	searchAd: (searchData) => dispatch(searchAdsAction(searchData)),
	searchUser: (searchData) => dispatch(searchUserAction(searchData)),
	fetchCourse: () => dispatch(courseFetchAction()),
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)