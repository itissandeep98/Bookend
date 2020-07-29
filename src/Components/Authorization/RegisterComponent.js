import React, { Component } from 'react'
import { Spinner, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Dropdown, Button, Form } from "semantic-ui-react";
import { registerAction, loginAction } from '../../store/ActionCreators';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valid:false,
			name: "",
			rollno: "",
			email: "",
			password: "",
			cnfpassword: "",
			specialization: "BTech",
		};

		this.handleRegister = this.handleRegister.bind(this);
		this.checkConstraints = this.checkConstraints.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSpecChange = this.onSpecChange.bind(this)
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		},()=>{
				this.checkConstraints()
		});		
	}

	onSpecChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			specialization: value,
			rollno:""
		})
	}

	checkConstraints() {
		var name = this.state.name.length >= 3 && this.state.name.length <= 15
		var roll = this.state.rollno.length === 7
		var password = this.state.password.length > 0 && this.state.password === this.state.cnfpassword
		var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
		this.setState({
			valid: name && roll && password && email
		})
	}


	handleRegister(event) {
		event.preventDefault()
		const User = {
			name: this.state.name,
			password: this.state.password,
			email_id: this.state.email,
			roll_num: this.state.rollno,
			specialization: this.state.specialization
		}
		this.props.userRegister(User).then((res) => {
			if (this.props.errmess) {
				this.props.showAlert("danger", this.props.errmess);
			}
			else {
				this.props.showAlert("info", "Register successfull!!  Logging you in");
				this.props.userLogin(User);
			}
		});

	}

	render() {
		const options = [
			{ key: 'BTech', text: 'BTech', value: 'BTech' },
			{ key: 'MTech', text: 'MTech', value: 'MTech' },
			{ key: 'PhD', text: 'PhD', value: 'PhD' },
		]
		var button = <Button disabled={!this.state.valid} type="submit" value="submit" className="primary">Register</Button>
		if (this.props.isLoading) {
			button = <Spinner type="grow" color="secondary" />
		}
		return (
			<Col xs={12} md={6}>
				<div className="row">
					<div className="col-12">
						<h3>Register</h3>
						<hr />
					</div>
				</div>
				<Form onSubmit={this.handleRegister}>
					<Form.Field required>
						<label htmlFor="name">Name</label>
						<Input
							type="text"
							id="name"
							onChange={this.onChange}
							value={this.state.name} 
							/>
					</Form.Field>
					<Form.Field required>
						<label htmlFor="email">Email</label>
						<Input
							type="email"
							id="email"
							onChange={this.onChange}
							value={this.state.email} />
					</Form.Field>
					<Form.Field required>
						<label htmlFor="rollno">Roll Number</label>
						<Input
							label={<Dropdown
								id="specialization"
								options={options}
								value={this.state.specialization}
								onChange={this.onSpecChange} />
							}
							type="number"
							id="rollno"
							labelPosition='left'
							value={this.state.rollno}
							onChange={this.state.specialization!=="PhD"?this.onChange:null}
						/>
					</Form.Field>
					<Form.Field required>
						<label >Password</label>
						<Input
							type="password"
							id="password"
							onChange={this.onChange}
							value={this.state.password} />
					</Form.Field>
					<Form.Field required>
						<label>Confirm Password</label>
						<Input
							type="password"
							id="cnfpassword"
							onChange={this.onChange}
							value={this.state.cnfpassword} />
					</Form.Field>
					<Form.Field required>
						{button}
					</Form.Field>
					<Link to="/login">Already registered? Login here</Link>
				</Form>
			</Col>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	userRegister: (userdata) => dispatch(registerAction(userdata)),
	userLogin: (userdata) => dispatch(loginAction(userdata)),
})
export default connect(null, mapDispatchToProps)(Register);