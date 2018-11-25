import { createSelector } from 'reselect';

/**
 * Direct selector to the drugPrice state domain
 */
const selectDrugPriceDomain = () => (state) => state.get('drugPrice');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DrugPrice
 */

const makeSelectDrugPrice = () => createSelector(
  selectDrugPriceDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDrugPrice;
export {
  selectDrugPriceDomain,
};
