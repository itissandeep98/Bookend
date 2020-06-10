import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Login } from './Login';

export const configureStore=()=>{
	const store=createStore(
		combineReducers({
			login:Login,
			
		}),
		applyMiddleware(thunk,logger)
	);
	return store;
}