import { APP_GET_FEATURES, APP_SET_FEATURES, APP_GET_USERINFO, APP_SET_USERINFO } from './constants';

export function getFeatures() {
  return {
    type: APP_GET_FEATURES,
  };
}

export function setFeatures(features) {
  return {
    type: APP_SET_FEATURES,
    features,
  };
}

export function getUserInfo() {
  return {
    type: APP_GET_USERINFO,
  };
}

export function setUserInfo(user) {
  return {
    type: APP_SET_USERINFO,
    user,
  };
}

