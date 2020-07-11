import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Spinner, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../../store/ActionCreators'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginbutton: <Button type="submit" value="submit" className="primary">Login</Button>,
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.Logincheck = this.Logincheck.bind(this);
		this.Loginreset = this.Loginreset.bind(this);
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

		this.props.userLogin(user);

	}

	render() {

		return (
			<Col xs={12} md={6}>
				<div className="row">
					<div className="col-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<Form onSubmit={this.handleLogin}>
					<FormGroup>
						<Label htmlFor="username">Username</Label>
						<Input
							type="text"
							required id="username"
							name="username"
							innerRef={(input) => this.username = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							required id="password"
							name="password"
							innerRef={(input) => this.password = input} />
					</FormGroup>
					<FormGroup>
						{this.state.loginbutton}
					</FormGroup>
					<Link to="/register">New User? Register here</Link>
				</Form>
			</Col>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	userLogin: (userdata) => dispatch(loginAction(userdata)),
})

export default connect(null, mapDispatchToProps)(Login)