
import {
  defaultAction, getClaimsHistory, setClaimsHistory, datePickerRequest, getClaimHistoryMoreInfo, setClaimMoreInfo, setAccordionState, sort,
} from '../actions';
import {
  DEFAULT_ACTION, GET_CLAIMHISTORY_USER, SET_CLAIMS_HISTORY_DATA, DATE_RANGE_INPUT_REQUEST,
  GET_CLAIMHISTORY_EXTRA_INFO, CLAIM_HISTORY_MORE_INFO_RESPONSE, CLAIM_HISTORY_MORE_INFO_ACCORDION,
  CLAIM_HISTORY_SORT,
} from '../constants';

describe('ClaimsHistory actions', () => {
  it('has a type of DEFAULT_ACTION', () => {
    const expected = {
      type: DEFAULT_ACTION,
    };
    expect(defaultAction()).toEqual(expected);
  });
  it('has a type of GET_CLAIMHISTORY_USER', () => {
    const expected = {
      type: GET_CLAIMHISTORY_USER,
    };
    expect(getClaimsHistory()).toEqual(expected);
  });
  it('has a type of SET_CLAIMS_HISTORY_DATA', () => {
    const expected = {
      type: SET_CLAIMS_HISTORY_DATA,
    };
    expect(setClaimsHistory()).toEqual(expected);
  });
  it('has a type of DATE_RANGE_INPUT_REQUEST', () => {
    const expected = {
      type: DATE_RANGE_INPUT_REQUEST,
    };
    expect(datePickerRequest()).toEqual(expected);
  });
  it('has a type of GET_CLAIMHISTORY_EXTRA_INFO', () => {
    const expected = {
      type: GET_CLAIMHISTORY_EXTRA_INFO,
    };
    expect(getClaimHistoryMoreInfo()).toEqual(expected);
  });
  it('has a type of CLAIM_HISTORY_SORT', () => {
    const expected = {
      type: CLAIM_HISTORY_SORT,
    };
    expect(sort()).toEqual(expected);
  });
  it('has a type of CLAIM_HISTORY_MORE_INFO_RESPONSE', () => {
    const expected = {
      type: CLAIM_HISTORY_MORE_INFO_RESPONSE,
    };
    expect(setClaimMoreInfo()).toEqual(expected);
  });
  it('has a type of CLAIM_HISTORY_MORE_INFO_ACCORDION', () => {
    const expected = {
      type: CLAIM_HISTORY_MORE_INFO_ACCORDION,
    };
    expect(setAccordionState()).toEqual(expected);
  });
});
