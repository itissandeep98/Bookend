import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";
import fire from '../config/fire'

export const loginAction = (data) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.LOGIN_REQUEST })
		return fire.auth().signInWithEmailAndPassword(data.email_id, data.password)
			.then(response => {
				console.log(response);
				if (response.user){
					fire.database().ref("users/" + response.user.uid).on('value',resp=>{
						dispatch({ type: ActionTypes.LOGIN_SUCCESS, loginResponse: resp.val() })
					})
				}
				else
					dispatch({ type: ActionTypes.LOGIN_FAILED, errmess:"Wrong username or password" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.LOGIN_FAILED, errmess: error.message})
			})
	}
}

export const registerAction = (data) => {
	return (dispatch) => {
		dispatch({ type: ActionTypes.REGISTER_REQUEST })
		return fire.auth().createUserWithEmailAndPassword(data.email_id,data.password)
			.then(response => {
				if (response.user){
					data.uid=response.user.uid
					fire.database().ref("users/" + response.user.uid).set(data)
						.then(resp=>{
							dispatch({ type: ActionTypes.REGISTER_SUCCESS, user: response.user })
						})
						.catch(error => {
							dispatch({ type: ActionTypes.REGISTER_FAILED, errmess: error.message })
						})
				}
					
				else
					dispatch({ type: ActionTypes.REGISTER_FAILED, errmess: "Your register request discarded, please retry with different credentials" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.REGISTER_FAILED, errmess: error.message })
			})
	}
}

export const createAdAction=(data)=>{
	return (dispatch)=>{
		dispatch({ type: ActionTypes.ADCREATE_LOADING })
		return axios.post(baseUrl+'/createad',data)
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

export const myAdsAction = (user_id) => {
	return async (dispatch) => {
		dispatch({type:ActionTypes.ADS_FETCH_LOADING})
		return await axios.post(baseUrl+'/myads',{user_id})
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.ADS_FETCH_SUCCESS, myAds: response.data.ads})
				else
					dispatch({ type: ActionTypes.ADS_FETCH_FAILED, errmess: "Failed to fetch ads" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.ADS_FETCH_FAILED, errmess: "Error in connection with server" })
			})
	}
}


export const AdDeleteAction = (adData) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.AD_DELETE_LOADING })
		return await axios.post(baseUrl+'/deletead',adData)
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.AD_DELETE_SUCCESS })
				else
					dispatch({ type: ActionTypes.AD_DELETE_FAILED, errmess: "Failed to delete the ad" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.AD_DELETE_FAILED, errmess: "Error in connection with server" })
			})
	}
}

export const searchAdsAction = (data) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.ADS_SEARCH_LOADING })
		return await axios.get(baseUrl+'/search', {params:data})
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.ADS_SEARCH_SUCCESS, ads: response.data })
				else
					dispatch({ type: ActionTypes.ADS_SEARCH_FAILED, errmess: "No ads found" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.ADS_SEARCH_FAILED, errmess: "Error in connection with Server" })
			})
	}
}

export const searchUserAction = (data) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.USER_SEARCH_LOADING })
		return await axios.get(baseUrl+'/contactdetails', { params: data })
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.USER_SEARCH_SUCCESS, info: response.data })
				else
					dispatch({ type: ActionTypes.USER_SEARCH_FAILED, errmess: "User details Can't be Retrieved" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.USER_SEARCH_FAILED, errmess: "Error in connection with Server" })
			})
	}
}

export const courseFetchAction = () => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.COURSE_FETCH_LOADING })
		return await axios.get(baseUrl+'/courses')
			.then(response => {
				if (response.data.success)
					dispatch({ type: ActionTypes.COURSE_FETCH_SUCCESS, courses: response.data.courses })
				else
					dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Courses Can't be Fetched" })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.COURSE_FETCH_FAILED, errmess: "Error in connection with Server" })
			})
	}
}