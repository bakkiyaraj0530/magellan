import { createSelector } from 'reselect';

/**
 * Direct selector to the claimsHistory state domain
 */
export const selectClaimsHistoryDomain = () => (state) => state.get('claimsHistory');

/**
 * Other specific selectors
 */
export const selectClaimHistoryUserreponsecussess = createSelector(
    selectClaimsHistoryDomain,
 );

/**
 * Default selector used by ClaimsHistory
 */

export const makeSelectClaimsHistory = () => createSelector(
  selectClaimsHistoryDomain(),
  (substate) => {
    const js = substate.toJS();
   // console.log('js', js);
    if (js && js.isclaimLoading) {
      const claimsHistory = {
        isclaimLoading: js.isclaimLoading,
        isErrMsg: js.isErrMsg,
        isVideoLoading: js.isVideoLoading,
        // vucaVideoList: js.vucaVideoList,
      };
      return claimsHistory;
    }
    if (js && !js.isclaimLoading) {
      const claimsHistory = {
        claimsHistory: js.claimsHistory,
        isclaimLoading: js.isclaimLoading,
        vucaVideoList: js.vucaVideoList,
        isErrMsg: js.isErrMsg,
        isVideoLoading: js.isVideoLoading,
      };
      return claimsHistory;
    }
    if (js && js.claimsHistory) {
      return js.claimsHistory;
    }
    return {};
  }
);

export default makeSelectClaimsHistory;
