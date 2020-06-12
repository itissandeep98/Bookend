import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			loginbutton: <Button type="submit" value="submit" className="primary">Login</Button>
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.Logincheck = this.Logincheck.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.Loginreset=this.Loginreset.bind(this);
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

		const User = {
			username: this.username.value,
			password: this.password.value,
		}
		
		this.props.userLogin(User)
			.then(res => res.data)
			.then(
				(response) => {
					console.log(response);
					if (response['success']) {
						localStorage.setItem("token", "mnxbkjashvasjkb");
						window.open("home", "_self")
					}
					else {
						alert("Wrong username,password")
						this.Loginreset();

					}
				},
				(error) => {
					console.log("Error: " + error);
					alert("Error");
					this.Loginreset();
				}
			);
	}

	handleLogout() {
		this.Logincheck();
		localStorage.removeItem("token")
	}
	render() {
		if (localStorage.getItem("token") != null) {
			window.open("home", "_self")
		}
		return (
			<div className="container">
				<div className="row">					
					<div className="col-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<div className="row">
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
