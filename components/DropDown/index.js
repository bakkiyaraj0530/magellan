/* eslint-disable */
import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';
import { mobile, tablet } from '../HelperUtils/Media-query';

const DropDown = styled.ul`
  min-width:${props => props.langtoggle ? '98px' : '160px'};
  margin-top: 10px;
  border-width:2px;
  border-color:${colors.magellan5black};
  margin-left: -20px;
  ${mobile.handheld`
    margin-left: 0;
  `}
 > .arrow,
 > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;

}
 > .arrow {
  border-width: 11px;
}
 > .arrow:after {
  border-width: 10px;
  content: "";
}

 > .arrow {
  left:  ${props => props.langtoggle ? '50%' : '85%'};
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
 > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #fff;
}

>li{
  border-bottom:${props => props.langtoggle ? `1px solid ${colors.magellan3black}` : 'none'};
  margin:${props => props.langtoggle ? '0px 5px' : '5px 0px'};
  ${mobile.handheld`
    margin: 15px 0;
  `}
  ${tablet.handheld`
    margin: 15px 0;
  `}
}

>li:last-child{
  border-bottom:none;
}

`;

export default DropDown;
