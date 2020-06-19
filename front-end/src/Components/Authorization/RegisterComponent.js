import React, { Component } from 'react'
import { Spinner, Alert, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input,Dropdown, Button, Form } from "semantic-ui-react";
import { registerAction, loginAction } from '../../store/ActionCreators';

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
			time:"",
			name:"",
			rollno:"",
			email:"",
			password:"",
			cnfpassword:"",
			specialization:"BTech",
		};

		this.handleRegister = this.handleRegister.bind(this);
		this.spinnerActive = this.spinnerActive.bind(this);
		this.spinnerReset = this.spinnerReset.bind(this);
		this.checkConstraints = this.checkConstraints.bind(this);
		this.toggleErrorAlert = this.toggleErrorAlert.bind(this);
		this.onChange=this.onChange.bind(this);
		this.onSpecChange=this.onSpecChange.bind(this)
	}

	onChange(e) {		
		this.setState({
			[e.target.id]: e.target.value
		});
		
		this.checkConstraints()
	}
	onSpecChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			specialization: value
		})
	}

	toggleErrorAlert() {
		this.setState({
			showA: !this.state.showA
		})
	}

	checkConstraints(){
		if (this.state.name.length < 3 || this.state.name.length >15){
			this.setState({
				isvalidname:false
			})
		}
		else{
			this.setState({
				isvalidname: true
			})
		}
		if(this.state.rollno.length!==7){
			this.setState({
				isvalidrollnum: false
			})
		}
		else{
			this.setState({
				isvalidrollnum: true
			})
		}
		if(this.state.password.length===0 || this.state.password!==this.state.cnfpassword){
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
			username: this.state.name,
			password: this.state.password,
			email_id: this.state.email,
			roll_num: this.state.rollno,
			specialization:this.state.specialization
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
			this.spinnerReset()
		});
			
	}

	render() {
		const options = [
			{ key: 'BTech', text: 'BTech', value: 'BTech' },
			{ key: 'MTech', text: 'MTech', value: 'MTech' },
			{ key: 'PhD', text: 'PhD', value: 'Phd' },
		]
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
					<Col xs={12} md={6}>
						<Form onSubmit={this.handleRegister}>
							<Form.Field required>
								<label htmlFor="name">Name</label>
								<Input 
									type="text" 
									id="name" 
									onChange={this.onChange} 
									value={this.state.name} />
							</Form.Field>
							<Form.Field required>
								<label htmlFor="email">Email</label>
								<Input 
									type="email" 
									id="email" 
									onChange={this.onChange} 
									value={this.state.email}/>
							</Form.Field>
							<Form.Field required>
								<label htmlFor="rollno">Roll Number</label>
								<Input
									label={<Dropdown 
												id="specialization" 
												options={options} 
												value={this.state.specialization} 
												onChange={this.onSpecChange}/>
											}
									type="number"
									id="rollno"
									labelPosition='left'
									value={this.state.rollno}
									onChange={this.onChange}
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
								{this.state.button}
							</Form.Field>
							<Link to="/login">Already registered? Login here</Link>
						</Form>
					</Col>
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