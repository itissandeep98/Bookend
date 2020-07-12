import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Spinner, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAction } from '../../store/ActionCreators'

class Login extends Component {
	
	handleLogin(event) {
		event.preventDefault()
		const user = {
			email_id: this.username.value,
			password: this.password.value,
		}
		this.props.userLogin(user);
	}

	render() {
		var button = <Button type="submit" value="submit" className="primary">Login</Button>
		if(this.props.isLoading){
			button = <Spinner type="grow" color="secondary" />
		}

		return (
			<Col xs={12} md={6}>
				<div className="row">
					<div className="col-12">
						<h3>Login</h3>
						<hr />
					</div>
				</div>
				<Form onSubmit={this.handleLogin.bind(this)}>
					<FormGroup>
						<Label htmlFor="username">Username</Label>
						<Input
							type="text"
							required 
							id="username"
							name="username"
							innerRef={(input) => this.username = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							required 
							id="password"
							name="password"
							innerRef={(input) => this.password = input} />
					</FormGroup>
					<FormGroup>
						{button}
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