import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {
	constructor(props) {
		super(props);
		var loggedin = false;
		if (localStorage.getItem("token") != null) {
			loggedin = true
		}

		this.state = {
			loggedin
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.toggleLogin = this.toggleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	toggleLogin() {
		this.setState({
			loggedin: !this.state.loggedin
		})
	}
	handleLogin(event) {
		event.preventDefault()

		const User = {
			username: this.username.value,
			password: this.password.value,
		}
		fetch('login', {
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
						this.toggleLogin();
					}
				},
				(error) => console.log("Error: " + error)
			);
	}

	handleLogout() {
		this.toggleLogin();
		localStorage.removeItem("token")
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Login</BreadcrumbItem>
					</Breadcrumb>
				</div>	
			<Form onSubmit={this.handleLogin}>
				<FormGroup>
					<Label htmlFor="username">Username</Label>
					<Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
				</FormGroup>
				<FormGroup>
					<Label htmlFor="password">Password</Label>
					<Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
				</FormGroup>
				<FormGroup>
					<div>
						<Button type="submit" value="submit" className="primary">Login</Button>
					</div>
					<Link to="/register">New User? Register here</Link>
				</FormGroup>
			</Form>
			</div>
		)
	}
}
