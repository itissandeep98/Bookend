import * as ActionTypes from "../ActionTypes";

const initState = { isLoading: false}

export const searchAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADS_SEARCH_LOADING:
			return { ...state, isLoading: true}
		case ActionTypes.ADS_SEARCH_SUCCESS:
			var ads = action.ads;
			return { ...state, errmess: null, ads, isLoading: false };

		case ActionTypes.ADS_SEARCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false };

		default:
			return state;
	}
};


export const searchSellerReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.USER_SEARCH_LOADING:
			return { ...state, isLoading: true}
		case ActionTypes.USER_SEARCH_SUCCESS:
			var info = action.info;
			return { ...state, errmess: null, info, isLoading: false };

		case ActionTypes.USER_SEARCH_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false };

		default:
			return state;
	}
};
