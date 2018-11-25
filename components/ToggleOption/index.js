/**
*
* ToggleOption
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';
import CheckIcon from './check-icon';

const LangListItem = styled.li`
  button{
    font-size:1.2rem;
    padding: 5px;
  }

`;
const ToggleOption = ({ value, message, intl, onClick, currentLang, name }) => (
  <LangListItem>
    <button className="btn-link" onClick={onClick} value={value}>
      {currentLang === value ? <CheckIcon title={`${name}-language-checkmark-icon-selected-${value}`} titleText="Check Mark Icon for Selected Language" fill="#509E2F" stroke="#509E2F" width="7" height="7" /> :
      <CheckIcon title={`${name}-language-checkmark-icon-not-selected-${value}`} titleText="Check Mark Icon for Un-Selected Language" fill="#D5D8DA" stroke="#D5D8DA" width="7" height="7" /> }
      &nbsp;&nbsp;&nbsp;{message ? intl.formatMessage(message) : value}
    </button>
  </LangListItem>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  onClick: PropTypes.func.isRequired,
  currentLang: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default injectIntl(ToggleOption);
