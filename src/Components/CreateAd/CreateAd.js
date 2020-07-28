import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FormCreateAd from './FormCreateAd';
import { createAdAction } from '../../store/ActionCreators';

class CreateAd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showA:false,
			messageA:"",
			timeA:"",
			type:"",
		}
		this.toggleAlert=this.toggleAlert.bind(this);
		this.showAlert=this.showAlert.bind(this);
	}

	toggleAlert(){
		this.setState({
			showA:!this.state.showA
		})
	}

	showAlert(type,message){
		this.setState({
			showA: true,
			messageA: message,
			timeA: new Date().toLocaleTimeString(),
			type: type
		})	
	}

	render() {		
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		return (
			<div className="container" >
				<hr />
				<div className="row">
				<h1>Create ad</h1>
				</div>
				<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
					{this.state.timeA}  {this.state.messageA}
				</Alert>
				<div className="row ">
					<div className="col-12 border-bottom">
						<FormCreateAd handleSubmit={this.props.createADfunc} showAlert={this.showAlert} createad={this.props.createad} courses={this.props.courses}
							uid={this.props.login.details.uid}
							/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login,
		createad: state.createad,
		courses:state.courses,
	}
}

const mapDispatchToProps = (dispatch) => ({
	createADfunc:(data)=>dispatch(createAdAction(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd)