import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthState} from "../../../redux/modules/auth";

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>{
        let isAuth = rest.isAuthenticated;
        return isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )}
      }
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    isAuthenticated: getAuthState(state)
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);

