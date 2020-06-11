import React, { Component } from 'react'
import { Button, Label, Form, FormGroup, Input, Spinner, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="primary">Register</Button>,
			isvalidname:false,
			isvalidrollnum:false,
			isvalidpass:false,
			
		};
		this.handleRegister = this.handleRegister.bind(this);
		this.Logincheck = this.Logincheck.bind(this);
		this.Loginreset = this.Loginreset.bind(this);
		this.checkConstraints = this.checkConstraints.bind(this);
	}
	checkConstraints(){
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
	Logincheck() {
		this.setState({
			button: <Spinner type="grow" color="secondary" />
		})
	}
	Loginreset() {
		this.setState({
			button: <Button type="submit" value="submit" className="primary">Register</Button>
		})
	}
	handleRegister(event) {

		event.preventDefault()
		this.Logincheck()
		if (this.password.value !== this.cnfpassword.value) {
			alert("Passwords don't match")
			this.Loginreset();
			return false;
		}

		const User = {
			name: this.name.value,
			password: this.password.value,
			email_id: this.email.value,
			roll_num: this.rollno.value,
		}

		fetch('/register', {
			method: 'POST',
			body: JSON.stringify(User),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(
				(response) => {
					console.log(response);
					if (response['success']) {
						localStorage.setItem("token", "mnxbkjashvasjkb");
						window.open("home", "_self");
						this.Loginreset();
					}
				},
				(error) => alert("Error: " + error)
			);
	}

	render() {
		if (localStorage.getItem("token") != null) {
			window.open("home", "_self")
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3>Register</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>
					<div className="col-md-6 col-xs-12 ">
						<Form onSubmit={this.handleRegister}>
							<FormGroup>
								<Label htmlFor="name">Name</Label>
								<Input type="text" required pattern="^.{3,}$" id="name" name="name" onChange={this.checkConstraints} innerRef={(input) => this.name = input} invalid={this.state.isvalidname === false} valid={this.state.isvalidname === true}/>
								<FormFeedback invalid>Name should be between than 3 and 15 characters</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Input type="email" required pattern="^.{3,}$" id="email" name="email" onChange={this.checkConstraints} innerRef={(input) => this.email = input}/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rollno">Roll Number</Label>
								<Input type="number" required pattern="[0-9]{7}" id="rollno" name="rollno" onChange={this.checkConstraints} innerRef={(input) => this.rollno = input} invalid={this.state.isvalidrollnum === false} valid={this.state.isvalidrollnum === true} />
								<FormFeedback invalid>Roll number should be 7 digits long</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" required id="password" name="password" onChange={this.checkConstraints} innerRef={(input) => this.password = input} invalid={this.state.isvalidpass === false} valid={this.state.isvalidpass === true} />
								<FormFeedback invalid>Passwords don't match</FormFeedback>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="cnfpassword">Confirm Password</Label>
								<Input type="password" required id="cnfpassword" name="cnfpassword" onChange={this.checkConstraints} innerRef={(input) => this.cnfpassword = input} invalid={this.state.isvalidpass === false} valid={this.state.isvalidpass === true} />
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
