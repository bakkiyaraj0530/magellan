/*
 *
 * DrugPrice actions
 *
 */

import {
  GET_DRUG_LIST,
  GET_DRUG_LISTS_SUCCESS,
  GET_DRUG_LISTS_FAIL,
  GET_DRUG_PRICE_INFO,
  GET_DRUG_PRICE_INFO_SUCCESS,
  GET_DRUG_PRICE_INFO_FAIL,
  GET_DRUG_PRICE_INFO_ACCORDION,
  GET_DRUG_SELECTED_DATA,
} from 'constants';

export function getDrugPricingList() {
  return {
    type: GET_DRUG_LIST,
  };
}
export function getDrugPricingListSuccess(drugListResponse) {
  return {
    type: GET_DRUG_LISTS_SUCCESS,
    drugListResponse,
  };
}
export function getDrugPricingListFailure(showErrorMessage) {
  return {
    type: GET_DRUG_LISTS_FAIL,
    showErrorMessage,
  };
}
export function getDrugPricingInfo(drug) {
  return {
    type: GET_DRUG_PRICE_INFO,
    drug,
  };
}
export function getDrugPricingInfoSuccess(drugInfoResponse, drugName) {
  return {
    type: GET_DRUG_PRICE_INFO_SUCCESS,
    drugInfoResponse,
    drugName,
  };
}
export function getDrugPricingInfoFailure(showErrorMessage) {
  return {
    type: GET_DRUG_PRICE_INFO_FAIL,
    showErrorMessage,
  };
}
export function setAccordionState(gsn) {
  return {
    type: GET_DRUG_PRICE_INFO_ACCORDION,
    payload: { gsn },
  };
}

export function getSelectedDrugData() {
  return {
    type: GET_DRUG_SELECTED_DATA,
  };
}
