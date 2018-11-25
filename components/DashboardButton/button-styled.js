import styled from 'styled-components';
// import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const ButtonStyled = styled.button`
    background:${colors.magellanwhite};
    color:${colors.magellanblue};
    border:1px solid ${colors.magellanblue};
    border-radius:1rem;
    min-width:222px;
    height:42px;
    margin:3em 0;
&.btn:hover{
  color:${colors.magellanwhite}!important;
  background:${colors.magellanblue};
}
    `;

export default ButtonStyled;
