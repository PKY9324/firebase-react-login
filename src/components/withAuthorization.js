import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { PropTypes } from "prop-types";
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount(){
            firebase.auth.onAuthStateChanged(authUser => {
                if(!authCondition(authUser)) {
                    this.props.history.push(routes.SIGN_IN);
                }
            })
        }

        render() {
            return this.props.authUser ? <Component /> : null;
        }
    }

    // WithAuthorization.contextTypes = {
    //     authUser: PropTypes.object,
    // };

    const mapStateToProps = (state) => ({
        authUser: state.sessionState.authUser,
    });

    return compose(
        withRouter,
        connect(mapStateToProps),
    )(WithAuthorization);
}

export default withAuthorization;