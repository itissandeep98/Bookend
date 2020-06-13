import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export const configureStore = () => {
	const persistedState=laodFromLocalStorage();
	const store = createStore(
		rootReducer, 
		persistedState,
		applyMiddleware(thunk, logger)
	);


	store.subscribe(()=>saveToLocalStorage(store.getState()))

	return store;
}

function saveToLocalStorage(state) {
	try{
		const serializedState=JSON.stringify(state);
		localStorage.setItem('state',serializedState);
	}
	catch(e){
		console.log(e)
	}
}
function laodFromLocalStorage() {
	try {
		const serializedState=localStorage.getItem('state')
		if(serializedState===null) return undefined;
		return JSON.parse(serializedState)
	} catch (error) {
		console.log(error)
		return undefined
	}
	
}