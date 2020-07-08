import * as ActionTypes from "../ActionTypes";

const initState = {}

const createadReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADCREATE_SUCCESS:
			var details = action.user.user;
			return { ...state, details, succmess:action.succmess,errmess:null };
		case ActionTypes.ADCREATE_FAILED:
			return { ...state, errmess: action.errmess,succmess:null };
		default:
			return state;
	}
};

export default createadReducer;