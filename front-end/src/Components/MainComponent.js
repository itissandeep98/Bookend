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
import { userLogin,userRegister, createAd } from "../redux/ActionCreaters";

const mapDispatchToProps=(dispatch)=>({
	userRegister:(userdata)=>dispatch(userRegister(userdata)),
	userLogin: (userdata) => dispatch(userLogin(userdata)),
	createAd: (userdata) => dispatch(createAd(userdata)),
});

class Main extends Component {

	render() {

		const { userRegister,userLogin,createAd}=this.props;
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/login" component={()=><Login userLogin={userLogin}/>} />
							<Route exact path="/register" component={() => <Register userRegister={userRegister} />} />
							<Route exact path="/home" component={() => <Home />} />
							<Route exact path="/myads" component={() => <MyAds />} />
							<Route exact path="/createad" component={ ()=><CreateAd createAd={createAd}/> } />
							<Route exact path="/profile" component={Profile} />
							<Redirect to="/login" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>

		);
	}
}
export default withRouter(connect(null,mapDispatchToProps)(Main));