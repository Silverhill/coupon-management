import React from 'react';
import { FormattedMessage } from 'react-intl'

import Header from 'Components/common/header/Header';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>
            <FormattedMessage id='MANAGEMENT.home'/>
          </h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
