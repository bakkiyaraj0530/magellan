import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setFeatures, setUserInfo } from './actions';
import { APP_GET_FEATURES, APP_GET_USERINFO } from './constants';
import { updateUserInfo, getUserInfoUrl } from '../../assets/js/oauth';


export function* featuresCallSaga() {
  yield takeLatest(APP_GET_FEATURES, getFeaturesSaga);
}

export function* getFeaturesSaga() {
  const featuresURL = '/features';
  const features = yield call(axios.get, featuresURL);
  try {
    yield put(setFeatures(features.data));
  } catch (err) {
    yield put(setFeatures({
      clientCode: 'common',
      businessLine: 'COMMERCIAL',
      env: 'qa-core',
    }));
  }
}

export function* userInfoCallSaga() {
  yield takeLatest(APP_GET_USERINFO, getUserInfoSaga);
}

export function* getUserInfoSaga() {
  const userURL = getUserInfoUrl(false);
  const user = yield call(axios.get, userURL);
  const userData = updateUserInfo(user);

  try {
    yield put(setUserInfo(userData));
  } catch (err) {
  //  console.log('saga error');
  }
}


export default [
  featuresCallSaga,
  userInfoCallSaga,
];
