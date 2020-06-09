import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./RegisterComponent";
import Home from "./HomeComponent";

function Main(){
	
	return(
			<Switch>
			<Route path="/home" component={() => <Home />}/>
				<Route exact path="/register" component={() => <Register />} />
				<Redirect to="/home"  />
			</Switch>
		
	);
}
export default Main;