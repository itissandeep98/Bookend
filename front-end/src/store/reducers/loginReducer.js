import * as ActionTypes from "../ActionTypes";

const initState = {
	isChecking: true,
	errmess: 'init error message',
	details: []
}

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return {...state,isChecking:true, errmess: null,details:[]};

		case 'LOGIN_SUCCESS':
			return { ...state, isChecking: false, errmess: null, details: [], success: true };

		case 'LOGIN_FAILED':
			return { ...state, isChecking: false, errmess: action.payload, details: [], success: false };
	
		default:
			return state;
	}	
};

export default loginReducer