import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label, Form, FormGroup, Input, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="primary">Register</Button>
		};
		this.handleRegister = this.handleRegister.bind(this);
		this.Logincheck = this.Logincheck.bind(this);
		this.Loginreset = this.Loginreset.bind(this);
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

		fetch('register', {
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
								<Input type="text" required pattern="^.{3,}$" id="name" name="name" innerRef={(input) => this.name = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="email">Email</Label>
								<Input type="email" required pattern="^.{3,}$" id="email" name="email" innerRef={(input) => this.email = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="rollno">Roll Number</Label>
								<Input type="number" required pattern="[0-9]{7}" id="rollno" name="rollno" innerRef={(input) => this.rollno = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" required id="password" name="password" innerRef={(input) => this.password = input} />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="cnfpassword">Confirm Password</Label>
								<Input type="password" required id="cnfpassword" name="cnfpassword" innerRef={(input) => this.cnfpassword = input} />
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
