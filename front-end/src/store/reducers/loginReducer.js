import * as ActionTypes from "../ActionTypes";

const initState = {
	isChecking: true,
	errmess: 'init error message',
	details: []
}

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN_REQUEST:
			return {...state, errmess: null,details:[]};

		case ActionTypes.LOGIN_SUCCESS:
			var details=action.user.user;
			return { ...state, errmess: null, details};

		case ActionTypes.LOGIN_FAILED:
			return { ...state, errmess: action.errmess, details: [] };
	
		default:
			return state;
	}	
};

export default loginReducer;