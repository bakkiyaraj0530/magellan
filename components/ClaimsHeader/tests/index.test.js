import React from 'react';
import { shallow } from 'enzyme';
import { DateRange } from 'react-date-range';

import ClaimsHeader from '../index';
import DownloadClaims from '../DownloadClaims';
import { DatePicker } from '../DatePicker';
import CheckMark from '../CheckMark';
import BenefitInformationIcon from '../DatePickerArrow';
import DownloadIcon from '../DownloadIcon';
import DatePickerUpArrow from '../DatePickerUpArrow';
const event = {
  target: {
    name: 'testName',
    value: 'testValue',
  },
  preventDefault: jest.fn(),
};
const claimsHistory = { claim: [{ dateOfService: '', drugName: '', serviceProvider: '' }] };
const actions = { getClaimsHistory: () => undefined };
const memberId = 'MM0011001';
describe('<ClaimsHeader />', () => {
  const claimComponent = shallow(<ClaimsHeader claimsHistory={claimsHistory} actions={actions} memberId={memberId} />);
  it('should render Alert without throwing', () => {
    const component = () => claimComponent;
    expect(component).not.toThrow();
  });
  it('should button click', () => {
    claimComponent.find('button').simulate('click');
  });

  it('should toggleDatePicker change', () => {
    claimComponent.setState({ toggleDatePicker: true });
  });
  it('should updatePicker change', () => {
    const simulateOnChange = claimComponent.find('DatePicker').at(0).prop('updatePicker');
    simulateOnChange(event);
  });
});
const claim = { claimsHistory: { claim: [{ id: '2', memberId: 'MM000111', copayAmount: 1.22, dateOfService: '12/12/2016', moreInfo: undefined }] } };
describe('<DownloadClaims />', () => {
  const downComponent = shallow(<DownloadClaims claimsHistory={claim} />);
  it('should render DownloadClaims without throwing', () => {
    const component = () => downComponent;
    expect(component).not.toThrow();
  });
  it('should button click', () => {
    downComponent.find('a').at(0).simulate('click', event);
  });
});
describe('<DownloadClaims /> without claimsHistory', () => {
  const downComponent = shallow(<DownloadClaims />);
  it('should render DownloadClaims without throwing', () => {
    const component = () => downComponent;
    expect(component).not.toThrow();
  });
});
describe('<CheckMark /> without claimsHistory', () => {
  const checkComponent = shallow(<CheckMark />);
  it('should render CheckMark without throwing', () => {
    const component = () => checkComponent;
    expect(component).not.toThrow();
  });
  it('should CheckMark render without throwing', () => {
    expect(
      checkComponent.find('svg').node
    ).toBeDefined();
  });
});
describe('<DownloadIcon /> without claimsHistory', () => {
  const downIconComponent = shallow(<DownloadIcon />);
  it('should render DownloadIcon without throwing', () => {
    const component = () => downIconComponent;
    expect(component).not.toThrow();
  });
  it('should DownloadIcon render without throwing', () => {
    expect(
      downIconComponent.find('svg').node
    ).toBeDefined();
  });
});
describe('<BenefitInformationIcon /> without claimsHistory', () => {
  const checkComponent = shallow(<BenefitInformationIcon />);
  it('should render CheckMark without throwing', () => {
    const component = () => checkComponent;
    expect(component).not.toThrow();
  });
  it('should CheckMark render without throwing', () => {
    expect(
      checkComponent.find('svg').node
    ).toBeDefined();
  });
});

describe('<DatePickerUpArrow /> without claimsHistory', () => {
  const checkComponent = shallow(<DatePickerUpArrow />);
  it('should render CheckMark without throwing', () => {
    const component = () => checkComponent;
    expect(component).not.toThrow();
  });
  it('should CheckMark render without throwing', () => {
    expect(
      checkComponent.find('svg').node
    ).toBeDefined();
  });
});

const noOfDays = 30;
describe('<DatePicker />', () => {
  const datePicComp = shallow(
    <DatePicker
      actions={actions}
      memberId={memberId}
      hideDatePicker={() => undefined}
      updatePicker={(val) => val}
      noOfDays={noOfDays}
    />);
  it('should render Alert without throwing', () => {
    const component = () => datePicComp;
    expect(component).not.toThrow();
  });
  it('should call onChange link', () => {
    datePicComp.find('input').at(0).simulate('change', event);
  });
  it('should call onBlur link', () => {
    datePicComp.find('input').at(0).simulate('blur', event);
  });
  it('should call onChange link', () => {
    datePicComp.find('input').at(1).simulate('change', event);
  });
  it('should call onBlur link', () => {
    datePicComp.find('input').at(1).simulate('blur', event);
  });
  it('should datePicComp 30 days change', () => {
    datePicComp.setState({ noOfDays: 30 });
    datePicComp.find('a').at(0).simulate('click', event);
  });
  it('should datePicComp 90 days change', () => {
    datePicComp.setState({ noOfDays: 90 });
    datePicComp.find('a').at(1).simulate('click', event);
  });
  it('should datePicComp 365 days change', () => {
    datePicComp.setState({ noOfDays: 365 });
    datePicComp.find('a').at(2).simulate('click', event);
  });
  it('should datePicComp 365 days change', () => {
    datePicComp.setState({ noOfDays: 10 });
  });
});

describe('<DateRange /> without claimsHistory', () => {
  const startDate = {};
  const endDate = {};
  const rangedCalendars = true;
  const dateRangeComp = shallow(
    <DateRange
      linkedCalendar
      startDate={startDate}
      endDate={endDate}
      onInit={() => undefined} //eslint-disable-line
      onChange={() => undefined} //eslint-disable-line
      theme={{
        Calendar: { width: 230 },
        PredefinedRanges: { marginLeft: 10, marginTop: 10 },
        DaySelected: { background: '#0074cb' },
        DayInRange: { background: '#E4F1F9', color: '#000' },
      }}
      rangedCalendars={rangedCalendars}
    />
  );
  it('should dateRangeComp init', () => {
    const simulateOnChange = dateRangeComp.props('onInit');
    simulateOnChange(event);
    expect(dateRangeComp.state('testName')).toBe('testValue');
  });
  it('should dateRangeComp onChange', () => {
    const simulateOnChange = dateRangeComp.props('onChange');
    simulateOnChange(event);
    expect(dateRangeComp.state('testName')).toBe('testValue');
  });
});
