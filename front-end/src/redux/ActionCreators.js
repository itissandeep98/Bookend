import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseURL";

export const verifyLogin=(username, password)=>(dispatch)=>{
	const User={
		username:username,
		password: password,
	}
	return fetch(baseUrl+'login',{
		method: 'POST',
		body:JSON.stringify(User),
		headers:{
			"Content-Type": "application/json"
		},
		credentials: "same-origin"
	}).then(response=>{
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
		.then(response => dispatch(verify(response)))
		.catch(error => { console.log('verifyLogin', error.message); alert('Error: ' + error.message); });
};

export const verify=(response)=>({
	type:ActionTypes.VERIFY_LOGIN,
	payload:response
});