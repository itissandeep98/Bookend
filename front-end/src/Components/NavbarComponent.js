import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css'
import { connect } from 'react-redux';

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
		localStorage.removeItem("state");
		window.open("/login", "_self")
	}

	render() {
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <></>
		}
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col float-left">
							<img src="assets/images/IIIT-Delhi.png" alt="IIIT-Delhi" />
						</div>
					</div>
				</div>
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
									<NavLink className="nav-link" to='/createad'><span className="fa fa-plus fa-lg"></span> Create Ad</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/profile'><span className="fa fa-user-circle fa-lg"></span> Profile</NavLink>
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

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}
export default connect(mapStateToProps)(Header)