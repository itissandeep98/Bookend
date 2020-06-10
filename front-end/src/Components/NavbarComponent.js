import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	handleLogout() {
		localStorage.removeItem("token");;
		window.open("/login", "_self");
	}

	render() {

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
									<NavLink className="nav-link" to='/myads'><span className="fa fa-list fa-lg"></span> My Ads</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/createad'><span className="fa fa-info fa-lg"></span> Create Ad</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline onClick={this.handleLogout}>
										<span className="fa fa-sign-out fa-lg"></span> Logout
									</Button>
								</NavItem>
							</Nav>

						</Collapse>
					</div>
				</Navbar>
			</>
		);
	}
}
export default Header;