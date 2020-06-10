import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Breadcrumb, BreadcrumbItem, Spinner } from 'reactstrap'
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
			loginbutton: <Spinner color="dark" />
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
						localStorage.setItem("name", response["name"]);
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
			<div className="container-fluid">

				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Login</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>
					<div className="col-6">
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
