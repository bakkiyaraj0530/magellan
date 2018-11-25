/**
*
* Button
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import ButtonStyled from './button-styled';

function DashboardButton(props) {
  const onClick = () => {
    const link = props.btnLink;
    browserHistory.push(link);
  };
  return (
    <ButtonStyled className="btn" type={props.type} onClick={onClick} disabled={props.disabled} href={props.btnLink}>
      {props.btnText}
    </ButtonStyled>
  );
}

DashboardButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  btnLink: PropTypes.string.isRequired,
};

DashboardButton.defaultProps = {
  disabled: false,
};

export default DashboardButton;
