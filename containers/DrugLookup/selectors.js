import { createSelector } from 'reselect';

/**
 * Direct selector to the drugLookup state domain
 */
const selectDrugLookupDomain = () => (state) => state.get('drugLookup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DrugLookup
 */

const makeSelectDrugLookup = () => createSelector(
  selectDrugLookupDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDrugLookup;
export {
  selectDrugLookupDomain,
};
