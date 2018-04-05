import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/common/header/Header';
import HunterPage from 'Pages/hunters/HunterPage'

const PageHome = (props) => <div><h1><FormattedMessage id='MANAGEMENT.home' /></h1></div>

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <Switch>
              <Route exact path='/' component={PageHome} />
              <Route path='/hunters' component={HunterPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
