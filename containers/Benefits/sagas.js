import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getBenefitsSuccess, getBenefitsFailure, getBenefitLimitsSuccess, getBenefitLimitsFailure } from './actions';
import { GET_BENEFITS, GET_BENEFIT_LIMITS } from './constants';
import { formatDate } from '../../components/HelperUtils/date-format';
export function* getBenefits() {
  const requestURL = '/portalmicroservices/api/member/accums';

  try {
    const benefitsResponse = yield call(axios.get, requestURL);
    if (benefitsResponse.data && benefitsResponse.data.isError === false) {
      yield put(getBenefitsSuccess(benefitsResponse));
    } else {
      yield put(getBenefitsFailure(benefitsResponse));
    }
  } catch (err) {
    yield put(getBenefitsFailure(err));
  }
}

export function* getBenefitLimits() {
  const requestURL = '/benefitslimit/api/meddlimits';
  const requestData = {
    planEffectiveDate: formatDate(new Date()),
    planID: 'MEDD',
  };
  try {
    const benefitLimitsResponse = yield call(axios.post, requestURL, requestData);
    if (benefitLimitsResponse.data) {
      yield put(getBenefitLimitsSuccess(benefitLimitsResponse));
    } else if (benefitLimitsResponse.data && benefitLimitsResponse.data.isError) {
      yield put(getBenefitLimitsFailure(benefitLimitsResponse));
    }
  } catch (err) {
    yield put(getBenefitLimitsFailure(err));
  }
}


function* benefitEverySaga() {
  yield takeLatest(GET_BENEFITS, getBenefits);
}

function* benefitEverySagaLimit() {
  yield takeLatest(GET_BENEFIT_LIMITS, getBenefitLimits);
}

export default [
  benefitEverySaga,
  benefitEverySagaLimit,
];
