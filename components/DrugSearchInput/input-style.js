import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';

const InputStyle = styled.div`
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
  .react-autosuggest__container{
    display: inline-block;
  }
  .pharmacy-searchdash-icon{
      display: inline-block;
      position: absolute;
      margin-left: -20px;
      margin-top: 5px;
      z-index: 3;
        img{
          width: 28px;
          height: 28px;
        }
        button{
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
        }
  }
  .phamacy-search-result {
    font-size: 16px;
    padding-top: 15px;
    color: #C8102A;
  }
  .react-autosuggest__suggestions-list {
      color:${colors.magellanblack};
      margin: 0;
      padding: 0;
      list-style-type: none;
      >li{
        padding: 5px 15px;
        text-transform: lowercase;
      }
      li:first-letter{
        text-transform: uppercase;
      }
  }
  .react-autosuggest__suggestion--highlighted {
      background-color: #f2f2f2;
      font-weight: 700;
  }
.react-autosuggest__suggestions-container--open {
  border:1px solid ${colors.magellan10black};
  font-size:1.4rem;
  position:absolute;
  height:200px;
  overflow-y:scroll;
  width:320px;
  background-color:${colors.magellanwhite};
  z-index:2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: left;
}

.drug-form-text{
  padding:10px 0px 0px 0px;
  p{
  color:${colors.magellanblack};
  font-weight:500;
  white-space:nowrap;
  }

}
`;
export default InputStyle;
