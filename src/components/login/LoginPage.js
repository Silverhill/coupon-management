import React from 'react';
import {connect} from 'react-redux';
import { graphql } from 'react-apollo';

import QueryService from '../../queries-service';
import * as sessionActions from '../../actions/sessionActions';
import { InputBox, Button } from 'coupon-components';

class LogInPage extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  onChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      }
    });

  }

  onSave = async (event) => {
    event.preventDefault();
    let email = this.state.credentials.email;
    let password = this.state.credentials.password;
    const result = await this.props.mutate({
      variables: {
        email,
        password
      },
    });
    sessionStorage.setItem('jwt', result.data.login);
    this.props.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form onChange={this.onChange} onSubmit={this.onSave}>

          <InputBox
            name="email"
            leftIcon="FaUser"
            placeholder="Usuario"
            shape="pill"
            value={this.state.credentials.email}
          />

          <InputBox
            name="password"
            leftIcon="FaLock"
            type="password"
            placeholder="Contraseña"
            shape="pill"
            value={this.state.credentials.password}
          />

          <Button shape="pill"
                  gradient
                  type="submit"
                  text="login" />
        </form>
      </div>
  );
  }
}

const LoginPageWithLogin = graphql(QueryService.login)(LogInPage);

export default connect(
  null,
{
  loginUser: sessionActions.loginUser,
})(LoginPageWithLogin);

