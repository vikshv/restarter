import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import AppContainer from 'core/components/AppContainer';

export default class RenderAppService {
    renderApp(App, options) {
        const { containerId, store, ...otherOptions } = options;
        const container = document.getElementById(containerId || 'root');
        let result;

        if (container) {
            const component = (
                <AppContainer store={store}>
                    <App 
                        {...otherOptions}
                    />
                </AppContainer>
            );
            unmountComponentAtNode(container);
            result = render(component, container);
        } else {
            result = null;
        }

        return result;
    }
}
