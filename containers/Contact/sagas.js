import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { sendContactEmailFailure, sendContactEmailSuccess } from './actions';
import { SEND_CONTACT_EMAIL } from './constants';

export function* sendContactEmail(action) {
  const requestURL = '/portalmicroservices/memberCorrespondance/submitForm';
  const requestData = action.contactFormPayload;
  try {
    const contactFormResponse = yield call(axios.post, requestURL, requestData);
    if (contactFormResponse.status === 200) {
      yield put(sendContactEmailSuccess(contactFormResponse));
    } else {
      yield put(sendContactEmailFailure(contactFormResponse));
    }
  } catch (err) {
    yield put(sendContactEmailFailure(err));
  }
}

function* registrationEverySaga() {
  yield takeLatest(SEND_CONTACT_EMAIL, sendContactEmail);
}


export default [
  registrationEverySaga,
];
