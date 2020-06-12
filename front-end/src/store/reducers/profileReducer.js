const initState = {
	id: null,
	name: 'Sandeep',
	rollNum: '2018347'
}

const profileReducer = (state = initState, action) => {
	console.log(action);
	
	if (action.type == "SET_PROFILE") {
		return {
			...state,
			id: action.user.id,
			name: action.user.name,
			rollNum: action.user.rollNum
		}
	}
	
	return state;
}

export default profileReducer;