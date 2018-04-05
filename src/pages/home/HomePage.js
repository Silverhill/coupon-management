import React from 'react';
import { FormattedMessage } from 'react-intl'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage id='MANAGEMENT.home'/>
        </h1>
      </div>
    );
  }
}

export default HomePage;
