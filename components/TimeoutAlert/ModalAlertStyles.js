import styled from 'styled-components';
import { mobile } from '../HelperUtils/Media-query';

const ModalAlertStyles = styled.div`
.mag-modal-closeImg{
    width: 100%;
    height: 15px;
  img{
    width: 12px;
    height: 12px;
    float: right;
    cursor: pointer;
  }
}
.mag-modal-content{
  h3{
    font-weight:500;
    font-size:20px;
    color:#005398;
    letter-spacing:0;
    line-height:27px;
    text-align:center;
    margin: 15px 0 20px 0;
  }
  p{
    font-family:Ubuntu;
    font-size:14px;
    color:#000000;
    letter-spacing:0;
    line-height:24px;
    text-align:center;
    margin-bottom: 40px;
  }
  .mag-button-area{
      text-align: center;
      margin-bottom: 30px;
      div{
        display: inline-block;
        ${mobile.handheld`
            display: block;
        `}
      }
    .mag-modal-okBtn{
      background:#0077c8;
      border-radius:11px;
      width:130px;
      height:34px;
      color: #fff;
      outline: none;
      border: none;
      font-size: 14px;
      font-weight: 300;
    }
    .mag-modal-cancelBtn{
      font-weight:500;
      font-size:14px;
      color:#0077c8;
      outline: none;
      border: none;
      background: none;
      margin-left: 25px;
      ${mobile.handheld`
          margin-left: 0;
          margin-top: 25px;
      `}
    }
  }
}
`;
export default ModalAlertStyles;
