/*
 *
 * LandingPage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_DRUG_LIST,
  GET_DRUG_LISTS_SUCCESS,
  GET_DRUG_LISTS_FAIL,
  GET_DRUG_SELECTED_DATA,
  GET_PHARMACY_SELECTED_DATA,
} from './constants';

const initialState = fromJS({
  error: false,
  drugListResponse: null,
  drugInfo: null,
});

function landingPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRUG_LIST:
      return state.merge({
        isLoading: true, isErrMsg: false,
      });
    case GET_DRUG_LISTS_SUCCESS:
      return state.merge({
        drugListResponse: action.drugListResponse, isLoading: false, isErrMsg: false,
      });
    case GET_DRUG_LISTS_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage, isLoading: false, isErrMsg: true,
      });
    case GET_DRUG_SELECTED_DATA: {
      const { drug } = action.payload;
      return state.merge({
        drug,
      });
    }
    case GET_PHARMACY_SELECTED_DATA: {
      const { pharmacy } = action.payload;
      return state.merge({
        pharmacy,
      });
    }
    default:
      return state;
  }
}

export default landingPageReducer;
