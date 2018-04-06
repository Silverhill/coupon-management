import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/common/header/Header';
import HunterPage from 'Pages/hunters/HunterPage';

import styles from './HomePage.scss';

const PageHome = (props) => <div><h1><FormattedMessage id='MANAGEMENT.home' /></h1></div>
class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.mainView}>
          <main className={styles.renderContainer}>
            <Switch>
              <Route exact path='/' component={PageHome} />
              <Route path='/hunters' component={HunterPage} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default HomePage;
