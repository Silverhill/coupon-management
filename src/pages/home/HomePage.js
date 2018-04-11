import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/common/header/Header';
import HunterPage from 'Pages/hunters/HunterPage';
import MakerPage from 'Pages/makers/MakerPage';
import Footer from 'Components/common/footer/Footer';

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
              <Route path='/makers' component={MakerPage} />
            </Switch>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
