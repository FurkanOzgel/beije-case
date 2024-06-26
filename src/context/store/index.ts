import {combineReducers, createStore, applyMiddleware} from 'redux';
import { cartReducer } from '../cart/reducers';
// import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
    cart: cartReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    // const middlewares = [createLogger({})];
    // const middleWareEnhancer = applyMiddleware(...middlewares);
    // const store = createStore(rootReducer, middleWareEnhancer);

    const store = createStore(rootReducer);
    return store;
}

export type RootState = ReturnType<typeof rootReducer>