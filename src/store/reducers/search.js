import * as ActionTypes from "../ActionTypes";

const initState = {}

export const searchAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADS_SEARCH_SUCCESS:
			var ads = action.ads.result;
			return { ...state, errmess: null, ads };

		case ActionTypes.ADS_SEARCH_FAILED:
			return { ...state, errmess: action.errmess };

		default:
			return state;
	}
};


export const searchSellerReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.USER_SEARCH_SUCCESS:
			var info = action.info.user;
			return { ...state, errmess: null, info };

		case ActionTypes.USER_SEARCH_FAILED:
			return { ...state, errmess: action.errmess };

		default:
			return state;
	}
};
