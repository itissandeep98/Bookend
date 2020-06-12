import loginReducer from './loginReducer'
import profileReducer from './profileReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	login: loginReducer,
	profile: profileReducer
})

export default rootReducer