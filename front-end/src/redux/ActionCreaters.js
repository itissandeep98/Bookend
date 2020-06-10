import * as ActionTypes from "./ActionTypes";

export const tryLogin=(username, password)=>(dispatch)=>{
	const User = {
		username: username,
		password: password,
	}
	return fetch('login', {
		method: "POST",
		body: JSON.stringify(User),
		headers: {
			"Content-Type": "application/json"
		},
		credentials: "same-origin"
	})
		.then(response => {
			if (response.ok) {
				return response;
			} else {
				var error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		},
			error => {
				throw error;
			})
		.then(response => response.json())
		.then(response => dispatch(addComment(response)))
		.catch(error => { alert('Error: ' + error.message); });
}
export const loggedin=(response)=>({
	type:ActionTypes.LOGIN_SUCCESS,
	payload:response
});