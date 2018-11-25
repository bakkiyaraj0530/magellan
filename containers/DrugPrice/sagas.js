import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getDrugPricingListSuccess, getDrugPricingListFailure, getDrugPricingInfoSuccess, getDrugPricingInfoFailure } from './actions';
import { GET_DRUG_LIST, GET_DRUG_PRICE_INFO } from './constants';

export function* getList() {
  const requestURL = '/commercialMedDJavaservices/api/drugLookupAutoComplete/drugList?businessLine=';

  try {
    const drugListResponse = yield call(axios.get, requestURL);
    if (drugListResponse.data) {
      yield put(getDrugPricingListSuccess(drugListResponse));
    } else {
      yield put(getDrugPricingListFailure(drugListResponse));
    }
  } catch (err) {
    yield put(getDrugPricingListFailure(err));
  }
}
export function* getDrugInfo(payload) {
  const requestURL = `/commercialMedDJavaservices/api/drugLookupAutoComplete/drugDetailsHSN?businessLine=&hsn=${payload.drug.hsn}`;
  const drugName = payload.drug.drugName;
  try {
    const drugInfoResponse = yield call(axios.get, requestURL);
    if (drugInfoResponse.data) {
      yield put(getDrugPricingInfoSuccess(drugInfoResponse, drugName));
    } else {
      yield put(getDrugPricingInfoFailure(drugInfoResponse, drugName));
    }
  } catch (err) {
    yield put(getDrugPricingInfoFailure(err));
  }
}

function* registrationEverySaga() {
  yield takeLatest(GET_DRUG_LIST, getList);
  yield takeLatest(GET_DRUG_PRICE_INFO, getDrugInfo);
}


export default [
  registrationEverySaga,
];
