import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { ClaimsHistory } from '../index';
const claimsHistory = { claim: {} };
const actions = { getClaimsHistory: () => undefined, sort: () => undefined };
describe('<ClaimsHistory />', () => {
  const component = shallow(<ClaimsHistory />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
});
describe('<ClaimsHistory /> with props', () => {
  const component = shallow(<ClaimsHistory claimsHistory={claimsHistory} actions={actions} />);
  it('should render Footer without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
  it('calls componentDidMount', () => {
    sinon.spy(ClaimsHistory.prototype, 'componentDidMount');
    mount(<ClaimsHistory />);
    expect(ClaimsHistory.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('calls componentDidMount', () => {
    sinon.spy(ClaimsHistory.prototype, 'componentDidMount');
    mount(<ClaimsHistory />);
    expect(ClaimsHistory.prototype.componentDidMount).to.have.property('callCount', 1);
    ClaimsHistory.prototype.componentDidMount.restore();
  });
});
