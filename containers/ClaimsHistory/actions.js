/*
 *
 * ClaimsHistory actions
 *
 */

import {
  DEFAULT_ACTION, GET_CLAIMHISTORY_USER, SET_CLAIMS_HISTORY_DATA, SET_CLAIMS_HISTORY_VUCA_VIDEO_DATA,
  GET_CLAIMHISTORY_EXTRA_INFO, CLAIM_HISTORY_MORE_INFO_RESPONSE, CLAIM_HISTORY_MORE_INFO_ACCORDION,
  CLAIM_HISTORY_SORT,
} from './constants';

export function getClaimsHistory(params) {
  return {
    type: GET_CLAIMHISTORY_USER,
    params,
  };
}

export function setClaimsHistory(claimhistoryData) {
  return {
    type: SET_CLAIMS_HISTORY_DATA,
    claimhistoryData,
  };
}

export function setClaimsHistoryVideoLookup(vucaVideoList) {
  return {
    type: SET_CLAIMS_HISTORY_VUCA_VIDEO_DATA,
    vucaVideoList,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getClaimHistoryMoreInfo(healthServiceId) {
  return {
    type: GET_CLAIMHISTORY_EXTRA_INFO,
    healthServiceId,
  };
}

export function setClaimMoreInfo(healthServiceId, response) {
  return {
    type: CLAIM_HISTORY_MORE_INFO_RESPONSE,
    payload: { healthServiceId, response },
  };
}

export function setAccordionState(healthServiceId) {
  return {
    type: CLAIM_HISTORY_MORE_INFO_ACCORDION,
    payload: { healthServiceId },
  };
}

export function sort(headerName, sorting) {
  return {
    type: CLAIM_HISTORY_SORT,
    payload: { headerName, sorting },
  };
}
