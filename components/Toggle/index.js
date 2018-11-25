/**
*
* LocaleToggle
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ToggleOption from '../ToggleOption';
import DropDown from '../DropDown';
import messages from './messages';
import CaretIcon from '../Navbar/caret-icon';
function closeNav() {
  if (document.getElementById('mySidenav')) {
    document.getElementById('mySidenav').style.borderRight = '1px solid #FFF';
    document.getElementById('mySidenav').style.width = '0';
  }
}
function Toggle(props) {
  let content = (<option onClick={closeNav()}>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <ToggleOption key={value} value={value} message={props.messages[value]} onClick={props.onToggle} currentLang={props.value} name={props.id} />
    ));
  }
  function openDropdown(e) {
    e.preventDefault();
    const dropdown = document.getElementById(props.id);
    if (props.isHeader) {
      if (dropdown.className.includes('open')) {
        const tmpClass = dropdown.className.replace('open', '');
        dropdown.className = tmpClass;
      } else {
        const tmpClass = `${dropdown.className} open`;
        dropdown.className = tmpClass;
      }
    } else {
      const dropdownCaret = `${props.id}-caret`;
      const dropdownCaretClass = document.getElementById(dropdownCaret);
      if (dropdown.className.includes('open')) {
        const tmpClass = dropdown.className.replace('open', '');
        dropdownCaretClass.setAttribute('class', 'caret-icon');
        dropdown.className = tmpClass;
      } else {
        const tmpClass = `${dropdown.className} open`;
        dropdownCaretClass.setAttribute('class', 'caret-icon-flipped');
        dropdown.className = tmpClass;
      }
    }
  }

  return (
    <li id={props.id} className={`dropdown ${props.className}`}>
      <a href="" id={`${props.id}-link`} onClick={openDropdown} aria-haspopup="true" aria-expanded="false">
        <FormattedMessage {...messages.language} />
        {!props.isHeader && <CaretIcon id="mobile-lang-toggle-caret" title="mobile-lang-toggle-caret-title" titleText="Caret Icon" fill="#0077C8" stroke="transparent" width="18" height="10" className="caret-icon" />}
      </a>
      <DropDown className="dropdown-menu" aria-labelledby={`${props.id}-link`} langtoggle>
        <div className="arrow hidden-sm hidden-xs"></div>
        {content}
      </DropDown>
    </li>
  );
}

Toggle.propTypes = {
  values: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  isHeader: PropTypes.bool.isRequired,
};

export default Toggle;
