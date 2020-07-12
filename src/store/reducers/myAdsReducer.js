import * as ActionTypes from "../ActionTypes";

const initState = { isLoading: true}

export const myAdsReducer = (state = initState, action) => {
	switch (action.type) {
		case ActionTypes.ADS_FETCH_LOADING:
			return { ...state, isLoading: true}
		case ActionTypes.ADS_FETCH_SUCCESS:
			return { ...state, myAds: action.myAds, errmess: null, isLoading: false };
		case ActionTypes.ADS_FETCH_FAILED:
			return { ...state, errmess: action.errmess, myAds: null, isLoading: false }
		default:
			return state;
	}
};

const initState1 = { isLoading: false }
export const deleteAdsReducer = (state = initState1, action) => {
	switch (action.type) {
		case ActionTypes.AD_DELETE_LOADING:
			return { ...state, isLoading: true}
		case ActionTypes.AD_DELETE_SUCCESS:
			return { ...state, errmess: null, isLoading: false};
		case ActionTypes.AD_DELETE_FAILED:
			return { ...state, errmess: action.errmess, isLoading: false }
		default:
			return state;
	}
};

