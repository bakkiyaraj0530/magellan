/*
 *
 * DrugLookup reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_DRUGS,
  GET_DRUGS_SUCCESS,
  GET_DRUGS_FAIL,
} from './constants';

const initialState = fromJS({
  error: false,
  drugSearchPayload: null,
  drugSearchResponse: null,
});

function drugLookupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRUGS:
      return state.merge({
        drugSearchPayload: action.drugSearchPayload, showErrorMessage: null,
      });
    case GET_DRUGS_SUCCESS:
      return state.merge({
        drugSearchResponse: action.drugSearchResponse,
      });
    case GET_DRUGS_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
      });
    default:
      return state;
  }
}

export default drugLookupReducer;
