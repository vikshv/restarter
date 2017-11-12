import reducerService from 'core/services/reducerService';

const initialState = {};
const handlers = {};

export default {
    app: reducerService.newSwitchReducer(handlers, {
        initialState
    })
};

