import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "./Logincomponent";
import Register from './RegisterComponent';

class AuthComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "",
			showA: false,
			time: "",
			type: ""
		};

		this.toggleAlert = this.toggleAlert.bind(this);
		this.showAlert = this.showAlert.bind(this);
	}

	showAlert(type, message) {
		this.setState({
			showA: true,
			message: message,
			time: new Date().toLocaleTimeString(),
			type: type
		})
	}

	toggleAlert() {
		this.setState({
			showA: !this.state.showA
		})
		this.props.login.errmess = null;
	}

	render() {
		var errmess = this.props.login.details.email_id
		if (errmess) {
			return <Redirect to="/home" />
		}
		if (this.props.login.errmess && !this.state.showA) {
			this.showAlert("danger", this.props.login.errmess)
		}

		return (
			<div className="container">
				<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
					{this.state.time} , {this.state.message}
				</Alert>
				<div className="row border-bottom">
					<div className="col-6">
						<img src={process.env.PUBLIC_URL+"/assets/images/logo.png"} alt="theBookend" className="img-fluid" />
					</div>

					{window.location.pathname === "/Bookend/register" ? 
						<Register showAlert={this.showAlert} isLoading={this.props.register.isLoading} errmess={this.props.register.errmess} />:
						<Login showAlert={this.showAlert} isLoading={this.props.login.isLoading}/> 						
					}
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.login,
		register: state.register
	}
}
export default connect(mapStateToProps)(AuthComp)
