import { fromJS } from 'immutable';

import { APP_GET_FEATURES, APP_SET_FEATURES, APP_GET_USERINFO, APP_SET_USERINFO } from './constants';

const initialState = fromJS({
  featuresLoading: true,
  businessLine: '',
  client: '',
  userInfo: null,
  loadingUser: false,
});

function appReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case APP_GET_FEATURES:
      return state.set({ featuresLoading: true });
    case APP_SET_FEATURES:
    // action payload should contain businessLine and client
      newState = state.merge({
        featuresLoading: false,
        businessLine: action.features.businessLine,
        client: action.features.clientCode,
      });
      return newState;
    case APP_GET_USERINFO:
      return state.set({ loadingUser: true });
    case APP_SET_USERINFO:
      newState = state.merge({
        userInfo: action.user,
      });
      return newState;
    default:
      return state;
  }
}

export default appReducer;
