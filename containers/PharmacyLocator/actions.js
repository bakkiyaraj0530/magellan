/*
 *
 * PharmacyLocator actions
 *
 */
import {
  GET_PHARMACY,
  GET_PHARMACY_SUCCESS,
  GET_PHARMACY_FAIL,
  GET_PHARMACY_COPY,
} from './constants';

export function getPharmacy(pharmacySearchPayload) {
  return {
    type: GET_PHARMACY,
    pharmacySearchPayload,
  };
}
export function getPharmacySuccess(pharmacySearchResponse) {
  return {
    type: GET_PHARMACY_SUCCESS,
    pharmacySearchResponse,
  };
}
export function getPharmacyFailure(showErrorMessage) {
  return {
    type: GET_PHARMACY_FAIL,
    showErrorMessage,
  };
}
export function getPharmacyCopy(pharmacySearchResponseCopy) {
  return {
    type: GET_PHARMACY_COPY,
    pharmacySearchResponseCopy,
  };
}
