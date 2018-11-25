import styled from 'styled-components';
import { tabletlandscape } from '../HelperUtils/Media-query';

const ClaimsHistoryStyles = styled.div`
a:focus {
    outline: none;
    text-decoration: none;
}
.claim-info {
    text-align: center;
    padding: 0 18rem;
    padding-bottom: 2rem;
    ${tabletlandscape.handheld`
      padding:0.6rem;
    `}
    h2 {
        font-size:3rem;
        font-weight:300;
        line-height: 3rem;
        color: #000;
        padding: 0 0 1.5rem;
        margin: 0;
    }
    p {
        font-size:1.2rem;
        font-weight:300;
        line-height: 1.6rem;
        color: #6c6c6c;
        padding: 0;
        margin: 0 0 1rem 0;
        span {
            font-family: Ubuntu;
        }
        span.claim-reject {
            color: #ed8b00;
        }
        span.claim-denied {
            color: #c8102e;
        }
    }
}
.claim-tablepanel {
    padding: 0 8rem;
    font-size:1.4rem;
    font-weight:500;
    ${tabletlandscape.handheld`
      padding:0;
      margin-top: 3rem;
    `}
    a {
        color: #0074cb;
    }
    a:hover {
        text-decoration: none;
    }
}
.claim-range {
    float: left;
    img {
        margin-left: 0.5rem;
        height: auto;
    }
    a {
        color: #005398;
    }
    button{
        border: none;
        outline: none;
    }
    .mag-claim-rangeTxt{
      font-weight:500;
      font-size:1.4rem;
      color:#0074cb;
      margin:0 0.5rem 0 0;
    }
}
.claim-download {
    float: right;
    a[href] {
        color: #0074cb;
    }
    a {
        padding: 0 0 0 2.4rem;
        background-size: 2rem 1.5rem;
        color: #9B9B9B;
    }
    svg{
      width: 2rem;
      height: 1.8rem;
      margin-top: -0.5rem;
      margin-right: 0.5rem;
    }
}
.claim-download.inactive {
    float: right;
    a[href] {
        color: #9B9B9B;
    }
    a {
        background: url(../svg/download-innactive.svg) no-repeat;
        padding: 0 0 0 2.4rem;
        background-size: 2rem 1.5rem;
    }
}
.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
.clearfix { height: 1%; }
.clearfix { display: block; }
.mag-cursor-none { cursor:default;color:#9B9B9B !important;}
`;
export default ClaimsHistoryStyles;
