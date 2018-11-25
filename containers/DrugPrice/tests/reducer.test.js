
import { fromJS } from 'immutable';
import drugPriceReducer from '../reducer';

describe('drugPriceReducer', () => {
  it('returns the initial state', () => {
    expect(drugPriceReducer(undefined, {})).toEqual(fromJS({}));
  });
});
