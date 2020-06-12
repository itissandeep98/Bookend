import * as ActionTypes from "../ActionTypes";

const initState = {
	id: null,
	name: 'Sandeep',
	rollNum: '2018347'
}

const profileReducer = (state = initState, action) => {
	console.log(action);
	
	switch(action.type ){
	 case ActionTypes.SET_PROFILE:
		return {
			...state,
			id: action.user.id,
			name: action.user.name,
			rollNum: action.user.rollNum
		}
		
		default:
			return state;
	}
	
	
}

export default profileReducer;