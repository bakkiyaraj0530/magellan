/*
 *
 * DrugLookup actions
 *
 */

import {
  GET_DRUGS,
  GET_DRUGS_SUCCESS,
  GET_DRUGS_FAIL,
} from './constants';

export function getDrugs(drugSearchPayload) {
  return {
    type: GET_DRUGS,
    drugSearchPayload,
  };
}
export function getDrugsSuccess(drugSearchResponse) {
  return {
    type: GET_DRUGS_SUCCESS,
    drugSearchResponse,
  };
}
export function getDrugsFailure(showErrorMessage) {
  return {
    type: GET_DRUGS_FAIL,
    showErrorMessage,
  };
}
