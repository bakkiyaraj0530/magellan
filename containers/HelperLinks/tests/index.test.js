import React from 'react';
import { shallow } from 'enzyme';

import { HelperLinks } from '../index';
import ModalAlert from '../../../components/ModalAlert';
import AdobeIcon from '../AdobeIcon';
import ChromeIcon from '../ChromeIcon';
import FirefoxIcon from '../FirefoxIcon';
import IEIcon from '../IEIcon';
import MicrosoftIcon from '../MicrosoftIcon';
import OperaIcon from '../OperaIcon';

const event = {
  target: {
    name: 'testName',
    value: 'testValue',
  },
  preventDefault: jest.fn(),
};
describe('<HelperLinks />', () => {
  const component = shallow(<HelperLinks />);
  it('should render HelperLinks without throwing', () => {
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
  it('should call onClick link', () => {
    component.find('a').at(7).simulate('click');
  });
  const adobeComponent = shallow(
    <AdobeIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      adobeComponent.find('svg').node
    ).toBeDefined();
  });
  const chromeComponent = shallow(
    <ChromeIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      chromeComponent.find('svg').node
    ).toBeDefined();
  });
  const firefoxComponent = shallow(
    <FirefoxIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      firefoxComponent.find('svg').node
    ).toBeDefined();
  });
  const iEIconComponent = shallow(
    <IEIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      iEIconComponent.find('svg').node
    ).toBeDefined();
  });
  const microsoftComponent = shallow(
    <MicrosoftIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      microsoftComponent.find('svg').node
    ).toBeDefined();
  });
  const operaComponent = shallow(
    <OperaIcon />
  );
  it('should AdobeIcon render without throwing', () => {
    expect(
      operaComponent.find('svg').node
    ).toBeDefined();
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
