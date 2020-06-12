import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore=()=>{
	const store=createStore(
		(state={})=>state,
		applyMiddleware(thunk,logger)
	);
	return store;
}