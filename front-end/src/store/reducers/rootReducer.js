import loginReducer from './loginReducer'
import { combineReducers } from 'redux'
import registerReducer from './registerReducer'

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer
})

export default rootReducer