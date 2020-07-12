import * as ActionTypes from "../ActionTypes";

const initState = {isLoading:false}

const createadReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADCREATE_LOADING:
			return {...state, isLoading: true}
		case ActionTypes.ADCREATE_SUCCESS:
			var details = action.user.user;
			return { ...state, details, succmess:action.succmess,errmess:null, isLoading: false };
		case ActionTypes.ADCREATE_FAILED:
			return { ...state, errmess: action.errmess, succmess: null, isLoading: false };
		default:
			return state;
	}
};

export default createadReducer;