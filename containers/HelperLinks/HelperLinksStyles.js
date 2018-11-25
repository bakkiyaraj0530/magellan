import styled from 'styled-components';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

const HelperLinks = styled.div`
.mag-helputil-container {
    font-size: 1.4rem;
    margin-top: 3.8rem;
    ${mobile.handheld`
        margin-top: 0;
    `}
    h1{
      font-weight: 300;
      font-size:3rem;
      letter-spacing:0;
      text-align: center;
      ${mobile.handheld`
          margin-top: 0;
      `}
    }
    .mag-helputil-con{
      margin-top: 5rem;
      padding: 0 16rem;
      ${tablet.handheld`
          padding: 0 6rem;
      `}
      ${mobile.handheld`
          padding: 0;
          margin-top: 3rem;
          text-align: center;
      `}
      .mag-helputil-subTxt{
        line-height:2.2rem;
      }
      .mag-helputil-leftbox{
        height: 34rem;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        padding: 0 2rem;
        ${mobile.handheld`
            padding: 0;
            border-left: none;
            border-right: none;
            height: auto;
            margin-bottom: 5rem;
        `}
      }
      .mag-helputil-rightbox{
        height: 34rem;
        border-right: 1px solid #e3e3e3;
        padding: 0 2.5rem;
        ${mobile.handheld`
            padding: 0;
            border-right: none;
            height: auto;
            margin-bottom: 5rem;
        `}
      }
      .mag-helputil-iconArea{
        a{
          margin-top: 3rem;
          display: block;
          text-decoration:none;
          outline:none;
          svg{
            width: 2.1rem;
            height: 2.1rem;
          }
        }
        span{
          font-weight: 500;
          font-size:1.4rem;
          color:#0077c8;
          letter-spacing:0;
          padding-left: 0.5rem;
          vertical-align: middle;
        }
      }
    }
}


`;
export default HelperLinks;
