import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';

import Toggle from '../index';
import FlagIcon from '../flag-icon';

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultDeMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Toggle values={['en', 'de']} messages={messages} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<Toggle values={['en', 'de']} messages={messages} />)).toBe(true);

    const ontoggle = () => undefined;
    const values = undefined;
    const noHeaderComponent = shallow(
      <Toggle
        values={values}
        isHeader="true"
        messages={messages}
        label=""
        name=""
        id=""
        value=""
        onToggle={ontoggle}
      />
    );
    const headComponent = () => noHeaderComponent;
    expect(headComponent).not.toThrow();
  });

  const flagComp = shallow(
    <FlagIcon
      className=""
      width=""
      height=""
      fill=""
      title=""
      titleText=""
      stroke=""
    />
  );
  it('should render FlagIcon', () => {
    const component = () => flagComp;
    expect(component).not.toThrow();
  });
  it('should Img render without throwing', () => {
    expect(
      flagComp.find('svg').node
    ).toBeDefined();
  });
});
