import React from 'react';
import { shallow } from 'enzyme';

import { MailOrder } from '../index';

describe('<MailOrder />', () => {
  const component = shallow(<MailOrder />);
  it('should render Forms without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
