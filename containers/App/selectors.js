import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
export const selectAppDomain = () => (state) => state.get('app');

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route
    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectedLanguage = () => (state) => state.get('language');
const makeSelectAppState = () => createSelector(
  selectAppDomain(),
  (substate) => substate.toJS()
);

const selectedLanguageState = () => createSelector(
  selectedLanguage(),
  (substate) => substate.toJS()
);

export {
  makeSelectLocationState,
  makeSelectAppState,
  selectedLanguageState,
};
