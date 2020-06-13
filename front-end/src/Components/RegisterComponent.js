import React, { Component } from 'react'
import { Button, Label, Form, FormGroup, Input, Spinner, FormFeedback, Alert } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAction, loginAction } from '../store/ActionCreators';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="primary">Register</Button>,
			isvalidname:true,
			isvalidrollnum:true,
			isvalidpass:true,
			showA:false,
			message:"",
			time:""
			
		};
		this.handleRegister = this.handleRegister.bind(this);
		this.spinnerActive = this.spinnerActive.bind(this);
		this.spinnerReset = this.spinnerReset.bind(this);
		this.checkConstraints = this.checkConstraints.bind(this);
		this.toggleErrorAlert = this.toggleErrorAlert.bind(this);

	}
	toggleErrorAlert() {
		this.setState({
			showA: !this.state.showA
		})
	}
	checkConstraints(e){
		if (this.name.value.length < 3 || this.name.value.length >15){
			this.setState({
				isvalidname:false
			})
		}
		else{
			this.setState({
				isvalidname: true
			})
		}
		if(this.rollno.value.length!==7){
			this.setState({
				isvalidrollnum: false
			})
		}
		else{
			this.setState({
				isvalidrollnum: true
			})
		}
		if(this.password.value.length===0 || this.password.value!==this.cnfpassword.value){
			this.setState({
				isvalidpass: false
			})
		}
		else{
			this.setState({
				isvalidpass: true
			})
		}
	}
	spinnerActive() {
		this.setState({
			button: <Spinner type="grow" color="secondary" />
		})
	}
	spinnerReset() {
		this.setState({
			button: <Button type="submit" value="submit" className="primary">Register</Button>
		})
	}
	handleRegister(event) {

		event.preventDefault()
		this.spinnerActive()
		const User = {
			username: this.name.value,
			password: this.password.value,
			email_id: this.email.value,
			roll_num: this.rollno.value,
		}
		this.props.userRegister(User).then((res)=>{
			if(this.props.register.errmess){
				this.setState({
					showA:true,
					message:this.props.register.errmess,
					time: new Date().toLocaleTimeString()
				})
			}
			else{
				this.props.userLogin(User);
			}
			this.spinnerReset()})
			
	}

	render() {
		var errmess = this.props.login.details.email_id
		if (errmess) {
			return <Redirect to="/home" />
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3>Register</h3>
						<hr />
					</div>
				</div>
				<Alert color="danger" isOpen={this.state.showA} toggle={this.toggleErrorAlert}>
					{this.state.time} , {this.state.message}
				</Alert>
				<div className="row">
					<div className="col-6">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>
					<div className="col-md-6 col-xs-12 ">
						<Form onSubmit={this.handleRegister}>
							<FormGroup>
								<Label htmlFor="name">Name</Label>
								<Input type="text" required pattern="^.{3,}$" id="name" name="name" onChange={this.checkConstraints} innerRef={(input) => this.name = input} invalid={this.state.isvalidname === false} />
								<FormFeedback invalid>Name should be between than 3 and 15 characters</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Input type="email" required pattern="^.{3,}$" id="email" name="email" onChange={this.checkConstraints} innerRef={(input) => this.email = input}/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rollno">Roll Number</Label>
								<Input type="number" required pattern="[0-9]{7}" id="rollno" name="rollno" onChange={this.checkConstraints} innerRef={(input) => this.rollno = input} invalid={this.state.isvalidrollnum === false}  />
								<FormFeedback invalid>Roll number should be 7 digits long</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" required id="password" name="password" onChange={this.checkConstraints} innerRef={(input) => this.password = input} invalid={this.state.isvalidpass === false}  />
								<FormFeedback invalid>Passwords don't match</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="cnfpassword">Confirm Password</Label>
								<Input type="password" required id="cnfpassword" name="cnfpassword" onChange={this.checkConstraints} innerRef={(input) => this.cnfpassword = input} invalid={this.state.isvalidpass === false} />
								<FormFeedback invalid>Passwords don't match</FormFeedback>
							</FormGroup>

							<FormGroup>
								{this.state.button}
							</FormGroup>
							<Link to="/login">Already registered? Login here</Link>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		login:state.login,
		register: state.register
	}
}
const mapDispatchToProps = (dispatch) => ({
	userRegister: (userdata) => dispatch(registerAction(userdata)),
	userLogin: (userdata) => dispatch(loginAction(userdata)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Register)