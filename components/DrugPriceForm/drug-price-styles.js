import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';

const DrugPriceStyles = styled.form`
    .react-autosuggest__suggestions-list {
        color:${colors.magellanblack};
        margin: 0;
        padding: 0;
        list-style-type: none;
        >li{
          padding: 5px 0px;
        }
    }
    .react-autosuggest__suggestion--highlighted {
        background-color: ${colors.magellan10black};
    }
.react-autosuggest__suggestions-container--open {
    border:1px solid ${colors.magellan10black};
    font-size:1.4rem;
    position:absolute;
    height:200px;
    overflow-y:scroll;
    width:92%;
    background-color:${colors.magellanwhite};
    z-index:2;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
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
export default DrugPriceStyles;
