import * as ActionTypes from "./ActionTypes";

export const Login=(state={
		isChecking:true,
		errmess:null,
		details:[]},action)=>{
	switch (action.type) {
		case ActionTypes.LOGIN_REQUEST:
			return {...state,isChecking:true,errmess:null,details:[]};

		case ActionTypes.LOGIN_SUCCESS:
			return { ...state, isChecking: false, errmess: null, details: action.payload };

		case ActionTypes.LOGIN_FAILED:
			return { ...state, isChecking: false, errmess: action.payload, details: [] };
	
		default:
			return state;
	}
	
};