import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { MyAds } from "./MyAds/MyAds";
import { CreateAd } from "./CreateAd/CreateAd";
import Login from "./Logincomponent";


const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TransitionGroup>
				<CSSTransition key={this.props.location.key} classNames="page" timeout={3000}>
					<Switch>
						<Route exact path="/home" component={ Home } />
						<Route exact path="/myads" component={ MyAds } />
						<Route exact path="/login" component={Login} />
						<Route exact path="/createad" component={ CreateAd } />
						<Route exact path="/contactus" component={Login} />
						<Route exact exact path="/register" component={ Register } />
						<Redirect to="/login" />
					</Switch>
				</CSSTransition>
			</TransitionGroup>

		);
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));