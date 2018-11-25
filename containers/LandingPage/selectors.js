import { createSelector } from 'reselect';

/**
 * Direct selector to the LandingPage state domain
 */
export const selectLandingPageDomain = () => (state) => state.get('landingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () => createSelector(
  selectLandingPageDomain(),
  (substate) => {
    const js = substate && substate.toJS();
    return js;
  }
);

export default makeSelectLandingPage;
