
import { fromJS } from 'immutable';
import pharmacyLocatorReducer from '../reducer';

describe('pharmacyLocatorReducer', () => {
  it('returns the initial state', () => {
    expect(pharmacyLocatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
