import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { setClaimsHistory, setClaimMoreInfo, setClaimsHistoryVideoLookup } from './actions';
import { GET_CLAIMHISTORY_USER, CLAIMS_HISTORY_URL,
   GET_CLAIMHISTORY_EXTRA_INFO, CLAIMS_HISTORY_MORE_INFO_URL, CLAIMS_HISTORY_VUCA_VIDEO_URL } from './constants';

export function* getUserClaimHistory(action) {
  const { fromDate, toDate, memberId } = action.params;
  const url = CLAIMS_HISTORY_URL
    .replace('<fromDate>', fromDate)
    .replace('<toDate>', toDate)
    .replace('<memberId>', memberId);
  const headers = {
    headers: {
      Authorization: 'bearer 3013fc91-27a4-429d-b144-5ebb4e402639',
    },
  };
  const response = yield call(axios.get, url, headers);
  if (response && (response.data.isError === 'false')) {
    yield put(setClaimsHistory());
  }
  if (response && response.data && response.data.claimList) {
    yield put(setClaimsHistory(response.data.claimList));
    const ndcList = response.data && response.data.claimList.claim.map((obj) => {
      let productObj = {};
      productObj = obj.PRODUCT_ID;
      return productObj;
    });
    const data = {
      ndcList,
    };
    const videoresponse = yield call(axios.post, CLAIMS_HISTORY_VUCA_VIDEO_URL, data);
    yield put(setClaimsHistoryVideoLookup(videoresponse.data.vucaVideoList));
  }
}
export function* getUserMoreInfo(action) {
  const { healthServiceId } = action;
  const url = CLAIMS_HISTORY_MORE_INFO_URL
    .replace('<healthServiceId>', healthServiceId);
  const headers = {
    headers: {
      Authorization: 'bearer dc78ccda-ab11-4ee7-850b-08d8c330ea7d',
    },
  };
  const response = yield call(axios.get, url, headers);
  if (response && response.data) {
    yield put(setClaimMoreInfo(healthServiceId, response.data));
  }
}

export function* getUserClaimHistorySaga() {
  yield takeEvery(GET_CLAIMHISTORY_USER, getUserClaimHistory);
}
export function* getClaimMoreInfoSaga() {
  yield takeEvery(GET_CLAIMHISTORY_EXTRA_INFO, getUserMoreInfo);
}
// All sagas to be loaded
export default [
  getUserClaimHistorySaga,
  getClaimMoreInfoSaga,
];
