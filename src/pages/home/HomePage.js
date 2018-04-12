import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import { graphql } from 'react-apollo';

import Header from 'Components/common/header/Header';
import HunterPage from 'Pages/hunters/HunterPage';
import MakerPage from 'Pages/makers/MakerPage';
import Footer from 'Components/common/footer/Footer';
import QueryService from '../../queries-service';

import styles from './HomePage.scss';

const PageHome = (props) => <div><h1><FormattedMessage id='MANAGEMENT.home' /></h1></div>
class HomePage extends React.Component {

  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    this.props.actions.logOutUser();
  }

  render() {
    const { data: { error, loading, me }} = this.props;
    let tabOptions = [
      {
        id: 0,
        label: 'Home',
        route: '/',
        icon: 'CpTicket'
      },
      {
        id: 1,
        label: 'Hunters',
        route: '/hunters',
        icon: 'FaListAlt'
      },
      {
        id: 2,
        label: 'Makers',
        route: '/makers',
        icon: 'FaBellO'
      },
    ];
    let userData = {
      name: me && me.name,
      image: (me && me.image) || 'https://i.pinimg.com/564x/bc/c8/10/bcc8102f42e58720355ca02d833c204b.jpg',
      options: [
        {
          value: 'Mi perfil',
          onClick: ()=>{this.props.history.push('/profile');}
        },
        {
          value: 'Cerrar Sesion',
          onClick: ()=>{
            this.logOut();
          }
        }
      ]
    };
    if(error) return <h4>{error.message}</h4>
    else if(loading) return <h4>Loading...</h4>
    return (
      <div className={styles.container}>
        <Header tabs={tabOptions} userData={userData}/>
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

function mapStateToProps(state) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

const HomePageWithUser = graphql(QueryService.getMe)(HomePage);

export default connect(mapStateToProps, mapDispatchToProps)(HomePageWithUser);
