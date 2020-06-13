import * as ActionTypes from "../ActionTypes";

export const logoutReducer=(state,action)=>{
	switch(action.type){
		case ActionTypes.LOGOUT_FAILED:
			return {...state,errmess:action.payload}
		case ActionTypes.LOGOUT_SUCCESS:
			return {...state,errmess:null}
		default:
			return state;
	}
};
export default logoutReducer;