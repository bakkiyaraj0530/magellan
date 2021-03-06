/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import axios from 'axios';
import 'sanitize.css/sanitize.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import ReactGA from 'react-ga';
// Import root app
import App from 'containers/App';

// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from 'containers/App/selectors';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
// import 'file-loader?name=[name].[ext]!./.htaccess';
import '!!style-loader!css-loader?name=[name].[ext]!./assets/css/fonts.css';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './store';


// Import i18n messages
import { getTranslations } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Import root routes
import createRoutes from './routes';

import { storeItems, logoutAndDestroy } from '../app/assets/js/oauth';
// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);
ReactGA.initialize('UA-51572212-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

const render = (messages) => {
  storeItems();
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router
          history={history}
          routes={rootRoute}
          render={
            // Scroll to top when going to a new page, imitating default browser
            // behaviour
            applyRouterMiddleware(useScroll())
          }
          onUpdate={logPageView}
        />
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  );
};
// Add a request interceptor
axios.interceptors.request.use((config) => {
  const accessToken = window.localStorage.getItem('access_token');
  const mailOrderToken = window.sessionStorage.getItem('mailorder_token');
  const mailOrderTokenD = window.sessionStorage.getItem('mailorder_token_d');
  const tokenType = window.localStorage.getItem('token_type');
  const dependentToken = window.localStorage.getItem('dependent_token');
  const memberId = window.localStorage.getItem('member_id');
  const interceptedConfig = config;

  interceptedConfig.headers = config.headers || {};

  if (tokenType != null && accessToken != null) {
    if (config.url && config.url.indexOf('portalmicroservices') > 0) {
      interceptedConfig.headers.Authorization = `${tokenType} ${accessToken}`;
      if (dependentToken) {
        interceptedConfig.headers.mailorder_token = mailOrderTokenD;
      } else {
        interceptedConfig.headers.mailorder_token = mailOrderToken;
      }
    }
  }
  if (interceptedConfig.url && interceptedConfig.url.indexOf('portalmicroservices') > 0) {
    if (interceptedConfig.url.indexOf('?') > 0) {
      interceptedConfig.url = `${interceptedConfig.url}&ts=${new Date().getTime()}`;
    } else {
      interceptedConfig.url = `${interceptedConfig.url}?ts=${new Date().getTime()}`;
    }
  }

  if (interceptedConfig.url && interceptedConfig.url.indexOf('mailorder') > 0) {
    if (dependentToken) {
      interceptedConfig.headers.mailorder_token = mailOrderTokenD;
    } else {
      interceptedConfig.headers.mailorder_token = mailOrderToken;
    }
    if (memberId != null) {
      interceptedConfig.headers.memberId = memberId;
    }
  }
  return interceptedConfig;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    logoutAndDestroy();
  }
  return Promise.reject(error);
});

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    Promise.all([
      new Promise((resolve) => getTranslations('en', resolve)),
      new Promise((resolve) => getTranslations('es', resolve)),
    ]).then((translations) => render({ en: translations[0], es: translations[1] }));
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => Promise.all([
      new Promise((resolve) => getTranslations('en', resolve)),
      new Promise((resolve) => getTranslations('es', resolve)),
    ])
     .then((translations) => render({ en: translations[0], es: translations[1] })))
    .catch((err) => {
      throw err;
    });
} else {
  Promise.all([
    new Promise((resolve) => getTranslations('en', resolve)),
    new Promise((resolve) => getTranslations('es', resolve)),
  ]).then((translations) => render({ en: translations[0], es: translations[1] }));
}


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
