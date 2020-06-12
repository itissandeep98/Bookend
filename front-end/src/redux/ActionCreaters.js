import axios from "axios";

export function userLogin(userdata){
	return dispatch=> {
		return axios.post('login', userdata);
	}
		
}

export function userRegister(userdata){
	return dispatch=>{
		return  axios.post('register',userdata);
	}
}
export function createAd(data) {
	return dispatch => {
		return axios.post('created', data);
	}
}

