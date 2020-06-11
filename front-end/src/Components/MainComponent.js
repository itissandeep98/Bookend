import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MyAds } from "./MyAds/MyAds";
import { CreateAd } from "./CreateAd/CreateAd";
import Login from "./Logincomponent";
import Header from "./NavbarComponent";
import Profile from "./Profile/Profile";


const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {

	render() {
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={() => <Register />} />
							<Route exact path="/home" component={() => <Home />} />
							<Route exact path="/myads" component={() => <MyAds />} />
							<Route exact path="/createad" component={ CreateAd } />
							<Route exact path="/profile" component={Profile} />
							<Redirect to="/login" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>

		);
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));