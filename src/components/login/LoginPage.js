import React from 'react';
//import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import { Button } from 'coupon-components';

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

  onSave = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form onChange={this.onChange} onSubmit={this.onSave}>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email} />

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password} />

          <Button type="submit" text="login" />
        </form>
      </div>
  );
  }
}

export default connect(
  null,
{
  loginUser: sessionActions.loginUser,
})(LogInPage);
