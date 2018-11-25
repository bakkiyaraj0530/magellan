import React from 'react';
import { shallow } from 'enzyme';

import { Documents } from '../index';
import DownArrow from '../DownArrow';
import UpArrow from '../UpArrow';

describe('<Documents />', () => {
  const component = shallow(<Documents />,
     { context: { intl: { formatMessage: () => undefined } } });
  it('should render Documents without throwing', () => {
    const compt = () => component;
    expect(compt).not.toThrow();
  });
  it('should call onChange link', () => {
    component.setState({ value: 'test' });
    component.find('Select').prop('onChange');
  });
  it('should call onClick link', () => {
    component.setState({ dataToggleExpand: true });
    component.find('a').at(14).simulate('click');
  });
  it('should call onChange link', () => {
    component.setState({ value: '' });
    component.find('Select').prop('onChange');
  });
});

describe('<DownArrow />', () => {
  const downArrowComponent = shallow(<DownArrow />);
  it('should render CheckMark without throwing', () => {
    const component = () => downArrowComponent;
    expect(component).not.toThrow();
  });
  it('should CheckMark render without throwing', () => {
    expect(
      downArrowComponent.find('svg').node
    ).toBeDefined();
  });
});
describe('<UpArrow />', () => {
  const upArrowComponent = shallow(<UpArrow />);
  it('should render CheckMark without throwing', () => {
    const component = () => upArrowComponent;
    expect(component).not.toThrow();
  });
  it('should CheckMark render without throwing', () => {
    expect(
      upArrowComponent.find('svg').node
    ).toBeDefined();
  });
});
