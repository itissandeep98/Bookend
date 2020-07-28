import * as ActionTypes from "../ActionTypes";

const initState = {
	isLoading: false,
	details:[]
}

const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.LOGIN_REQUEST:
			return { ...state, errmess: null, details: [], isLoading: true};

		case ActionTypes.LOGIN_SUCCESS:
			var details=action.loginResponse;
			return { ...state, errmess: null, details, isLoading: false};

		case ActionTypes.LOGIN_FAILED:
			return { ...state, errmess: action.errmess, details: [], isLoading: false };
	
		default:
			return state;
	}	
};

export default loginReducer;