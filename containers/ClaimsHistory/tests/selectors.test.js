import { fromJS } from 'immutable';
import makeSelectClaimsHistory, { selectClaimsHistoryDomain, selectClaimHistoryUserreponsecussess } from '../selectors';

const selector = selectClaimsHistoryDomain();

describe('makeSelectClaimsHistoryDomain', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {
        claimsHistory: {
          claim: [],
        },
        isclaimLoading: false,
      },
    });
    const mockedState = fromJS({
      claimsHistory: homeState,
    });
    expect(selector(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectForgotPasswordPage', () => {
  const usernameSelector = makeSelectClaimsHistory();
  it('should select the isclaimLoading true', () => {
    const homeState = {
      claimsHistory: {
        claim: [],
      },
      isclaimLoading: true,
    };
    const mockedState = fromJS({
      claimsHistory: homeState,
    });
    expect(usernameSelector(mockedState)).toEqual(homeState);
  });
  it('should select the isclaimLoading false', () => {
    const homeState = {
      claimsHistory: {
        claim: [],
      },
      isclaimLoading: false,
    };
    const mockedState = fromJS({
      claimsHistory: homeState,
    });
    expect(usernameSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectForgotPasswordreponsecussess', () => {
  const usernameSelector = selectClaimHistoryUserreponsecussess();
  it('should select the username', () => {
    const homeState = fromJS({
      userData: {
        claimsHistory: {
          claim: [],
        },
        isclaimLoading: false,
      },
    });
    const mockedState = fromJS({
      claimsHistory: homeState,
    });
    expect(usernameSelector(mockedState)).toEqual(homeState);
  });
});
