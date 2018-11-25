import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';
import mapPin from '../../assets/icons/map-bubble.png';
import arrow from '../../assets/icons/arrow.svg';
import arrowDown from '../../assets/icons/arrowdown.svg';
import questionMark from './question.png';
const PharmacyResultsStyles = styled.ul`

.btn:hover, .btn:focus, .btn.focus{
  outline:none;
}

.active-filters{
  padding:0;
  margin-bottom: 15px;
}
.filter-items{
  font-size:1.3rem;
  font-weight:600;
  .clear-filter-item{
    font-size:2rem;
    color:${colors.magellanblue};
    margin:0;
    padding:0;
    vertical-align:baseline;
  }
  .btn:active, .btn.active{
    box-shadow: none;
  }
}
.active-filters-col{
  padding:0;
  h5{
    margin:0;
    font-weight:500;
  }
}
li{
    .row{
        border-bottom:2px solid #ECECEC;
        
    }
    list-style:none;
}
 .filter{
     border:none;
 }

 .list-col{
     padding:0;
 }
.pin { 
        width: 21px;
        height: 28px;
        background: url(${mapPin}) no-repeat;
        color: #FFF;
        font-weight:500;
        font-size: 1.2rem;
        line-height: 21px;
        text-align: center;
        display: inline-block;

}
 
h5{
    color:#000;
    margin-left: 13px;
    display: inline-block;
}

 .pharmacy-address{
    margin-left:35px;
    color:${colors.magellanblack};
 }


 .price-pharmacypage-con .pharmacy-btn-container .pharmacy-search-con label {
    position: absolute;
    margin-top: -20px;
    font-size: 1.2rem;
  }
  
  .price-pharmacypage-con .pharmacy-btn-container .pharmacy-search-con input {
    width: 180px;
    height: 35px;
    border: 2px solid #ECECEC;
    border-radius: 6px;
    outline: none;
    padding: 0 10px;
    font-size: 1.2rem;
  }
  
  .price-pharmacypage-con .pharmacy-btn-container .pharmacy-btn-Search {
    padding: 6px 36px;
    border-radius: 11px;
    background-color: #0077C8;
    color: #FFF;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-left: 20px;
  }
  
  {
    margin-top: 60px;
  }
  
  .pharmacy-sort-txt {
font-weight:500;
    font-size: 1.2rem;
    line-height: 16px;
    color:${colors.magellanblack};
  }
  .other-info-btn{
      padding:0;
      margin:0;
  }
  .dropdown-menu{
      margin-left:0px;
  }
.arrow{
    top:-21px;
    left:78%;
}
.btn-sort{
    margin:0;
    padding:0;
    border:none;
}
.btn[disabled]:hover, .btn[disabled]:focus, fieldset[disabled] .btn:hover, fieldset[disabled] .btn:focus{
color:${colors.magellan20black};
}
.btn[disabled], .btn[disabled], fieldset[disabled] .btn{
    color:${colors.magellan20black};
    border-color:${colors.magellan20black};
}
.btn-sort:focus, .btn-sort.focus, .btn-sort:active:focus, .btn-sort:active.focus, .btn-sort.active:focus, .btn-sort.active.focus{
    outline:none;
}

.btn-sort:hover, .btn-sort:focus{
    text-decoration: none;
}
.check-icon{
    margin-right:5px;
}
  .other-info-panel{
      background-color: ${colors.magellan3black};
      padding:0;
      display:none;
      .row{
          border:none;
      }
      p{
          font-weight:600;
      }
  }
  
  .pharmacy-distance-nearest {
    color: #0077C8;
font-weight:500;
    font-size: 1.5rem;
    line-height: 19px;
    margin-left: 10px;
  }
  .pharmacy-other-info{
    color: #0077C8;
font-weight:500;
    font-size: 1.3rem;
    line-height: 19px;
    margin-left: 10px;
  }
  .accarrow {
    width: 14px;
    height: 8px;
    display: inline-block;
    margin-left: 5px;
  }
  
  .down-arrow {
    background: url(${arrow}) no-repeat;
  }
  
  .up-arrow {
    background: url(${arrowDown}) no-repeat;
  }
  
  .pharmacy-btn-filter {
    height: 28px;
    width: 101px;
    border: 1px solid #0077C8;
    border-radius: 10px;
    background-color: #FFFFFF;
    color: #0077C8;
    font-size: 14px;
    line-height: 16px;
    outline: none;
    float: right;
    box-shadow: none;
  }
  
  .bottom-line {
    border-bottom: 2px solid #ECECEC;
    padding: 0;
    padding-bottom: 10px;
  }
  
  .bottom-line div {
    padding: 0;
  }
  
  .bottom-line div:first-child {
    margin-top: 10px;
  }
  
  .pharmacy-filter {
    border-bottom: 2px solid #ECECEC;
    padding: 10px 0;
    padding-bottom: 10px;
    display: none;
  }
  
  .pharmacy-filter div {
    padding: 0;
  }
  
  .pharmacy-filter label {
    font-size: 1.2rem;
  }
  
  .pharmacy-filter .pharmacy-name {
    height: 35px;
    width: 200px;
    border: 2px solid #ECECEC;
    border-radius: 6px;
    margin-left: 10px;
    outline: none;
    padding: 0 10px;
    color: #9B9B9B;
    font-weight:300;
    font-size: 1.2rem;
  }
  
  .pharmacy-filter .filter-star {
    margin-left: 5px;
    position: absolute;
    margin-top: -4px;
  }
  
  .pharmacy-filter .pharmacy-statimg-label {
    position: absolute !important;
    padding-left: 32px !important;
  }
  
  .pharmacy-filter .filter-radio {
    margin-top: 25px;
  }
  
  .pharmacy-filter .filter-radio p {
font-weight:500;
    font-size: 1.2rem;
    line-height: 16px;
    display: inline-block;
    padding-left: 0;
  }

  .pharmacy-filter .other-info {
      margin-top:20px;
  }
  
  .pharmacy-filter .other-info p {
font-weight:500;
    font-size: 1.2rem;
    line-height: 16px;
    padding-left: 0;
    display: inline-block;
  }
  
  .pharmacy-filter .other-info .pharmacy-question-img {
    width: 16px;
    height: 16px;
    background: url(${questionMark}) no-repeat;
    display: inline-block;
    margin-left: 10px;
    vertical-align: text-bottom;
  }
  
  .pharmacy-filter .other-info .filter-checkbox-con {
    margin-left: 76px;
  }
  
  .pharmacy-filter .other-info .filter-btns {
    text-align: right;
    margin-top: 25px;
  }
  
  .pharmacy-filter .other-info .filter-btns button {
font-weight:600;
    text-align: center;
    line-height: 19px;
    color: #0077C8;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    margin-bottom: 15px;
  }
  
  .pharmacy-filter .other-info .filter-btns button:first-child {
    margin-right: 25px;
  }

  
.checkbox {
    padding-left: 20px !important;
    outline: none;
  }
  
  .checkbox label {
    display: inline-block;
    position: relative;
    padding-left: 5px;
  }
  
  .checkbox label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    left: 0;
    margin-left: -20px;
    border: 1px solid #0077C8;
    border-radius: 3px;
    outline: none;
    background-color: #fff;
    -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
  }
  
  .checkbox label::after {
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    top: -2px;
    margin-left: -21px;
    padding-left: 3px;
    padding-top: 1px;
    font-size: 13px;
    outline: none;
    color: #555555;
  }
  
  .checkbox input[type="checkbox"] {
    opacity: 0;
  }
  
  .checkbox input[type="checkbox"]:checked+label::after {
    content: "\\2714";
  }
  
  .checkbox input[type="checkbox"]:disabled+label {
    opacity: 0.65;
  }
  
  .checkbox input[type="checkbox"]:disabled+label::before {
    background-color: #eeeeee;
    cursor: not-allowed;
  }
  
  .checkbox.checkbox-circle label::before {
    border-radius: 50%;
  }
  
  .checkbox.checkbox-inline {
    margin-top: 0;
  }
  
  .checkbox-primary input[type="checkbox"]:checked+label::before {
    background-color: #0074CB;
    border-color: #428bca;
  }
  
  .checkbox-primary input[type="checkbox"]:checked+label::after {
    color: #fff;
  }
  
  
  /* check box style end */
  
  
 
  
`;
export default PharmacyResultsStyles;
