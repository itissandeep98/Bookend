import * as ActionTypes from "../ActionTypes";

const initState = {
	errmess: 'init error message',
	details: []
}

const registerReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.REGISTER_REQUEST:
			return { ...state, errmess: null, details: [] };

		case ActionTypes.REGISTER_SUCCESS:
			var details = action.user.user;
			return { ...state, errmess: null, details };

		case ActionTypes.REGISTER_FAILED:
			return { ...state, errmess: action.errmess, details: [] };

		default:
			return state;
	}
};

export default registerReducer;