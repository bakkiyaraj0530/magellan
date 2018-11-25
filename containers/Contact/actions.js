/*
 *
 * Contact actions
 *
 */

import {
  SEND_CONTACT_EMAIL,
  SEND_CONTACT_EMAIL_SUCCESS,
  SEND_CONTACT_EMAIL_FAIL,
} from './constants';

export function sendContactEmail(contactFormPayload) {
  return {
    type: SEND_CONTACT_EMAIL,
    contactFormPayload,
  };
}
export function sendContactEmailSuccess(contactFormResponse) {
  return {
    type: SEND_CONTACT_EMAIL_SUCCESS,
    contactFormResponse,
  };
}
export function sendContactEmailFailure(showErrorMessage) {
  return {
    type: SEND_CONTACT_EMAIL_FAIL,
    showErrorMessage,
  };
}
