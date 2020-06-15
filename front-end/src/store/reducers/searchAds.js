import * as ActionTypes from "../ActionTypes";

const initState = {
	ads: [],
	errmess:null
}

const searchAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADS_SEARCH_SUCCESS:
			var ads = action.ads;
			return { ...state, errmess: null, ads };

		case ActionTypes.ADS_SEARCH_FAILED:
			return { ...state, errmess: action.errmess };

		default:
			return state;
	}
};

export default searchAdsReducer;