import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MyAds } from "./MyAds/MyAds";


const mapStateToProps = state => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<TransitionGroup>
				<CSSTransition classNames="page" timeout={3000}>
					<Switch>
						<Route path="/home" component={() => <Home />} />
						<Route path="/myads" component={() => <MyAds />} />
						<Route exact path="/register" component={() => <Register />} />
						<Redirect to="/home" />
					</Switch>
				</CSSTransition>
			</TransitionGroup>

		);
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));