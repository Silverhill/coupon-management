import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import 'coupon-components/build/styles.css';

import './index.scss';
import App from './components/App'
import history from './history';
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import client from './apollo-client';


import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import messages from './messages'

addLocaleData([...en, ...es])

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
      <Provider store={store}>
        <IntlProvider locale={'es'} messages={messages['es']}>
          <Router history={history}>
              <App/>
          </Router>
        </IntlProvider>
      </Provider>
      </ApolloProvider>,
    document.getElementById('root')
  );

registerServiceWorker();
