import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Register from "./RegisterComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MyAds from "./MyAds/MyAds";
import  CreateAd  from "./CreateAd/CreateAd";
import Login from "./Logincomponent";
import Header from "./NavbarComponent";
import Profile from "./Profile/Profile";
import { connect } from 'react-redux'
import Home from "./Home/HomeComponent";

class Main extends Component {

	render() {
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/login" component={ () => <Login /> } />
							<Route exact path="/register" component={() => <Register />} />
							<Route exact path="/home" render = { () => <Home {...this.props} /> } />
							<Route exact path="/myads" component={() => <MyAds />} />
							<Route exact path="/createad" component={ ()=><CreateAd /> } />
							<Route exact path="/profile" render = { () => <Profile {...this.props} /> } />
							<Redirect to="/login" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}

export default withRouter(connect(mapStateToProps)(Main));