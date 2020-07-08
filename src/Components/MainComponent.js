import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux'
import Header from "./NavbarComponent";
import Login from "./Authorization/Logincomponent";
import Register from "./Authorization/RegisterComponent";
import Home from "./Home/HomeComponent";
import MyAds from "./MyAds/MyAds";
import CreateAd  from "./CreateAd/CreateAd";
import Profile from "./Profile/Profile";
import { courseFetchAction } from "../store/ActionCreators";


class Main extends Component {
	constructor(props){
		super(props);
		this.collectCourse=this.collectCourse.bind(this);
	}
	collectCourse() {
		if (!this.props.courses.courses) {
			this.props.fetchCourse()
		}
	}

	render() {
		setInterval(this.collectCourse, 60000); //fetch course every 1 min only if courses list is empty
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/" component={() => <Login />} />
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
		login: state.login,
		courses: state.courses,
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchCourse: () => dispatch(courseFetchAction()),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));