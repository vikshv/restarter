import 'babel-polyfill';

import renderAppService from 'core/services/renderAppService';

import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';
import 'core/styles';

export default function start() {
    const store = configureStore();
    renderApp(store);

    if (module.hot && process.env.NODE_ENV !== 'production') {
        initHotUpdate(store);
    }
}

function renderApp(store) {
    renderAppService.renderApp(AppContainer, {
        store
    });
}

function initHotUpdate(store) {
    module.hot.accept('./containers/AppContainer', () => {
        renderApp(store);
    });
}
