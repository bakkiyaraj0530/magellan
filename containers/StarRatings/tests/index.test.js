import React from 'react';
import { shallow } from 'enzyme';

import { StarRatings } from '../index';

describe('<StarRatings />', () => {
  const component = shallow(<StarRatings />);
  it('should render Forms without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
