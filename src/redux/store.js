import { createStore , combineReducers, applyMiddleware }from 'redux'
import thunk from 'redux-thunk';
import rooms from './reducers/rooms';

const reducer  = combineReducers({
    rooms

});

const store = createStore(reducer , applyMiddleware( thunk))
export default store;
