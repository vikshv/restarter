import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
    const rootReducer = combineReducers(reducers);
    const middleware = applyMiddleware(thunk);
    const store = createStore(rootReducer, initialState, middleware);

    if (module.hot && process.env.NODE_ENV !== 'production') {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}
