import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	fieldAddTodoReduser,
	flagsReduser,
	todoListReduser,
	updateTodoReduser,
} from './reducers';

const reduser = combineReducers({
	todoListState: todoListReduser,
	fieldAddTodotState: fieldAddTodoReduser,
	flagsState: flagsReduser,
	updateTodoState: updateTodoReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));
