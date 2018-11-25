import { createSelector } from 'reselect';

/**
 * Direct selector to the unsecureDashboard state domain
 */
const selectUnsecureDashboardDomain = () => (state) => state.get('unsecureDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UnsecureDashboard
 */

const makeSelectUnsecureDashboard = () => createSelector(
  selectUnsecureDashboardDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUnsecureDashboard;
export {
  selectUnsecureDashboardDomain,
};
