import * as ActionTypes from "../ActionTypes";


const initState = {

}

const myAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.GET_MY_ADS:
			return {...state, myAds: action.myAds};
	
		default:
			return state;
	}	
};

export default myAdsReducer