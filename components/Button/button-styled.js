import styled from 'styled-components';
// import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const ButtonStyled = styled.button`
&.btn.disabled, &.btn[disabled], &fieldset[disabled] &.btn {
    background-color: ${colors.magellan20black};
    opacity: 1;
    border-color:${colors.magellan20black};
  }

  &.btn-link[disabled]{
    background-color:transparent;
    border:none;
  }

    `;

export default ButtonStyled;
