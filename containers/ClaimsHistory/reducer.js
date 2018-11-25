/*
 *
 * ClaimsHistory reducer
 *
 */
// import moment from 'moment';
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GET_CLAIMHISTORY_USER, SET_CLAIMS_HISTORY_DATA, SET_CLAIMS_HISTORY_VUCA_VIDEO_DATA,
  GET_CLAIMHISTORY_EXTRA_INFO, CLAIM_HISTORY_MORE_INFO_RESPONSE,
  CLAIM_HISTORY_MORE_INFO_ACCORDION, CLAIM_HISTORY_SORT } from './constants';

const initialState = fromJS({
  claimsHistory: [],
});

function claimsHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLAIMHISTORY_USER:
      return state.merge({
        defaultdaterange: action.params, isclaimLoading: true, isErrMsg: false,
      });
    case SET_CLAIMS_HISTORY_DATA: {
      const claimsHistoryList = action.claimhistoryData;
      let isErrMsg = true;
      if (claimsHistoryList && claimsHistoryList.claim) {
        isErrMsg = false;
      }
      return state.merge({
        claimsHistory: action.claimhistoryData, isclaimLoading: false, isErrMsg,
      });
    }
    case SET_CLAIMS_HISTORY_VUCA_VIDEO_DATA:
      return state.merge({
        vucaVideoList: action.vucaVideoList, isclaimLoading: false,
      });
    case GET_CLAIMHISTORY_EXTRA_INFO:
      return state.merge({
        paramMoreinfo: action.paramMoreinfo, isVideoLoading: true,
      });
    case CLAIM_HISTORY_MORE_INFO_RESPONSE: {
      const { healthServiceId } = action.payload;
      const claimsHistory = state.get('claimsHistory').toJS();
      const claim = claimsHistory.claim.find((item) => item.healthServiceId === healthServiceId);
      claim.moreInfo = action.payload.response;
      claim.moreInfo.isCollapsed = false;
      return state.merge({
        claimsHistory, isVideoLoading: false,
      });
    }
    case CLAIM_HISTORY_MORE_INFO_ACCORDION: {
      const { healthServiceId } = action.payload;
      const claimsHistory = state.get('claimsHistory').toJS();
      const claim = claimsHistory.claim.find((item) => item.healthServiceId === healthServiceId);
      claim.moreInfo.isCollapsed = !claim.moreInfo.isCollapsed;
      return state.merge({
        claimsHistory, isVideoLoading: false,
      });
    }
    case CLAIM_HISTORY_SORT: {
      const { headerName, sorting } = action.payload;
      const claimsHistory = state.get('claimsHistory').toJS();
      claimsHistory.claim.sort((a, b) => {
        if (headerName === 'copayAmount') {
          return sorting ? (a.copayAmount - b.copayAmount) : (b.copayAmount - a.copayAmount);
        } else if (headerName === 'dateOfService') {
          const dt1 = new Date(a[headerName]);
          const dt2 = new Date(b[headerName]);
          return sorting ? new Date(dt1) - new Date(dt2) : new Date(dt2) - new Date(dt1);
        } else if (headerName !== 'copayAmount' && headerName !== 'dateOfService') {
          return sorting ? a[headerName].localeCompare(b[headerName]) : b[headerName].localeCompare(a[headerName]);
        }
        return 0;
      });
      // console.log('claimsHistory', headerName, claimsHistory);
      return state.merge({
        claimsHistory,
      });
    }
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default claimsHistoryReducer;
