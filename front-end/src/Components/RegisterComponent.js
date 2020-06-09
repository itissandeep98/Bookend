import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label,Form,FormGroup,Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Register extends Component {
	constructor(props){
		super(props);
		this.handleRegister=this.handleRegister.bind(this);
	}
	handleRegister(){
		alert("registered")
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
				<Form onSubmit={this.handleRegister}>
					<FormGroup>
						<Label htmlFor="username">Username</Label>
						<Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="email">Email</Label>
						<Input type="email" id="email" name="email" innerRef={(input) => this.email = input} />
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
				</Form>
			</div>
		)
	}
}
