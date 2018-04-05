import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';

import LogInPage from 'Pages/login/LoginPage';
import HomePage from 'Pages/home/HomePage';
import auth from './auth/authenticator';

const PrivateRoute = ({ component: Component }) => (
  <Route render={props => (
    auth.loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

PrivateRoute.propTypes = {
  component: PropTypes.func
}

const Pages = () => {
  return (
    <Switch>
        <Route path="/login" component={LogInPage} />
        <PrivateRoute path='/' component={HomePage} />
    </Switch>
  );
}

export default Pages;
