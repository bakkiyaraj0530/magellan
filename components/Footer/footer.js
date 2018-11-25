import styled from 'styled-components';
import media from '../HelperUtils/media-utils';

const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  background-repeat: no-repeat;
  color: #fff;
  padding-top: 10px;
  border: 1px solid #e7e7e8;
  background-color: #121C1F;
  a {
    color: #C0C4C7 !important;
  }
  .magellan-footer-logo {
    float: right;
    ${media.desktop`float: right;`}
  }
  .magellan-footer-rights-reserved {
    float: right;
    ${media.desktop`float: right;`}
  }
`;

export default Footer;
