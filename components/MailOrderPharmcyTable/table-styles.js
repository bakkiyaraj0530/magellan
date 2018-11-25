import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const MailOrderTable = styled.div`

     #mailOrderTable {

     >div{
       &.col-sm-4{
                  min-height:125px;
       padding: 0;
       border-left:1px solid ${colors.magellan5black};
       }

     }
     >div:last-child {
         &.col-sm-4{
             border-right:1px solid ${colors.magellan5black};
         }
      
     }

     .mailorder-info-header {
       padding-left: 20px;
       padding-right:20px;
       border-bottom: 1px solid ${colors.magellan5black};
       h5{color:${colors.magellanblack};}
     }


    .mailorder-info-body {
      padding-left: 20px;
      padding-right:20px;

    }


    ${media.tablet`
      > div{
        min-height:100px;
        padding:0;
                 &.col-sm-4{
             border-right:1px solid ${colors.magellan5black};
         
        }
    `}

        ${media.phone`
      > div{
        min-height:100px;
        padding:0;
                 &.col-sm-4{
             border-right:1px solid ${colors.magellan5black};
         
        }
    `}
  }


`;

export default MailOrderTable;
