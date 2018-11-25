import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';

const InputStyle = styled.div`
margin: 0 auto;
.form-control::-webkit-input-placeholder {color:${colors.magellanblue}; }  /* WebKit, Blink, Edge */
.form-control:-moz-placeholder {color:${colors.magellanblue}; }  /* Mozilla Firefox 4 to 18 */
.form-control::-moz-placeholder {color:${colors.magellanblue}; }  /* Mozilla Firefox 19+ */
.form-control:-ms-input-placeholder {color:${colors.magellanblue}; }  /* Internet Explorer 10-11 */
.form-control::-ms-input-placeholder {color:${colors.magellanblue}; }  /* Microsoft Edge */
.pharmacy-searchdash-icon{
    display: inline-block;
    position: absolute;
    margin-left: -20px;
    margin-top: 10px;
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
.form-control.pharmacy-input-control{
        border-top: none!important;
        border-left: none!important;
        border-right: none!important;
        box-shadow: none;
        border-radius: 0px;
        border-color:${colors.magellandarkblue};
        padding: 6px 25px 6px 12px;
        font-size: 16px;
        color: #000;
        font-weight: 500;
    }

    #pharmacySearchInput{
        width:300px;
    }

    .input-group-addon{
        background-color:#fff;
        border-top: none!important;
        border-left: none!important;
        border-right: none!important;
        box-shadow: none;
        border-radius: 0px;
        border-color:${colors.magellandarkblue};
        padding:0px;
        &.autocomplete{
            border-color:#fff;
            >.pharmacy-search-icon{
                display:none;
            }
        }
    }
.btn{
    padding:0px;
}
.btn:active, .btn.active{
    box-shadow:none!important;
    outline:none;
}
.btn:focus{
    outline:none;

}
    .pharmacy-search-form-text{
        font-size:1.6rem;
        margin-top:5px;
        margin-right:25px;
        font-weight:700;
    }

}
`;
export default InputStyle;
