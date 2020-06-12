import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const loginAction = (data) => {
	return (dispatch) => {
		return axios.post('/login', data)
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.LOGIN_SUCCESS, user: response.data})
				else
					dispatch({ type: ActionTypes.LOGIN_FAILED })
			})
			.catch(error => {
				console.log(error);
				dispatch({ type: ActionTypes.LOGIN_FAILED})
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

export const setProfile = () => {
	// axios({
	// 	method: 'post',
	// 	url: '/login',
	// 	data: {
	// 	  firstName: 'Finn',
	// 	  lastName: 'Williams'
	// 	}
	//   })
	//   .then(response => {
	// 	  console.log(response)
	// 	  console.log(JSONStringify(response))
	// 	  const user = JSONStringify(response)
	//   })
	//   .catch(error => {
	// 	  console.log(error);
	//   })

	return (dispatch, getState) => {
		dispatch({type: 'SETUP_PROFILE', user: 1})
	}
}