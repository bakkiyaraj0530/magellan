import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../index';

describe('<Alert />', () => {
  const alertComponent = shallow(<Alert />);
  it('should render Alert without throwing', () => {
    const component = () => alertComponent;
    expect(component).not.toThrow();
  });
});
