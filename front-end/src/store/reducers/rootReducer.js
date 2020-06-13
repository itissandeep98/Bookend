import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import createadReducer from './createadReducer';
import myAdsReducer from './myAdsReducer'

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	createad: createadReducer,
	myAds: myAdsReducer
})

export default rootReducer