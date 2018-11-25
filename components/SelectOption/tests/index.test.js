import React from 'react';
import { shallow } from 'enzyme';

import SelectOption from '../index';

describe('<SelectOption />', () => {
  const component = shallow(<SelectOption />);
  it('should render SelectOption without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
