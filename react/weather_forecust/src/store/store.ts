import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { mainReducer } from "../reducers/mainReducer";
import createSagaMiddleware from 'redux-saga';


const rootReducer = combineReducers({
    mainReducer,
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);
