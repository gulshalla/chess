import React from "react";
import { Route } from "react-router-dom";
import Index from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Privacy from 'pages/Terms';
import Terms from 'pages/Privacy';
import Forgot from 'pages/ForgotPassword';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Index} />
        <Route  path="/sign-in/" component={SignIn} />
        <Route  path="/sign-up/" component={SignUp} />
        <Route  path="/privacy/" component={Terms} />
        <Route  path="/terms/" component={Privacy} />
        <Route  path="/forgot-password/" component={Forgot} />
      </React.Fragment>
    );
  }
}

export default Routes;
