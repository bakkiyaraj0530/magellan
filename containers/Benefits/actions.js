/*
 *
 * Benefits actions
 *
 */

import {
  GET_BENEFITS,
  GET_BENEFITS_SUCCESS,
  GET_BENEFITS_FAIL,
  GET_BENEFIT_LIMITS,
  GET_BENEFIT_LIMITS_SUCCESS,
  GET_BENEFIT_LIMITS_FAIL,
} from './constants';

export function getBenefits() {
  return {
    type: GET_BENEFITS,
  };
}
export function getBenefitsSuccess(benefitsResponse) {
  return {
    type: GET_BENEFITS_SUCCESS,
    benefitsResponse,
  };
}
export function getBenefitsFailure(showErrorMessage) {
  return {
    type: GET_BENEFITS_FAIL,
    showErrorMessage,
  };
}
export function getBenefitLimits() {
  return {
    type: GET_BENEFIT_LIMITS,
  };
}
export function getBenefitLimitsSuccess(benefitLimitsResponse) {
  return {
    type: GET_BENEFIT_LIMITS_SUCCESS,
    benefitLimitsResponse,
  };
}
export function getBenefitLimitsFailure(showErrorMessage) {
  return {
    type: GET_BENEFIT_LIMITS_FAIL,
    showErrorMessage,
  };
}
