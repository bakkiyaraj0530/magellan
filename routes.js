// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const initializeApp = (injectReducer, injectSagas) => (
  Promise.all([
    import('containers/App/reducer'),
    import('containers/App/sagas'),
  ])
    .then(([reducer, sagas]) => {
      injectReducer('app', reducer.default);
      injectSagas(sagas.default);
    }));

const initializeBenefits = (injectReducer, injectSagas) => (
  Promise.all([
    import('containers/Benefits/reducer'),
    import('containers/Benefits/sagas'),
  ])
    .then(([reducer, sagas]) => {
      injectReducer('benefitsReducer', reducer.default);
      injectSagas(sagas.default);
    }));
const initializeClaimHistory = (injectReducer, injectSagas) => (
    Promise.all([
      import('containers/ClaimsHistory/reducer'),
      import('containers/ClaimsHistory/sagas'),
    ])
      .then(([reducer, sagas]) => {
        injectReducer('claimsHistoryReducer', reducer.default);
        injectSagas(sagas.default);
      }));

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  initializeApp(injectReducer, injectSagas);
  return [
    {
      path: '/member/claims',
      name: 'claimsHistory',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ClaimsHistory/reducer'),
          import('containers/ClaimsHistory/sagas'),
          import('containers/ClaimsHistory'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('claimsHistory', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Dashboard/reducer'),
          import('containers/Dashboard/sagas'),
          import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);
        initializeBenefits(injectReducer, injectSagas);
        initializeClaimHistory(injectReducer, injectSagas);
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    }, {
      path: '/member',
      name: 'landingPage',
      getComponent(location, cb) {
        const importModules = Promise.all([
          import('containers/LandingPage/reducer'),
          import('containers/LandingPage/sagas'),
          import('containers/LandingPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('drugPrice', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/account-settings',
      name: 'accountSettings',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/AccountSettings/reducer'),
          import('containers/AccountSettings/sagas'),
          import('containers/AccountSettings'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('accountSettings', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/benefits',
      name: 'benefits',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Benefits/reducer'),
          import('containers/Benefits/sagas'),
          import('containers/Benefits'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('benefits', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/contact',
      name: 'contact',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Contact/reducer'),
          import('containers/Contact/sagas'),
          import('containers/Contact'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contact', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/documents',
      name: 'documents',
      getComponent(location, cb) {
        import('containers/Documents')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/drug-lookup',
      name: 'drugLookup',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DrugLookup/reducer'),
          import('containers/DrugLookup/sagas'),
          import('containers/DrugLookup'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('drugLookup', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/drug-pricing',
      name: 'drugPrice',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DrugPrice/reducer'),
          import('containers/DrugPrice/sagas'),
          import('containers/DrugPrice'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('drugPrice', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/planselection',
      name: 'planSection',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PlanSection/reducer'),
          import('containers/PlanSection/sagas'),
          import('containers/PlanSection'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('planSection', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/member/forms',
      name: 'forms',
      getComponent(location, cb) {
        import('containers/Forms')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/helper-tools',
      name: 'helperLinks',
      getComponent(location, cb) {
        import('containers/HelperLinks')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/links',
      name: 'links',
      getComponent(location, cb) {
        import('containers/Links')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/mail-order',
      name: 'mailOrder',
      getComponent(location, cb) {
        import('containers/MailOrder')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/star-ratings',
      name: 'starRatings',
      getComponent(location, cb) {
        import('containers/StarRatings')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/member/find-a-pharmacy',
      name: 'pharmacyLocator',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/PharmacyLocator/reducer'),
          import('containers/PharmacyLocator/sagas'),
          import('containers/PharmacyLocator'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('pharmacyLocator', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
