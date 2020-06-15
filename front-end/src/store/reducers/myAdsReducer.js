import * as ActionTypes from "../ActionTypes";

const initState = {}

export const myAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADS_FETCH_SUCCESS:
			return { ...state, myAds: action.myAds, errmess:null };
		case ActionTypes.ADS_FETCH_FAILED:
			return { ...state, errmess: action.errmess, myAds:null }
		default:
			return state;
	}
};
export const deleteAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.AD_DELETE_SUCCESS:
			return { ...state};
		case ActionTypes.AD_DELETE_FAILED:
			return { ...state, errmess: action.errmess }
		default:
			return state;
	}
};

