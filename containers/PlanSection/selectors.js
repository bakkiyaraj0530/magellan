/* eslint-disable */
import { createSelector } from 'reselect';

/**
 * Direct selector to the planSection state domain
 */
export const selectPlanSectionDomain = () => (state) => state.get('planSection');

/**
 * Other specific selectors
 */
export const selectPlanSectionreponsecussess = createSelector(
      selectPlanSectionDomain,
      // (state) => state.get('userResponse')
   );

/**
 * Default selector used by PlanSection
 */

export const makeSelectPlanSection = () => createSelector(
  selectPlanSectionDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPlanSection;
