import styled from 'styled-components';
import { tablet, mobile } from '../HelperUtils/Media-query';

const DatePickerStyles = styled.div`
.mag-datepicker-box {
    position: absolute;
    background: #ffffff;
    border: 2px solid #e3e3e3;
    width: 585px;
    height: auto;
    margin-top: 30px;
    z-index: 1;
    ${tablet.handheld`
      margin-left: 0;
    `}
    ${mobile.handheld`
      width: 92%;
    `}
}
.mag-datepicker-box:after,
.mag-datepicker-box:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.mag-datepicker-box:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
    border-width: 10px;
    left: 28.6%;
}
.mag-datepicker-box:before {
    border-color: rgba(227, 227, 227, 0);
    border-bottom-color: #e3e3e3;
    border-width: 13px;
    left: 28%;
}
.isDay:before {
  left: 28%;
  ${mobile.handheld`
      left: 47.8%;
  `}
}
.isDay:after {
  ${mobile.handheld`
      left: 48.7%;
  `}
}
.isYear:before {
  left: 24.3%;
  ${mobile.handheld`
      left: 41.3%;
  `}
}
.isYear:after {
  left: 24.8%;
  ${mobile.handheld`
      left: 42%;
  `}
}
.isDateRange:before {
  left: 42%;
  ${mobile.handheld`
      left: 71.3%;
  `}
}
.isDateRange:after {
  left: 42.6%;
  ${mobile.handheld`
      left: 72.3%;
  `}
}
.mag-datepicker-con {
    margin-top: 10px;
    .mag-datepicker-ragTxt {
        font-weight:500;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
        text-align: left;
        width: 65%;
        float: left;
        padding-left: 17px;
        ${mobile.handheld`
          display: none;
        `}
    }
    .mag-datepicker-applyTxt {
        font-weight:500;
        font-size: 14px;
        color: #9b9b9b;
        letter-spacing: 0;
        width: 30%;
        float: left;
        ${mobile.handheld`
          float: none;
          width: 100%;
          text-align: right;
          padding: 0px 20px;
        `}
    }
}
.mag-datepicker-input{
  ${mobile.handheld`
    display: block;
  `}
  input{
    border:2px solid #ededed;
    border-radius:6px;
    width:121px;
    height:31px;
  }
  p{
    font-weight:500;
    font-size:12px;
    color:#000000;
    letter-spacing:0;
    line-height:12px;
  }
  .mag-datepicker-fromArea{
    width: 230px;
    display: inline-block;
    border-right: 1px solid rgb(237, 237, 237);
    margin-top: 25px;
    ${mobile.handheld`
      width: 155px;
      border-right: none;
    `}
    .datepicker-error-msg{
      position: absolute;
      padding: 3px 20px;
      color: #c8102e;
    }
  }
  .mag-datepicker-fromTxt{
    padding-left: 20px;
    margin-bottom: 5px;
  }
  .mag-datepicker-inputFrom{
    margin-left: 20px;
    padding: 0 10px;
  }
  .mag-datepicker-inputFrom::-webkit-input-placeholder {
    font-weight:300;
    font-size:12px;
    color:#9b9b9b;
    letter-spacing:0;
    padding-left: 10px;
  }
}
.mag-datepicker-rangeArea{
  width: 120px;
  float: right;
  margin-top: 15px;
  ${mobile.handheld`
    margin-top: 0;
    float: left;
    width: 100%;
    margin-bottom: 15px;
    display: block;
  `}
  div{
      padding: 10px;
      ${mobile.handheld`
        padding: 10px 25px;
      `}
      svg{
        width: 10px;
        height: 10px;
        margin-bottom: 3px;
        margin-right: 5px;
      }
  }
}
.rdr-PredefinedRanges{
  float: right;
  margin-top: -50px !important;
  width: auto !important;
  a{
      background: none !important;
      font-weight:500;
      font-size:14px;
      color:#0074cb !important;
      padding: 5px 14px !important;
      text-align: left;
  }
}
.rdr-Calendar{
  border-right: 1px solid #ededed;
  padding:15px 9px !important;
  ${mobile.handheld`
    border-right: none;
  `}
}
.rdr-MonthAndYear-month{
  font-weight:500;
  font-size:14px;
  margin-right: 5px;
}
.rdr-MonthAndYear-year{
  font-size:14px;
  font-weight:500;
}
.rdr-DateRange{
  margin-bottom: 15px;
  ${mobile.handheld`
    display: inline-block !important;
  `}
}
.rdr-MonthAndYear-divider{
  display: none;
}
}
.check-mark-show {
  opacity: 1;
}
.check-mark-hide {
  opacity: 0;
}
`;
export default DatePickerStyles;
