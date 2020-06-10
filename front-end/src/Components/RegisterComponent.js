import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label,Form,FormGroup,Input } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Register extends Component {
	constructor(props){
		super(props);
		this.handleRegister=this.handleRegister.bind(this);
	}
	handleRegister(event){
		
		event.preventDefault()
		if(this.password!==this.cnfpassword){
			alert("Passwords don't match")
			return false;
		}

		const User = {
			name: this.name.value,
			password: this.password.value,
			email_id:this.email.value,
			roll_num:this.rollno.value,
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
						// window.open("/","_self");
					}
				},
				(error) => alert("Error: " + error)
			);
	}
	
	render() {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Register</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Register</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<img src="assets/images/logo.png" alt="theBookend" />
					</div>
					<div className="col-6">
				<Form onSubmit={this.handleRegister}>
					<FormGroup>
						<Label htmlFor="name">Name</Label>
						<Input type="text" pattern="^.{3,}$" id="name" name="name" innerRef={(input) => this.name = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="email">Email</Label>
						<Input type="email" pattern="^.{3,}$" id="email" name="email" innerRef={(input) => this.email = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="rollno">Roll Number</Label>
						<Input type="text" pattern="[0-9]{7}" id="rollno" name="rollno" innerRef={(input) => this.rollno = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="password">Password</Label>
						<Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="cnfpassword">Confirm Password</Label>
						<Input type="password" id="cnfpassword" name="cnfpassword" innerRef={(input) => this.cnfpassword = input} />
					</FormGroup>
					
					<FormGroup>
							<Button type="submit" value="submit" className="primary">Register</Button>
					</FormGroup>
					<Link to="/login">Already registered? Login here</Link>
				</Form>
				</div>
				</div>
			</div>
		)
	}
}
