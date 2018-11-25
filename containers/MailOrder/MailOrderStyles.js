import styled from 'styled-components';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

const MailOrder = styled.div`
.mag-mailorder-container {
    font-size:1.4rem;
    ${mobile.handheld`
        margin-top: 0;
    `}
    a:focus{
      outline:none;
    }
    h1{
      font-weight: 300;
      font-size:3rem;
      letter-spacing:0;
      text-align: center;
      ${mobile.handheld`
          margin-top: 0;
      `}
    }
    .mag-mailorder-con{
      margin-top: 5rem;
      padding: 0 13.5rem;
      ${tablet.handheld`
          padding: 0 5.5rem;
      `}
      ${mobile.handheld`
          margin-top: 3rem;
          padding: 0;
      `}
      .mag-mailorder-leftbox{
        border-left: 1px solid #e3e3e3;
        height: 38rem;
        padding-left: 0;
        padding-right: 0;
        ${tablet.handheld`
            margin-bottom: 3rem;
        `}
        ${mobile.handheld`
          border-left: none;
          border-bottom: none;
          margin-top: 2rem;
          height: auto;
          border-bottom: 1px solid #e3e3e3;
          padding-bottom: 1.5rem;
        `}
        .mag-mailorder-header{
          font-size:1.2rem;
          font-weight: 700;
          color:#005398;
          letter-spacing:0;
          margin-bottom: 0;
          padding-left: 4.9rem;
          height: 4.8rem;
          line-height: 4.8rem;
          border-bottom: 1px solid #e3e3e3;
          ${tablet.handheld`
              padding-left: 1.8rem;
          `}
          ${mobile.handheld`
            padding-left: 2.8rem;
            border-bottom: none;
            height: auto;
            line-height: 1;
          `}
        }
      }
      .mag-mailorder-centerbox{
        border-right: 1px solid #e3e3e3;
        ${mobile.handheld`
          border-right: none;
        `}
      }
      .mag-mailorder-rightbox{
        border-right: 1px solid #e3e3e3;
        border-left: none;
        ${mobile.handheld`
          border-right: none;
        `}
      }
      .mag-mailorder-leftTxtbox{
        p{
          padding-left: 4.9rem;
          padding-right: 2rem;
          margin-bottom: 0;
          ${tablet.handheld`
              padding-left: 1.8rem;
          `}
          ${mobile.handheld`
              padding-left: 2.8rem;
          `}
        }
        .mag-mailorder-callus{
          font-size:1.2rem;
          font-weight: 400;
          line-height:2rem;
          margin-top: 2.7rem;
        }
        .mag-mailorder-faxus{
          font-size:1.2rem;
          font-weight: 400;
          line-height:2rem;
          margin-top: 3.8rem;
          ${mobile.handheld`
              margin-top: 2rem;
          `}
        }
        .mag-mailorder-number{
          font-size:2rem;
          font-weight: 400;
        }

        .mag-mailorder-app-badge{
          padding-left:4.9rem;
          margin-top:3rem;
          ${tablet.handheld`
              padding-left: 1.8rem;
          `}
          ${mobile.handheld`
              padding-left: 2.8rem;
          `}
        }
      }

    }
    .mobile-padding{
      ${mobile.handheld`
        padding-left: 0;
        padding-right: 0;
      `}
    }
}


`;
export default MailOrder;
