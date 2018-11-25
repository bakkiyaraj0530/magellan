import { injectGlobal } from 'styled-components';
import colors from './components/HelperUtils/branding-colors';
import media from './components/HelperUtils/media-utils';
import requiredIcon from './assets/icons/icon-required-new.svg';
import DownArrow from './assets/icons/select-list-arrow.svg';
import UpArrow from './assets/icons/select-list-arrow-up.svg';
/* eslint no-unused-expressions: 0 */
injectGlobal`

  html {
    position: relative;
    min-height: 100% ;
    width: 100% ;
    font-size: 10px;
    font-family: 'Ubuntu', 'Trebuchet MS', sans-serif !important;
    font-weight:400;
    color:${colors.magellanblack};
  }

  body {
    height: 100%;
    width: 100%;
    font-size: 1.2rem;
    color: #121C1F;
    font-family: 'Ubuntu', 'Trebuchet MS', sans-serif !important;
    font-weight:400;
    color:${colors.magellanblack};
  }

  .content-area {
    min-height: calc(100vh - 80px);
  }

  .font-size-base {
    font-size: 10px;
  }

  .font-size-large {
    font-size: 11px;
  }

  .font-size-largest {
    font-size: 12px;
  }
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6{
  font-weight:400;
}
  h1 {
    font-size: 3.0rem;
    color: ${colors.magellanblack};
  }

  h2 {
    font-size: 2.0rem;
    color: ${colors.magellandarkblue};
  }

  h3 {
    font-size: 1.8rem;
    color: ${colors.magellandarkblue};
  }

  h4 {
    font-size: 1.6rem;
    color: ${colors.magellandarkblue};
  }

  h5 {
    font-size: 1.4rem;
    color: ${colors.magellandarkblue};
  }

  .text-warning {
    color:${colors.magellandeeporange};
  }
.pageSpinner {
    position: absolute;
    top: 35%;
    left: 50%;
    margin: -40px 0 0 -40px;
    z-index: 3000;
}
.loading-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: ${colors.magellan5black};
}
.loading-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.loading-backdrop.in {
  filter: alpha(opacity=40);
  opacity: .4;
}
.loading-dots {
    position: absolute;
    left: 50%;
    margin: -40px 0 0 -40px;
    z-index: 3000;
    top: 10%;
}
.mag-recentclaims-head{
  h1{
    margin-bottom: 0;
    font-weight: 300;
  }
  p{
    font-size:14px;
    font-weight: 300;
  }
}
.mag-modal-animation{
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}
.mag-modal-closeanimation{
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 0.4s;
    animation-name: animatebottom;
    animation-duration: 0.4s
}
@-webkit-keyframes animatebottom {
    from {top:0; opacity:1}
    to {top:-300px; opacity:0}
}

@keyframes animatebottom {
    from {top:0; opacity:1}
    to {top:-300px; opacity:0}
}
.sl-spin {
    -webkit-animation: spin 2s infinite linear;
    -moz-animation: spin 2s infinite linear;
    -o-animation: spin 2s infinite linear;
    animation: spin 2s infinite linear;
}
.sl-pulse {
  -webkit-animation: spin 1s infinite steps(3);
  animation: spin 1s infinite steps(3);
}
@keyframes blink {
    /**
     * At the start of the animation the dot
     * has an opacity of .2
     */
    0% {
      opacity: .2;
    }
    /**
     * At 20% the dot is fully visible and
     * then fades out slowly
     */
    20% {
      opacity: 1;
    }
    /**
     * Until it reaches an opacity of .2 and
     * the animation can start again
     */
    100% {
      opacity: .2;
    }
}
@-moz-keyframes spin {
    0% {
        -moz-transform: rotate(0deg);
    }
    100% {
        -moz-transform: rotate(359deg);
    }
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
    }
}

@-o-keyframes spin {
    0% {
        -o-transform: rotate(0deg);
    }
    100% {
        -o-transform: rotate(359deg);
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

.required {
    &:before {
        background: url(${requiredIcon});
        height: 6px;
        width: 6px;
        margin-left: -20px;
        margin-top: 12px;
        padding-top: 6px;
        float: left;
        line-height: 99%;
        content: "";
    }
}
.required-indicate {
    &:before {
    margin-left: -8px;
    margin-top: 4px;
    }
  }
  /* bootstrap modal */
.modal-content{
  border: 2px solid #e3e3e3;
  border-radius: 20px;
  margin-top: 150px;
}

    .caret-icon{
        display: inline-block;
        margin-left: 2px;
        vertical-align: middle;
    }

    .caret-icon-flipped{
         -moz-transform: scaleY(-1);
        -o-transform: scaleY(-1);
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
        filter: FlipV;
        -ms-filter: "FlipV";
    }

  select {
    /* styling */
    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    /* reset */
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${DownArrow}),
    linear-gradient(to right, ${colors.magellan5black} , ${colors.magellan5black}) !important;
    background-position : calc(100% - 10px) calc(1em + -5px),
    100% 0 !important;
    background-size : 15px 15px,
    2.5em 2.5em!important;
    background-repeat: no-repeat !important;
  }

  select:focus {
    background-image: url(${UpArrow}),
    linear-gradient(to right, ${colors.magellan5black} , ${colors.magellan5black}) !important;
    background-position : calc(100% - 10px) calc(1em + -5px),
    100% 0 !important;
    background-size : 15px 15px,
    2.5em 2.5em!important;
    background-repeat: no-repeat !important;
  }

.text-danger{
  color:${colors.magellanred};
}

${media.tablet`
.dash-upper-text{
  border-bottom: 1px solid ${colors.magellan5black};
  padding-bottom:1rem;
}
`}

@media print {
  #appHeader, #appFooter, #appNavbar, #appContent{
    display: none!important;
  }
  .modal-content {
    border:5px solid ${colors.magellan5black};
  }
  .modal{
    background-color:#fff!important;
  }
  #dashIDModal {
    display: block !important;
  }
}

`;
