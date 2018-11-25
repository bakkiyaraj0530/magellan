import React from 'react';
import { shallow } from 'enzyme';

import Form from '../index';

describe('<Form />', () => {
  const component = shallow(<Form />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
