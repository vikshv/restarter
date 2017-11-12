import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { AppContainer as HotAppContainer } from 'react-hot-loader';

export default class AppContainer extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        children: PropTypes.element.isRequired
    };

    render() {
        return (
            <HotAppContainer>
                <Provider store={this.props.store}>
                    {React.Children.only(this.props.children)}
                </Provider>
            </HotAppContainer>
        );
    }
}

