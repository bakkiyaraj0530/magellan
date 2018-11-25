import React from 'react';
import { shallow } from 'enzyme';

import { Forms } from '../index';

describe('<Forms />', () => {
  const component = shallow(<Forms />);
  it('should render Forms without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
  it('should call onClick appointment link', () => {
    component.setState({ mobBreakPoint: true });
    component.find('a').at(0).simulate('click');
  });
  it('should call onClick howtomake link', () => {
    component.setState({ mobBreakPoint: false });
    component.find('a').at(1).simulate('click');
  });
  it('should call onClick premiumpay link', () => {
    component.find('a').at(2).simulate('click');
  });
  it('should call onClick coverage link', () => {
    component.find('a').at(3).simulate('click');
  });
  it('should call onClick mailorder link', () => {
    component.find('a').at(4).simulate('click');
  });
  it('should call onClick prescription link', () => {
    component.find('a').at(5).simulate('click');
  });
  it('should call onClick enrollment link', () => {
    component.find('a').at(6).simulate('click');
  });
  it('should call onClick outofnetwork link', () => {
    component.find('a').at(7).simulate('click');
  });
  it('should call onClick quality link', () => {
    component.find('a').at(8).simulate('click');
  });
  it('should call onClick appointment button', () => {
    component.find('button').at(0).simulate('click');
  });
  it('should call onClick howtomake button', () => {
    component.find('button').at(1).simulate('click');
  });
  it('should call onClick premiumpay button', () => {
    component.find('button').at(2).simulate('click');
  });
  it('should call onClick coverage button', () => {
    component.find('button').at(3).simulate('click');
  });
  it('should call onClick mailorder button', () => {
    component.find('button').at(4).simulate('click');
  });
  it('should call onClick prescription button', () => {
    component.find('button').at(5).simulate('click');
  });
  it('should call onClick enrollment button', () => {
    component.find('button').at(6).simulate('click');
  });
  it('should call onClick outofnetwork button', () => {
    component.find('button').at(7).simulate('click');
  });
  it('should call onClick quality button', () => {
    component.find('button').at(8).simulate('click');
  });

  it('should call onClick backToTop link', () => {
    component.find('a').at(11).simulate('click');
  });

  it('should call onClick backToTop link', () => {
    component.find('a').at(16).simulate('click');
  });

  it('should call onClick backToTop link', () => {
    component.find('a').at(20).simulate('click');
  });

  it('should call onClick backToTop link', () => {
    component.find('a').at(27).simulate('click');
  });
  it('should call onClick backToTop link', () => {
    component.find('a').at(28).simulate('click');
  });
});
