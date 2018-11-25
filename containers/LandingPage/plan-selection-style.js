import styled from 'styled-components';
// import media from '../../components/HelperUtils/media-utils';
import colors from '../../components/HelperUtils/branding-colors';

const PlanSelectionContainer = styled.div`
a:focus {
  outline: none;
  text-decoration: none;
}

.price-drug-con {
  text-align: center;
  margin-top: 40px;
  h1 {
    color: #4A4A4A;
    font-size: 30px;
    line-height: 35px;
    font-weight: 300;
  }
  hr {
    border: 1px solid #E1E5E8;
    margin-top: 40px;
  }
  .price-search-con {
    margin: 0 auto;
    width: 100%;
    .price-search-input {
      width: 320px;
      height: 30px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid ${colors.magellanheaderblue};
      padding: 0 15px;
      outline: none;
      font-size: 16px;
    }
    input::placeholder {
      color: ${colors.magellanreturnblue};
      font-size: 14px;
      font-weight: 500;
      line-height: 19px;
    }
    .price-drug-fingtxt {
      color: #CDCBCB;
      font-size: 16px;
      font-style: italic;
      font-weight: 300;
      line-height: 25px;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 5px;
    }
    .price-drug-fingdis {
      color: #CDCBCB;
      font-size: 24px;
      font-style: italic;
      font-weight: 300;
      line-height: 25px;
      text-align: center;
    }
    .price-dashbtn-con{
      button{
        background-color: #0077C8;
        border-radius: 11px;
        padding: 6px 22px;
        outline: none;
      }
      button:active, button:hover{
        border-color: transparent !important;
      }
      .pharmacy-search-form-text{
          font-size:1.6rem;
          margin-top:5px;
          margin:0 25px;
          font-weight:500;
      }
      .Pharmacy-input-con{
        display: inline-block;
        vertical-align: bottom;
      }
      .location-icon{
        display: inline-block;
        width: 16px;
        margin-right: 10px;
      }
    }
  }
}

.find-pharmacy-con {
  margin-top: 60px;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.clearfix {
  height: 1%;
}

.clearfix {
  display: block;
}

`;

export default PlanSelectionContainer;
