import axios from "axios";

export const loginAction = (data) => {
	return (dispatch) => {
		return axios.post('/login', data
		).then(response => {
			
			console.log("login response", response);

			if (response.data.success)
				dispatch({ type: 'LOGIN_SUCCESS', user: response.data})
			else
				dispatch({ type: 'LOGIN_FAILED' })
		})
		.catch(error => {
			console.log(error);
			dispatch({ type: 'LOGIN_FAILED', user: {name: 'Anmol'}})
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