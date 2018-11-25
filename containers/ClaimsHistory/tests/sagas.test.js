/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, put } from 'redux-saga/effects';
import {
  getUserClaimHistory,
  getUserMoreInfo,
  getUserClaimHistorySaga,
  getClaimMoreInfoSaga,
} from '../sagas';
import { setClaimsHistory, setClaimMoreInfo } from '../actions';
import {
  GET_CLAIMHISTORY_USER,
  GET_CLAIMHISTORY_EXTRA_INFO,
  CLAIMS_HISTORY_URL,
  CLAIMS_HISTORY_MORE_INFO_URL,
} from '../constants';
const response = {
  data: { claimList: {} },
};
const claimAction = {
  params: {
    fromDate: '',
    toDate: '',
    memberId: '',
  },
};
describe('getUserClaimHistory Saga', () => {
  let getReposGenerator;
  const url = CLAIMS_HISTORY_URL;
  beforeEach(() => {
    getReposGenerator = getUserClaimHistory(claimAction);

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(response).value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the setClaimsHistory action if it requests the data successfully', () => {
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(setClaimsHistory(response.data.claimList)));
    expect(url).toEqual(url);
  });

  it('should call the setClaimsHistory action if the response errors', () => {
    const respon = {
      data: { isError: false },
    };
    const putDescriptor = getReposGenerator.next(respon).value;
    expect(putDescriptor).toEqual(put(setClaimsHistory()));
  });

  it('should call the setClaimsHistory action if the response errors', () => {
    const res = {
      data: {},
    };
    const putDescriptor = getReposGenerator.next(res).value;
    expect(putDescriptor).toEqual(put(setClaimsHistory()));
  });
});
describe('getUserClaimHistory Saga', () => {
  let getReposGenerator;
  const respon = {
    data: { isError: 'false' },
  };
  const url = CLAIMS_HISTORY_URL;
  beforeEach(() => {
    getReposGenerator = getUserClaimHistory(claimAction);

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(respon).value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the setClaimsHistory action if it requests the data successfully', () => {
    const putDescriptor = getReposGenerator.next(respon).value;
    expect(putDescriptor).toEqual(put(setClaimsHistory(respon.data.claimList)));
    expect(url).toEqual(url);
  });

  it('should call the setClaimsHistory action if the response errors', () => {
    const putDescriptor = getReposGenerator.next(respon).value;
    expect(putDescriptor).toEqual(put(setClaimsHistory()));
  });
});

const userMoreInfo = {
  payload: {
    healthServiceId: '',
  },
};
describe('getUserMoreInfo Saga', () => {
  let getReposGenerator;
  beforeEach(() => {
    getReposGenerator = getUserMoreInfo(userMoreInfo);

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(response).value;
    expect(callDescriptor).toMatchSnapshot();
  });
  const url = CLAIMS_HISTORY_MORE_INFO_URL;
  it('should dispatch the setClaimsHistory action if it requests the data successfully', () => {
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(setClaimMoreInfo(response.data.claimList)));
    expect(url).toEqual(url);
  });

  it('should call the setClaimsHistory action if the response errors', () => {
    const respon = { data: {} };
    const putDescriptor = getReposGenerator.next(respon).value;
    expect(putDescriptor).toEqual(put(setClaimMoreInfo()));
  });
});

describe('getUserMoreInfo Saga', () => {
  let getReposGenerator;
  beforeEach(() => {
    getReposGenerator = getUserMoreInfo(userMoreInfo);

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next({}).value;
    expect(callDescriptor).toMatchSnapshot();
  });
  const url = CLAIMS_HISTORY_MORE_INFO_URL;
  it('should dispatch the setClaimsHistory action if it requests the data successfully', () => {
    const putDescriptor = getReposGenerator.next({}).value;
    expect(putDescriptor).toEqual(put(setClaimMoreInfo(response.data)));
    expect(url).toEqual(url);
  });

  it('should call the setClaimsHistory action if the response errors', () => {
    const respon = { data: {} };
    const putDescriptor = getReposGenerator.next(respon).value;
    expect(putDescriptor).toEqual(put(setClaimMoreInfo()));
  });
});
describe('getUserClaimHistorySaga Saga', () => {
  const getUserClaimSaga = getUserClaimHistorySaga();
  it('should start task to watch for GET_CLAIMHISTORY_USER action', () => {
    const takeLatestDescriptor = getUserClaimSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_CLAIMHISTORY_USER, getUserClaimHistory));
  });
});

describe('getClaimMoreInfoSaga Saga', () => {
  const getUserClaimSaga = getClaimMoreInfoSaga();
  it('should start task to watch for GET_CLAIMHISTORY_EXTRA_INFO action', () => {
    const takeLatestDescriptor = getUserClaimSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_CLAIMHISTORY_EXTRA_INFO, getUserMoreInfo));
  });
});
