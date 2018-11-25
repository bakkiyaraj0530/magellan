import { createSelector } from 'reselect';

/**
 * Direct selector to the pharmacyLocator state domain
 */
const selectPharmacyLocatorDomain = () => (state) => state.get('pharmacyLocator');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PharmacyLocator
 */

const makeSelectPharmacyLocator = () => createSelector(
  selectPharmacyLocatorDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPharmacyLocator;
export {
  selectPharmacyLocatorDomain,
};
