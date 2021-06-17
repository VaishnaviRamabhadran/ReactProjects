import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState={};
const middleware=[thunk];


const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)));

/*
const store=createStore(
    rootReducer,initialState,applyMiddleware(...middleware)
    );
*/
export default store;
