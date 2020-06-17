import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Spinner, Alert } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction, myAdsAction } from '../store/ActionCreators'

class Login extends Component {
	_isMounted=false
	constructor(props) {		
		super(props);
		
		this.state = {
			loginbutton: <Button type="submit" value="submit" className="primary">Login</Button>,
			message:"",
			showA:false,
			time: "",
			type:""
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.Logincheck = this.Logincheck.bind(this);
		this.Loginreset=this.Loginreset.bind(this);
		this.toggleAlert = this.toggleAlert.bind(this);
		this.showAlert = this.showAlert.bind(this);

	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
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
	}

	Logincheck() {
		this.setState({
			loginbutton: <Spinner type="grow" color="secondary" />
		})
	}

	Loginreset() {
		this.setState({
			loginbutton: <Button type="submit" value="submit" className="primary">Login</Button>
		})
	}

	handleLogin(event) {		
		event.preventDefault()
		this.Logincheck();

		const user = {
			email_id: this.username.value,
			password: this.password.value,
		}
		
		this.props.userLogin(user)
			.then((res)=>{
				if(this._isMounted){
					if (this.props.login.errmess) {
						this.showAlert("danger", this.props.login.errmess)
						this.Loginreset()
					}
				}
			});
		
	}
	
	render() {
		var errmess = this.props.login.details.email_id
		if (errmess) {
			return <Redirect to="/home"/>
		}

		return (			
			<div className="container">
				<div className="row">					
					<div className="col-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
					{this.state.time} , {this.state.message}
				</Alert>
				<div className="row border-bottom">
					<div className="col-6">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>
					<div className="col-md-6 col-xs-12 ">
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input type="text" required id="username" name="username" innerRef={(input) => this.username = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" required id="password" name="password" innerRef={(input) => this.password = input} />
							</FormGroup>
							<FormGroup>
									{this.state.loginbutton}
							</FormGroup>
							<Link to="/register">New User? Register here</Link>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}

const mapDispatchToProps = (dispatch) => ({
		userLogin: (userdata) => dispatch(loginAction(userdata)),
		getMyAds: () => dispatch(myAdsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)