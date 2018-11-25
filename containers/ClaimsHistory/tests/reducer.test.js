
import { fromJS } from 'immutable';
import claimsHistoryReducer from '../reducer';
import {
  DEFAULT_ACTION, GET_CLAIMHISTORY_USER, SET_CLAIMS_HISTORY_DATA, DATE_RANGE_INPUT_REQUEST,
  GET_CLAIMHISTORY_EXTRA_INFO, CLAIM_HISTORY_MORE_INFO_RESPONSE,
  CLAIM_HISTORY_MORE_INFO_ACCORDION, CLAIM_HISTORY_SORT } from '../constants';
const claimsHistory = { claim: [{ healthServiceId: 'test', memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2015', moreInfo: { isCollapsed: true }, id: '1', CLAIM_STATUS: 'Paid' }] };
describe('claimsHistoryReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      claimsHistory,
    });
  });
  it('returns the initial state', () => {
    expect(claimsHistoryReducer(undefined, { claimsHistory })).toEqual(fromJS({ claimsHistory }));
  });
  it('returns the DEFAULT_ACTION state', () => {
    const reducer = claimsHistoryReducer(state, { type: DEFAULT_ACTION });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the GET_CLAIMHISTORY_USER state', () => {
    const reducer = claimsHistoryReducer(state, { type: GET_CLAIMHISTORY_USER });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the SET_CLAIMS_HISTORY_DATA state', () => {
    const reducer = claimsHistoryReducer(state, { type: SET_CLAIMS_HISTORY_DATA, claimhistoryData: { claimsHistory } });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the DATE_RANGE_INPUT_REQUEST state', () => {
    const reducer = claimsHistoryReducer(state, { type: DATE_RANGE_INPUT_REQUEST });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the GET_CLAIMHISTORY_EXTRA_INFO state', () => {
    const reducer = claimsHistoryReducer(state, { type: GET_CLAIMHISTORY_EXTRA_INFO, paramMoreinfo: {} });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the CLAIM_HISTORY_MORE_INFO_RESPONSE state', () => {
    const reducer = claimsHistoryReducer(state, { type: CLAIM_HISTORY_MORE_INFO_RESPONSE, payload: { healthServiceId: 'test', response: { isCollapsed: true } } });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the CLAIM_HISTORY_MORE_INFO_ACCORDION state', () => {
    const reducer = claimsHistoryReducer(state, { type: CLAIM_HISTORY_MORE_INFO_ACCORDION, payload: { healthServiceId: 'test', response: { isCollapsed: true } } });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the CLAIM_HISTORY_SORT state', () => {
    const reducer = claimsHistoryReducer(state, { type: CLAIM_HISTORY_SORT, payload: { headerName: 'copayAmount', sorting: '' } });
    expect(reducer.userpayload).toBe(undefined);
  });
  it('returns the CLAIM_HISTORY_SORT state', () => {
    const reducer = claimsHistoryReducer(state, { type: CLAIM_HISTORY_SORT, payload: { headerName: 'dateOfService', sorting: '' } });
    expect(reducer.userpayload).toBe(undefined);
  });
});
