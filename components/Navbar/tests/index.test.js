import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../index';

describe('<Navbar />', () => {
  const component = shallow(<Navbar />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
