import React from 'react';
import { shallow } from 'enzyme';

import ClaimsHistory from '../index';

describe('<ClaimsHistory />', () => {
  const claimComponent = shallow(<ClaimsHistory />);
  it('should render Alert without throwing', () => {
    const component = () => claimComponent;
    expect(component).not.toThrow();
  });
});
