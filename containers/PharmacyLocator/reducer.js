/*
 *
 * PharmacyLocator reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_PHARMACY,
  GET_PHARMACY_SUCCESS,
  GET_PHARMACY_FAIL,
  GET_PHARMACY_COPY,
} from './constants';

const initialState = fromJS({
  error: false,
  pharmacySearchPayload: null,
  pharmacySearchResponse: null,
  pharmacySearchResponseCopy: null,
});

function pharmacyLocatorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHARMACY:
      return state.merge({
        pharmacySearchPayload: action.pharmacySearchPayload, showErrorMessage: null,
      });
    case GET_PHARMACY_SUCCESS:
      return state.merge({
        pharmacySearchResponse: action.pharmacySearchResponse,
      });
    case GET_PHARMACY_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
      });
    case GET_PHARMACY_COPY:
      return state.merge({
        pharmacySearchResponseCopy: action.pharmacySearchResponseCopy,
      });
    default:
      return state;
  }
}

export default pharmacyLocatorReducer;
