import * as ActionTypes from "../ActionTypes";

const initState = {
	isChecking: true,
	errmess: 'init error message',
	details: []
}

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN_REQUEST:
			return {...state,isChecking:true, errmess: null,details:[]};

		case ActionTypes.LOGIN_SUCCESS:
			var details=action.user.user;
			return { ...state, isChecking: false, errmess: null, details, success: true };

		case ActionTypes.LOGIN_FAILED:
			return { ...state, isChecking: false, errmess: action.errmess, details: [], success: false };
	
		default:
			return state;
	}	
};

export default loginReducer