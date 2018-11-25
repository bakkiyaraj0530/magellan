/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './button-styled';

function Button(props) {
  return (
    <ButtonStyled className={`btn ${props.btnStyle}`} onClick={props.onClick} type={props.type} disabled={props.disabled}>
      {props.btnText}
    </ButtonStyled>
  );
}

Button.propTypes = {
  btnStyle: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  onClick: PropTypes.func,

};

export default Button;
