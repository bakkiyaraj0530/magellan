import React from 'react';
import { shallow } from 'enzyme';

import ClaimsDetails from '../index';
const event = {
  target: {
    name: 'testName',
    value: 'testValue',
  },
  preventDefault: jest.fn(),
};
const claim = { claimsHistory: { claim: [{ id: '2', memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2016', moreInfo: undefined }] } };
describe('<ClaimsDetails />', () => {
  const claimComponent = shallow(<ClaimsDetails claimsHistory={claim} />,
     { context: { intl: { formatMessage: () => undefined } } });
  it('should render Alert without throwing', () => {
    const component = () => claimComponent;
    expect(component).not.toThrow();
  });
});
const claimsHistory = { claimsHistory: { claim: [{ memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2015', moreInfo: { isCollapsed: true }, id: '1', CLAIM_STATUS: 'Paid' }] } };
describe('<ClaimsDetails />', () => {
  const claimComponent = shallow(<ClaimsDetails claimsHistory={claimsHistory} />,
     { context: { intl: { formatMessage: () => undefined } } });
  it('should render Alert without throwing', () => {
    const component = () => claimComponent;
    expect(component).not.toThrow();
  });

  it('should call onClick link', () => {
    claimComponent.find('a').at(0).simulate('click', event);
  });
  it('should call onClick link', () => {
    const history = { claimsHistory: { claim: [{ memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2015', moreInfo: { isCollapsed: false }, id: '1', CLAIM_STATUS: 'Paid' }] } };
    claimComponent.setProps({ claimsHistory: history });
    claimComponent.find('a').at(1).simulate('click', event);
  });
  it('should call onClick link', () => {
    const history = { claimsHistory: { claim: [{ memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2015', moreInfo: undefined, id: '1', CLAIM_STATUS: 'Paid' }] } };
    claimComponent.setProps({ claimsHistory: history });
    claimComponent.find('a').at(2).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(3).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(4).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(5).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(6).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(7).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(8).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(9).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(10).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(11).simulate('click', event);
  });
  it('should call onClick link', () => {
    claimComponent.find('a').at(12).simulate('click', event);
  });
});
