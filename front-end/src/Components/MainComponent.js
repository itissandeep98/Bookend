import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Main(){
	
	return(
		<TransitionGroup>
			<CSSTransition classNames="page" timeout={3000}>	
			<Switch>
			<Route path="/home" component={() => <Home />}/>
				<Route exact path="/register" component={() => <Register />} />
				<Redirect to="/home"  />
			</Switch>
			</CSSTransition>
		</TransitionGroup>
		
	);
}
export default Main;