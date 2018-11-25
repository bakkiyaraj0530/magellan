/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_CONTACT_EMAIL,
  SEND_CONTACT_EMAIL_SUCCESS,
  SEND_CONTACT_EMAIL_FAIL,
} from './constants';

const initialState = fromJS({
  contactFormPayload: null,
  showErrorMessage: null,
  contactFormResponse: null,
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CONTACT_EMAIL:
      return state.merge({
        contactFormPayload: action.contactFormPayload, showErrorMessage: null,
      });
    case SEND_CONTACT_EMAIL_SUCCESS:
      return state.merge({
        contactFormResponse: action.contactFormResponse,
      });
    case SEND_CONTACT_EMAIL_FAIL:
      return state.merge({
        showErrorMessage: action.showErrorMessage,
      });
    default:
      return state;
  }
}

export default contactReducer;
