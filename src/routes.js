import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivatePage from 'Pages/private/PrivatePage';
import LogInPage from 'Pages/login/LoginPage';
import HomePage from 'Pages/home/HomePage';
import HunterPage from 'Pages/hunters/HunterPage';
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
      <PrivateRoute path="/hunters" component={HunterPage}/>
    </Switch>
  );
}

export default Pages;
