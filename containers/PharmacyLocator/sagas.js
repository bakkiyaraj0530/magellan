// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getPharmacySuccess, getPharmacyFailure, getPharmacyCopy } from './actions';
import { GET_PHARMACY } from './constants';

export function* getPharmacyList(action) {
  const requestURL = '/portalmicroservices/public/pharmacy/pharmacylist';
  const requestData = { params: {
    zip: action.pharmacySearchPayload.zipCode,
    distance: action.pharmacySearchPayload.distance === undefined ? '5' : action.pharmacySearchPayload.distance,
    state: action.pharmacySearchPayload.state === undefined ? '' : action.pharmacySearchPayload.state,
    city: action.pharmacySearchPayload.city === undefined ? '' : action.pharmacySearchPayload.city,
    address: action.pharmacySearchPayload.street === undefined ? '' : `${action.pharmacySearchPayload.streetNumber} ${action.pharmacySearchPayload.street}`,
    pharmacyname: '',
    delivery: '',
    driveThru: '',
    eprescriptions: '',
    extendedDay: '',
    indianHealth: '',
    homeInfusion: '',
    longTermCare: '',
    mailOrder: '',
    retail: '',
    open24hrs: '' } };

  try {
    const pharmacyListResponse = yield call(axios.get, requestURL, requestData);
    if (pharmacyListResponse.data && pharmacyListResponse.data.isError === 'FALSE') {
      yield put(getPharmacySuccess(pharmacyListResponse.data));
      yield put(getPharmacyCopy(pharmacyListResponse.data));
    } else {
      yield put(getPharmacyFailure(pharmacyListResponse.data));
    }
  } catch (err) {
    yield put(getPharmacyFailure(err));
  }
}

function* registrationEverySaga() {
  yield takeLatest(GET_PHARMACY, getPharmacyList);
}

export default [
  registrationEverySaga,
];
