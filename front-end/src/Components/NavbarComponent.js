import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Modal, ModalHeader, ModalBody, Button, FormGroup, Label, Form, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
	constructor(props){
		super(props);
		var loggedin=false;
		if(localStorage.getItem("token")!=null){
			loggedin=true
		}

		this.state = {
			isNavOpen: false,
			isModalOpen: false,
			loggedin
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.toggleLogin=this.toggleLogin.bind(this);
		this.handleLogout=this.handleLogout.bind(this);
	}
	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}
	toggleLogin(){
		this.setState({
			loggedin:!this.state.loggedin
		})
	}

	handleLogin(event) {
		this.toggleModal();
		event.preventDefault()

		const User = {
			username: this.username.value,
			password: this.password.value,
		}
		fetch('login',{
			method:'POST',
			body: JSON.stringify(User),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res=>res.json())
			.then(
				(response)=>{
					console.log(response);
					if(response['success']){
						localStorage.setItem("token", "mnxbkjashvasjkb");
						this.toggleLogin();
					}
				},
				(error)=>console.log("Error: "+error)
			);
	}

	handleLogout(){
		this.toggleLogin();
		localStorage.removeItem("token")
	}

	render(){
		const loginmodal = 
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
				<ModalBody>
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
							<Button type="submit" value="submit" className="primary">Login</Button>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>;

		var loginbutton =
			<Nav className="ml-auto" navbar>
				<NavItem>
					<Button outline onClick={this.toggleModal}>
						<span className="fa fa-sign-in fa-lg"></span> Login
					</Button>
				</NavItem>
			</Nav>;
		if(this.state.loggedin){
			loginbutton=
				<Nav className="ml-auto" navbar>
					<NavItem>
						<Button outline onClick={this.handleLogout}>
							<span className="fa fa-sign-out fa-lg"></span> Logout
						</Button>
					</NavItem>
				</Nav>;
		}
	
		return (
			<>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/"></NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
								</NavItem>
							</Nav>
							{loginbutton}
						</Collapse>
					</div>
				</Navbar>
				{loginmodal}
			</>
		);
	}
}
export default Header;