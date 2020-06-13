import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import createadReducer from './createadReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	createad: createadReducer
})

export default rootReducer