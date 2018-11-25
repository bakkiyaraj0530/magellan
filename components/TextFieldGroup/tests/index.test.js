import React from 'react';
import { shallow } from 'enzyme';

import TextFieldGroup from '../index';

describe('<TextFieldGroup />', () => {
  const component = shallow(<TextFieldGroup />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
