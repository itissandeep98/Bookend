import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css'

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			navbarstate:"",
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleScroll=this.handleScroll.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll',this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	
	handleScroll(){
		if(window.scrollY>=115){
			this.setState({
				navbarstate:"top"
			})
		}
		else{
			this.setState({
				navbarstate: ""
			})
		}
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	handleLogout() {
		localStorage.removeItem("state");
		window.location.reload();
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
				<Navbar dark fixed={this.state.navbarstate} expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"/> Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/myads'><span className="fa fa-list fa-lg"/> My Ads</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/createad'><span className="fa fa-plus fa-lg"/> Create Ad</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to='/profile'><span className="fa fa-user-circle fa-lg"/> Profile</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button filled={"true"} onClick={this.handleLogout}>
										<span className="fa fa-sign-out fa-lg"/> Logout
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