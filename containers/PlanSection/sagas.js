/* eslint-disable */
import { put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
// import { PLAN_SELECTION_REQUEST } from 'constants';
import { PlanselectionSuccess } from './actions';
console.log('saga OUTT');
// Individual exports for testing
export function* planselectionInfo(action) {
  // See example in containers/HomePage/sagas.js
  console.log('saga INNER', action.plandetails);
  yield put(PlanselectionSuccess(action.plandetails));
  yield put(stopSubmit('planselection'));
}

function* planselectionInfoSaga() {
  yield takeLatest('app/PlanSection/PLAN_SELECTION_REQUEST', planselectionInfo);
}
// All sagas to be loaded
export default [
  planselectionInfoSaga,
];
