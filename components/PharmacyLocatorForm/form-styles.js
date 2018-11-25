import styled from 'styled-components';
import colors from '../HelperUtils/branding-colors';

const FormStyles = styled.form`
.form-control::-webkit-input-placeholder {color:${colors.magellanblue}; }  /* WebKit, Blink, Edge */
.form-control:-moz-placeholder {color:${colors.magellanblue}; }  /* Mozilla Firefox 4 to 18 */
.form-control::-moz-placeholder {color:${colors.magellanblue}; }  /* Mozilla Firefox 19+ */
.form-control:-ms-input-placeholder {color:${colors.magellanblue}; }  /* Internet Explorer 10-11 */
.form-control::-ms-input-placeholder {color:${colors.magellanblue}; }  /* Microsoft Edge */

.form-group{
    margin-right:25px;
}
.form-control.pharmacy-input-control{
        border-top: none!important;
        border-left: none!important;
        border-right: none!important;
        box-shadow: none;
        border-radius: 0px;
        border-color:${colors.magellandarkblue};
        color:${colors.magellanblue};

    }

    #pharmacySearchInput{
        width:300px;
    }
.Select-control{
    width:100px!important;
}
    .input-group-addon{
        background-color:#fff;
        border-top: none!important;
        border-left: none!important;
        border-right: none!important;
        box-shadow: none;
        border-radius: 0px;
        border-color:${colors.magellandarkblue};
        &.autocomplete{
            border-color:#fff;
            >.pharmacy-search-icon{
                display:none;
            }
        }
    }

    .pharmacy-search-form-text{
        font-size:1.6rem;
        margin-top:5px;
        margin-right:25px;
        font-weight:700;
    }

    button{
        border-radius:10px;
    }
    .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus{
        outline:none;
    }
}

`;
export default FormStyles;
