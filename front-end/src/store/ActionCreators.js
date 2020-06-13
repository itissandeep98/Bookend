import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const loginAction = (data) => {
	return async (dispatch) => {
		return await axios.post('/login', data)
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.LOGIN_SUCCESS, loginResponse: response.data})
				else
					dispatch({ type: ActionTypes.LOGIN_FAILED, errmess:"Wrong username or password" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.LOGIN_FAILED, errmess:"Error in connection with Server"})
			})
	}
}

export const registerAction = (data) => {
	return (dispatch) => {
		return axios.post('/register', data)
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.REGISTER_SUCCESS, user: response.data })
				else
					dispatch({ type: ActionTypes.REGISTER_FAILED, errmess: "Your register request discarded, please retry with different credentials" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.REGISTER_FAILED, errmess: "Error in Contacting with Server" })
			})
	}
}

export const createAdAction=(data)=>{
	return (dispatch)=>{
		return axios.post('/createad',data)
			.then(response=>{
				if (response.data.success)
					dispatch({ type: ActionTypes.ADCREATE_SUCCESS, user: response.data, succmess: "Your Ad has been successfully submitted"})
				else
					dispatch({ type: ActionTypes.ADCREATE_FAILED, errmess:"Error in submitting the Ad Please retry"})
			})
			.catch(error=>{
				dispatch({ type: ActionTypes.ADCREATE_FAILED, errmess: "Error in contacting the server" })
			})
	}
}

export const myAdsAction = () => {
	return async (dispatch) => {
		return await axios.post('/myads')
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.ADS_FETCH_SUCCESS, myAds: response.data.ads})
				else
					dispatch({ type: ActionTypes.GET_MY_ADS, errmess: "Failed to fetch my else" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.ADS_FETCH_FAILED, errmess: "Failed to fetch my ads" })
			})
	}
}


