import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  const btnComponent = shallow(<Button />);
  it('should render Alert without throwing', () => {
    const component = () => btnComponent;
    expect(component).not.toThrow();
  });
});
