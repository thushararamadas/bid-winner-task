import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import Store, { Context } from "../../contexts/Store";
import { AuthRoute } from "../routes/AuthRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import LoginRouter from "./LoginRouter";
import AppRouter from "./AppRouter";

export default function MainRouter() {
	const [isLoading, setLoading] = useState(true);
	const { dispatch } = useContext(Context);

	async function fetchUserData() {
		let promise = new Promise((resolve, reject) => {
			let user_details = localStorage.getItem("user_details");
			if (!user_details) {
				localStorage.setItem(
					"user_details",
					JSON.stringify(user_details)
				);
				user_details = localStorage.getItem("user_details");
			}
			let user_details_stored = JSON.parse(user_details);
			dispatch({
				type: "UPDATE_USER_DETAILS",
				user_details: user_details_stored,
			});
			setTimeout(() => {
				resolve("done!");
				setLoading(false);
			}, 500);
		});

		let result = await promise;
	}

	useEffect(() => {
		fetchUserData();
		// document.addEventListener("contextmenu", (e) => {
		// 	e.preventDefault();
		// });
		// <body oncontextmenu="return false">
		// document.onkeydown = function(e) {
		// if(event.keyCode == 123) {
		// 	return false;
		// }
		// if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		// 	return false;
		// }
		// if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		// 	return false;
		// }
		// if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		// 	return false;
		// }
		// if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		// 	return false;
		// }
	}, []);

	return isLoading ? null : (
		<Suspense fallback={"Loading"}>
			<Switch>
				<AuthRoute path="/login/" component={LoginRouter} />
				<PrivateRoute path="/" component={AppRouter} />
			</Switch>
		</Suspense>
	);
}
