import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';
import { tablet, mobile } from '../HelperUtils/Media-query';

const ContactInfoTable = styled.div`
margin-bottom:5rem;
margin-top:5rem;
${tablet.handheld`
  padding: 0 50px;
`}
${mobile.handheld`
  padding: 0;
  margin-top: 30px;
`}
     #contactInfoTable {
     >div {
       min-height: 325px;
       padding: 0;
       border-left:1px solid ${colors.magellan5black};
       margin-bottom: 100px;
     }
     >div:last-child {
       border-right:1px solid ${colors.magellan5black};
       ${mobile.handheld`
         border-right:none;
       `}
     }
     >div:first-child {
       border-left: none
     }
     .contact-info-header {
       padding-left: 20px;
       padding-right:20px;
       padding-top: 10px;
       border-bottom: 1px solid ${colors.magellan5black};
       min-height: 42px;
       ${mobile.handheld`
         border-bottom: none;
         border-top: 1px solid ${colors.magellan5black};
         padding-top: 10px;
       `}
       >h4 {
         font-size: 1.2rem;
         font-weight: 700;
         text-transform: uppercase;
         margin: 0;
       }
     }
     .mag-contact-btm{
       ${tablet.handheld`
         margin-bottom: 40px;
       `}
       ${mobile.handheld`
         margin-bottom: 20px;
       `}
     }
     .mag-tablet-line{
       ${tablet.handheld`
         border-right:1px solid ${colors.magellan5black};
       `}
       ${mobile.handheld`
         border-right:none;
       `}
     }
    .contact-info-body {
      padding-left: 15px;
      padding-right:15px;
      ${mobile.handheld`
        padding-left: 20px;
        padding-right:20px;
      `}
      h5 {
        padding-top: 15px;
        font-weight: 400;
        font-size: 1.2rem;
        color:${colors.magellanblack};
        line-height: 20px;
        margin-bottom: 0;
      }
      p {
        font-size: 2.0rem;
        font-weight:400;
        margin-bottom: 5px;
        &.contact-address {
          font-size: 1.4rem;
        }
      }
    }


    ${media.tablet`
      > div{
        min-height:350px;
        padding:0;
        border-left:1px solid ${colors.magellan5black};
        }
    `}

        ${media.phone`
      > div{
        min-height:100px;
        padding:0;
        border-left:none;
        }
    `}
  }


`;

export default ContactInfoTable;
