
import { fromJS } from 'immutable';
import planSectionReducer from '../reducer';

describe('planSectionReducer', () => {
  it('returns the initial state', () => {
    expect(planSectionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
