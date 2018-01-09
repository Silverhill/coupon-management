import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './components/App'
import { Router } from 'react-router-dom'
import history from './history';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router history={history}>
            <NextApp/>
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
