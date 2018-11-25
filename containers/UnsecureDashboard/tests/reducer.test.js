
import { fromJS } from 'immutable';
import unsecureDashboardReducer from '../reducer';

describe('unsecureDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(unsecureDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
