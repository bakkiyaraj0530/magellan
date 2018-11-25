import styled from 'styled-components';
import { mobile } from '../HelperUtils/Media-query';
// import media from '../HelperUtils/media-utils';
// import colors from '../HelperUtils/branding-colors';

const IdForm = styled.div`
    position: relative;
    margin: auto;
    margin: 0 auto;
    float: none;
    font-size: 1.4rem;
    margin-bottom:15px;
    div{
        margin-top:1rem;
        ${mobile.handheld`
            text-align: right;
        `}
    }

    .id-text{
        margin-left:4rem;
    }
    .id-label{
        font-weight:700;
    }
    .id-text-pcn{
        margin-left:3.6rem;
    }
    button{
      background-color:#005398 !important;
      border-radius:15px !important;
      color: #fff;
      outline: none !important;
    }
    button:focus{
      color: #fff;
    }
    button:nth-child(1):hover{
      color: #fff !important;
    }
    button:nth-child(2){
      background-color:#d3d3d3 !important;
      border-radius:20px !important;
      color: #000;
    }
    .pull-xs-left{
      ${mobile.handheld`
          float: left !important;
      `}
    }
`;

export default IdForm;
