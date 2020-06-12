import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MyAds } from "./MyAds/MyAds";
import { CreateAd } from "./CreateAd/CreateAd";
import Login from "./Logincomponent";
import Header from "./NavbarComponent";
import Profile from "./Profile/Profile";
import { userRegister, createAd } from "../store/ActionCreators";


class Main extends Component {

	render() {
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/login" component={ () => <Login /> } />
							<Route exact path="/register" component={() => <Register userRegister={ userRegister } />} />
							<Route exact path="/home" component={() => <Home />} />
							<Route exact path="/myads" component={() => <MyAds />} />
							<Route exact path="/createad" component={ ()=><CreateAd createAd={createAd}/> } />
							<Route exact path="/profile" component = { Profile } setProfile = { this.props.setProfile } />
							<Redirect to="/login" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default withRouter(Main);