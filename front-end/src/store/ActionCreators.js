import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const loginAction = (data) => {
	return (dispatch) => {
		return axios.post('/login', data)
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.LOGIN_SUCCESS, user: response.data})
				else
					dispatch({ type: ActionTypes.LOGIN_FAILED, errmess:"Wrong username or password" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.LOGIN_FAILED, errmess:"Error in connection with Server"})
			})
	}
}

export function userRegister(userdata){
	return dispatch=>{
		return  axios.post('/register',userdata);
	}
}

export function createAd(data) {
	return dispatch => {
		return axios.post('/createad', data);
	}
}

