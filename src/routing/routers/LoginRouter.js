import React from "react";
import LoginPage from "../../pages/login";
import { Route, Switch, Redirect } from "react-router-dom";

function LoginRouter() {
	return (
		<Switch>
			<Route exact path="/login/" component={LoginPage} />
		</Switch>
	);
}

export default LoginRouter;
