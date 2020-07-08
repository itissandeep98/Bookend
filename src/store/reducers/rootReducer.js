import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import createadReducer from './createadReducer';
import { myAdsReducer, deleteAdsReducer } from './myAdsReducer';
import { searchAdsReducer, searchSellerReducer } from './search';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	createad: createadReducer,
	myAds: myAdsReducer,
	deleteAd: deleteAdsReducer,
	searchAds: searchAdsReducer,
	searchUser: searchSellerReducer,
	courses: courseReducer,
})

export default rootReducer