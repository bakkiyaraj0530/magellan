import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';
import { mobile, tablet } from '../HelperUtils/Media-query';

const ContactFormStyles = styled.form`
      .max-characters{
        color:#6c6c6c;
        padding-top:10px;
      }
      .submit-btn{
        color:${colors.magellanwhite};
        border-radius:11px!important;
        width:130px!important;
        font-size:1.5rem;
        text-transform:uppercase;
      }
      .enable-submit-btn{
        background-color:${colors.magellanblue};
      }
       .submit-btn.btn.disabled, .submit-btn.btn[disabled], .submit-btnfieldset[disabled] .submit-btn.btn{
        background-color:${colors.magellan30black};
        color:${colors.magellanwhite};
        border-radius:11px!important;
        width:130px!important;
        font-size:1.5rem;
       }
       .form-control{
         font-size: 12px !important;
       }
       .clear-btn{
         font-weight:500;
         font-size:1.5rem;
         color:${colors.magellanblue};
         margin-left: 25px;
         padding: 0;
         ${tablet.handheld`
           margin-top: 25px;
           width: 100%;
           margin-left: 0;
         `}
       }
       .btn-link[disabled]:hover{
         color:${colors.magellanblue};
       }
       .mag-contactInfoTable{
         ${tablet.handheld`
           padding: 0 50px;
         `}
       }
       .mag-center{
          display: inline-block;
         ${mobile.handheld`
           text-align: center;
           display: block;
         `}
         ${tablet.handheld`
           text-align: center;
           display: block;
         `}
       }
       .mag-contact-indi{
         margin-left:120px;
         ${tablet.handheld`
           margin-left: 0;
         `}
         ${mobile.handheld`
           margin-left: 0;
         `}
       }
       .mag-contact-form{
         ${mobile.handheld`
           padding-right: 0 !important;
         `}
         .form-group{
           margin-bottom: 25px;
           ${tablet.handheld`
             margin-bottom: 15px;
           `}
         }
         .has-error .form-control{
           border-color: #ccc !important;
         }
         .text-danger{
           color:#d0011b !important;
         }
         p{
           text-align: left;
         }
         .control-label{
           ${tablet.handheld`
                text-align: left;
                margin-bottom: 10px;
           `}
         }
       }
       textarea{
         resize: none;
         width: 340px;
         ${mobile.handheld`
           width: 100%;
         `}
         ${tablet.handheld`
           width: 100%;
         `}
       }
`;
export default ContactFormStyles;
