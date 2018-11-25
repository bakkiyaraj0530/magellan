/*
 *
 * DrugPrice actions
 *
 */

import {
  GET_DRUG_LIST,
  GET_DRUG_LISTS_SUCCESS,
  GET_DRUG_LISTS_FAIL,
  GET_DRUG_SELECTED_DATA,
  GET_PHARMACY_SELECTED_DATA,
} from './constants';

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
export function setSelectedDrugData(drug) {
  return {
    type: GET_DRUG_SELECTED_DATA,
    payload: { drug },
  };
}
export function setSelectedPharmacyData(pharmacy) {
  return {
    type: GET_PHARMACY_SELECTED_DATA,
    payload: { pharmacy },
  };
}
