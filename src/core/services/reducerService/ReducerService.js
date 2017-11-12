import { isFunction } from 'underscore';

export default class ReducerService {
    newSwitchReducer(handlers, options = {}) {
        const { initialState = {}, notfoundCallback } = options;
        return (state = this._getInitialState(initialState), action) => {
            const { type } = action;
            let result;
            if (handlers.hasOwnProperty(type)) {
                result = handlers[type](state, action);
            } else {
                result = notfoundCallback ? notfoundCallback(state, action, options) : state;
            }
            return result;
        };
    }

    _getInitialState(initialState) {
        let result;
        if (isFunction(initialState)) {
            result = initialState();
        } else {
            result = initialState;
        }
        return result;
    }
}
