import axios from "axios";
import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";
import fire from '../config/fire'

export const loginAction = (data) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.LOGIN_REQUEST })
		return fire.auth().signInWithEmailAndPassword(data.email_id, data.password)
			.then(response => {
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
		return fire.database().ref('/ads').push(data)
			.then(response=>{
				dispatch({ type: ActionTypes.ADCREATE_SUCCESS, succmess: "Your Ad has been successfully submitted"})
			})
			.catch(error=>{
				dispatch({ type: ActionTypes.ADCREATE_FAILED, errmess: error.message })
			})
	}
}

export const myAdsAction = (user_id) => {
	return async (dispatch) => {
		dispatch({type:ActionTypes.ADS_FETCH_LOADING})
		return fire.database().ref('/ads').on('value',(data)=>{
			var val=data.val()   //all ads
			var ads=Object.keys(val).map(ad=>{   // converted into an array
				val[ad].id=ad
				return val[ad]
			})
			ads=ads.filter((ad)=>{ // filtered for current user
				return ad.uid===user_id
			})
			dispatch({ type: ActionTypes.ADS_FETCH_SUCCESS, myAds: ads })
		})
	}
}


export const AdDeleteAction = (adid) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.AD_DELETE_LOADING })
		return fire.database().ref('/ads/' + adid).remove()
			.then(response => {
				dispatch({ type: ActionTypes.AD_DELETE_SUCCESS })
			})
			.catch(error => {
				dispatch({ type: ActionTypes.AD_DELETE_FAILED, errmess: "Error in connection with server" })
			})
	}
}

export const searchAdsAction = (data) => {
	return async (dispatch) => {
		dispatch({ type: ActionTypes.ADS_SEARCH_LOADING })
		return fire.database().ref('/ads').on('value', (data) => {
			var val = data.val()   //all ads
			var ads = Object.keys(val).map(ad => {   // converted into an array
				val[ad].id = ad
				return val[ad]
			})
			dispatch({ type: ActionTypes.ADS_SEARCH_SUCCESS, ads: ads })
		})
	}
}

export const searchUserAction = ({user_id}) => {
	console.log(user_id);
	return async (dispatch) => {
		dispatch({ type: ActionTypes.USER_SEARCH_LOADING })
		return fire.database().ref('users/' + user_id).on('value',(data)=>{
			dispatch({ type: ActionTypes.USER_SEARCH_SUCCESS, info: data.val() })
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