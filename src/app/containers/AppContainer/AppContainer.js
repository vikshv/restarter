import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AppContainer extends React.Component {
    static propTypes = {};

    render() {
        return (
            <div>
                Render AppContainer
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(AppContainer);
