import styled from 'styled-components';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

const HelperLinks = styled.div`
.mag-links-container {
    ${mobile.handheld`
        margin-top: 0;
    `}
    h1{
      font-weight: 300;
      font-size:2.500em;
      letter-spacing:0;
      text-align: center;
      margin: 0;
    }
    .mag-links-con{
      margin-top: 50px;
      padding: 0 56px;
      ${tablet.handheld`
          padding: 0 55px;
      `}
      ${mobile.handheld`
          padding: 0;
          margin-top: 30px;
          text-align: center;
      `}
      .mag-links-subTxt{
        line-height:22px;
        font-size:1.167em;
      }
      .mag-links-leftbox{
        height: 340px;
        border-left: 1px solid #e3e3e3;
        padding: 0 25px;
        ${tablet.handheld`
            padding: 0;
            border-left: none;
            height: auto;
            margin-bottom: 50px;
            text-align: center;
        `}
        ${mobile.handheld`
            padding: 0;
            border-left: none;
            border-right: none;
            height: auto;
            margin-bottom: 30px;
        `}
        a{
          font-weight: 500;
          font-size:1.167em;
          color:#0077c8;
          letter-spacing:0;
          margin-bottom: 0;
          padding: 15px 0;
          display: block;
          outline:none;
          text-decoration:none;
        }
        a:first-child{
          padding-top: 0;
        }
      }
      .mag-links-centerbox{
        height: 340px;
        border-left: 1px solid #e3e3e3;
        padding: 0 20px;
        ${mobile.handheld`
            padding: 0;
            border-left: none;
            height: auto;
            margin-bottom: 0;
        `}
        ${tablet.handheld`
            height: 145px;
        `}
        a{
          font-weight: 500;
          font-size:1.167em;
          color:#0077c8;
          letter-spacing:0;
          margin-bottom: 0;
          padding: 20px 0;
          display: block;
          outline:none;
          text-decoration:none;
        }
      }
      .mag-links-rightbox{
        height: 340px;
        border-right: 1px solid #e3e3e3;
        border-left: 1px solid #e3e3e3;
        padding: 0 25px;
        ${mobile.handheld`
            padding: 0;
            border-right: none;
            border-left: none;
            height: auto;
            margin-bottom: 30px;
        `}
        ${tablet.handheld`
            height: 145px;
            padding: 0 15px;
        `}
        a{
          font-weight: 500;
          font-size:1.167em;
          color:#0077c8;
          letter-spacing:0;
          margin-bottom: 0;
          padding: 20px 0;
          display: block;
          outline:none;
          text-decoration:none;
        }
      }
    }
}


`;
export default HelperLinks;
