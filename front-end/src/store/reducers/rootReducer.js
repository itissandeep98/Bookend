import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import createadReducer from './createadReducer';
import { myAdsReducer, deleteAdsReducer } from './myAdsReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	createad: createadReducer,
	myAds: myAdsReducer,
	deleteAd: deleteAdsReducer,
})

export default rootReducer