import * as ActionTypes from "../ActionTypes";

const initState = { isLoading: false}

const registerReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.REGISTER_REQUEST:
			return { ...state, errmess: null, details: [], isLoading: true };

		case ActionTypes.REGISTER_SUCCESS:
			var details = action.user.user;
			return { ...state, errmess: null, details, isLoading: false };

		case ActionTypes.REGISTER_FAILED:
			return { ...state, errmess: action.errmess, details: [], isLoading: false };

		default:
			return state;
	}
};

export default registerReducer;