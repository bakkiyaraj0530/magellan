/*
 *
 * DrugLookup reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_DRUG_LIST,
  GET_DRUG_LISTS_SUCCESS,
  GET_DRUG_LISTS_FAIL,
  GET_DRUG_PRICE_INFO,
  GET_DRUG_PRICE_INFO_SUCCESS,
  GET_DRUG_PRICE_INFO_FAIL,
  GET_DRUG_PRICE_INFO_ACCORDION,
} from './constants';

const initialState = fromJS({
  error: false,
  drugListResponse: null,
  drugInfo: null,
});

function drugPriceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRUG_LIST:
      return state;
    case GET_DRUG_LISTS_SUCCESS:
      return state.merge({
        drugListResponse: action.drugListResponse,
      });
    case GET_DRUG_LISTS_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
      });
    case GET_DRUG_PRICE_INFO:
      return state.merge({
        hsn: action.drug.hsn, isLoading: true,
      });
    case GET_DRUG_PRICE_INFO_SUCCESS:
      return state.merge({
        drugInfo: action.drugInfoResponse, drugName: action.drugName, isLoading: false,
      });
    case GET_DRUG_PRICE_INFO_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage, drugName: action.drugName, isLoading: false,
      });
    case GET_DRUG_PRICE_INFO_ACCORDION: {
      const { gsn } = action.payload;
      const drugInfo = state.get('drugInfo').toJS();
      const drugInfoPrice = drugInfo && drugInfo.data.find((item) => item.gsn === gsn);
      drugInfoPrice.isCollapsed = !drugInfoPrice.isCollapsed;
      return state.merge({
        drugInfo,
      });
    }
    default:
      return state;
  }
}

export default drugPriceReducer;
