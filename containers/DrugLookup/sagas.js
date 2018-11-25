import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getDrugsSuccess, getDrugsFailure } from './actions';
import { GET_DRUGS } from './constants';

export function* getDrugList(action) {
  const requestURL = `/portalmicroservices/api/druglookup/${action.drugSearchPayload}`;

  try {
    const drugListResponse = yield call(axios.get, requestURL);
    if (drugListResponse.data && drugListResponse.data.isError === 'FALSE') {
      yield put(getDrugsSuccess(drugListResponse));
    } else {
      yield put(getDrugsFailure(drugListResponse));
    }
  } catch (err) {
    yield put(getDrugsFailure(err));
  }
}

function* registrationEverySaga() {
  yield takeLatest(GET_DRUGS, getDrugList);
}


export default [
  registrationEverySaga,
];
