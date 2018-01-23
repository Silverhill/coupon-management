import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivatePage from './components/private/PrivatePage';
import LogInPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import auth from './auth/authenticator';
import PropTypes from 'prop-types';

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
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LogInPage} />
      <PrivateRoute path="/private" component={PrivatePage}/>
    </Switch>
  );
}

export default Pages;
