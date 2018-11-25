import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getDrugPricingListSuccess, getDrugPricingListFailure } from './actions';
import { GET_DRUG_LIST } from './constants';

export function* getList() {
  const requestURL = '/commercialMedDJavaservices/api/drugLookupAutoComplete/drugList?businessLine=';
  try {
    const drugListResponse = yield call(axios.get, requestURL);
    if (drugListResponse.data) {
      yield put(getDrugPricingListSuccess(drugListResponse.data));
    } else {
      yield put(getDrugPricingListFailure(drugListResponse));
    }
  } catch (err) {
    yield put(getDrugPricingListFailure(err));
  }
}

function* registrationEverySaga() {
  yield takeLatest(GET_DRUG_LIST, getList);
}


export default [
  registrationEverySaga,
];
