/**
 * Created by ikonon on 2019/5/28
 */
import React from 'react';
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import './style.css'
import {
  actions as appActions,
  getError,
  getRequestQuantity
} from "../../redux/modules/app";
import connectRoute from "../../utils/connectRoute";
import asyncComponent from "../../utils/AsyncComponent";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function connectAsyncComponents(component) {
  return compose(connectRoute, asyncComponent, component)();
}

const AsyncHome = connectAsyncComponents(() => import("../Home"));
const AsyncChat = connectAsyncComponents(() => import("../Chat"));
const AsyncAuth = connectAsyncComponents(() => import("../Auth"));
const AsyncBarrage = connectAsyncComponents(() => import("../Barrage"));
const AsyncTest = connectAsyncComponents(() => import("../Test"));
const page404 = ({ location }) => (<h1>404 <code>{location.pathname}</code></h1>);

const mapStateToProps = (state, props) => ({
  error: getError(state),
  requestQuantity: getRequestQuantity(state)
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(appActions, dispatch)});
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {

  render() {
    // const { error, requestQuantity } = this.props;
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/auth" component={AsyncAuth} />
            <Route path="/barrage" component={AsyncBarrage} />
            <Route path="/signup" component={AsyncAuth} />
            <Route path="/test" component={AsyncTest} />
            <PrivateRoute path="/chat" component={AsyncChat} />
            <Route component={page404} />
          </Switch>
        </Router>

      </>
    );
  }
}



export default App;
