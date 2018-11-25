/*
 *
 * Benefits reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_BENEFITS,
  GET_BENEFITS_SUCCESS,
  GET_BENEFITS_FAIL,
  GET_BENEFIT_LIMITS,
  GET_BENEFIT_LIMITS_SUCCESS,
  GET_BENEFIT_LIMITS_FAIL,
} from './constants';

const initialState = fromJS({
  error: false,
  benefitsPayload: null,
  benefitsResponse: null,
  benefitLimitsResponse: null,
});

function benefitsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BENEFITS:
      return state.merge({
        benefitsPayload: action.benefitsPayload, showErrorMessage: null,
      });
    case GET_BENEFITS_SUCCESS:
      return state.merge({
        benefitsResponse: action.benefitsResponse,
      });
    case GET_BENEFITS_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
        error: true,
      });
    case GET_BENEFIT_LIMITS:
      return state;
    case GET_BENEFIT_LIMITS_SUCCESS:
      return state.merge({
        benefitLimitsResponse: action.benefitLimitsResponse,
      });
    case GET_BENEFIT_LIMITS_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
        error: true,
      });
    default:
      return state;
  }
}

export default benefitsReducer;
