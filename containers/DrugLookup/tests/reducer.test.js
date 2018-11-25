
import { fromJS } from 'immutable';
import drugLookupReducer from '../reducer';

describe('drugLookupReducer', () => {
  it('returns the initial state', () => {
    expect(drugLookupReducer(undefined, {})).toEqual(fromJS({}));
  });
});
