import React from 'react';
import { shallow } from 'enzyme';

import StateDropdown from '../index';

describe('<StateDropdown />', () => {
  const component = shallow(<StateDropdown />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
