import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux'
import Header from "./NavbarComponent";
import Home from "./Home/HomeComponent";
import MyAds from "./MyAds/MyAds";
import CreateAd  from "./CreateAd/CreateAd";
import Profile from "./Profile/Profile";
import { courseFetchAction } from "../store/ActionCreators";
import AuthComp from "./Authorization/AuthComp";


class Main extends Component {
	componentDidMount(){
		this.props.fetchCourse()
	}

	render() {
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route exact path="/" component={() => <AuthComp/>} />
							<Route exact path="/login" component={() => <AuthComp /> } />
							<Route exact path="/register" component={() => <AuthComp />} />
							<Route exact path="/home" render = { () => <Home {...this.props} /> } />
							<Route exact path="/myads" component={() => <MyAds />} />
							<Route exact path="/createad" component={ ()=><CreateAd /> } />
							<Route exact path="/profile" render = { () => <Profile {...this.props} /> } />
							<Redirect to="/" />
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