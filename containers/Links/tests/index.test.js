import React from 'react';
import { shallow } from 'enzyme';

import { Links } from '../index';
import { ModalAlert } from '../../../components/ModalAlert';

const event = {
  target: {
    name: 'testName',
    value: 'testValue',
  },
  preventDefault: jest.fn(),
};
describe('<Links />', () => {
  const component = shallow(<Links />);
  it('should render Links without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
  it('should call onHide', () => {
    const simulateOnChange = component.find('ModalAlert').at(0).prop('onHide');
    simulateOnChange(event);
  });
  it('should call showLink', () => {
    const simulateOnChange = component.find('ModalAlert').at(0).prop('showLink');
    simulateOnChange(event);
  });
  it('should call onClick link', () => {
    component.find('a').at(0).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(1).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(2).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(3).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(4).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(5).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('a').at(6).simulate('click');
  });
});

describe('<ModalAlert />', () => {
  const showModal = false;
  const linkUrl = 'url';
  const component = shallow(
    <ModalAlert
      showModal={showModal}
      onHide={() => undefined}
      linkUrl={linkUrl}
      showLink={() => undefined}
    />
  );
  it('should render ModalAlert without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
  it('should call onClick link', () => {
    component.find('button').at(0).simulate('click');
  });
  it('should call onClick link', () => {
    component.find('button').at(1).simulate('click');
  });
});
