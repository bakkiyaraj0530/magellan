/* eslint-disable */
/*
 *
 * PlanSection reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, PLAN_SELECTION_REQUEST, PLAN_SELECTION_SUCCESS, PLAN_SELECTION_FAILED } from 'constants';
const initialState = fromJS({});

function planSectionReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case PLAN_SELECTION_REQUEST:
      return state.merge({
        plandetails: action.plandetails,
      });
    case PLAN_SELECTION_SUCCESS:
      return state.merge({
        plandetailsResponse: action.plandetailsResponse,
      });
    case PLAN_SELECTION_FAILED:
      return state.merge({
        error: action.plandetailsmessage,
      });
    default:
      return state;
  }
}

export default planSectionReducer;
