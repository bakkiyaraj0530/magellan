import React from 'react';
import { shallow } from 'enzyme';

import ContactForm from '../index';

describe('<ContactForm />', () => {
  const contactComponent = shallow(<ContactForm />);
  it('should render Alert without throwing', () => {
    const component = () => contactComponent;
    expect(component).not.toThrow();
  });
});
