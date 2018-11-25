import styled from 'styled-components';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

const DocumentStyles = styled.div`
.custom-select {
    position: relative;
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 0.01px;
        text-overflow: '';
        appearance: none;
        width: 100%;
        padding: 0 33px 0 10px;
        /*color:rgba(74, 74, 74, 0);
    text-shadow:0 0 0 #4a4a4a;*/

        padding: 12px\9;
        height: 35px;
    }
    span.select-arrow {
        background: url(./images/select-arrow.png) center no-repeat;
        width: 31px;
        height: 31px;
        position: absolute;
        top: 2px;
        right: 2px;
        pointer-events: none;
        display: none\9;
    }
}
.mag-document-page {
    font-size:1.4rem;
    padding-bottom: 3rem;
    h1 {
        font-weight: 300;
        font-size: 3rem;
        color: #000;
        text-align: center;
        line-height: 2.5rem;
        margin: 0;
        padding: 0 0 4rem;
    }
    h2 {
        color: #000;
        text-align: center;
        margin: 0;
        padding: 0 0 4rem;
        font-weight: 400;
        font-size: 14px;
    }

    h2.plan-not-offered {
        color:#C8102A;
    }

    .mag-document-form {
        .doc-state {
            text-align: center;
            padding-bottom: 2rem;
            label {
                font-weight: 500;
                font-size: 1.4rem;
                color: #000;
                margin: 0 1rem 0 0;
                display: inline-block;
                vertical-align: top;
                margin-top: 1rem;
            }
            .custom-select {
                width: 20.5rem;
                display: inline-block;
            }
            select {
                width: 100%;
                font-weight: 300;
                font-size: 1.2rem;
                color: #000;
                border: #9b9b9b 2px solid;
                border-radius: 0.6rem;
                outline: none;
                cursor: pointer;
                option {
                    padding: 0.5rem 1rem;
                }
            }
            p {
                font-weight: 400;
                font-size: 1.2rem;
                color: #000;
                line-height: 1.3rem;
                margin: 1rem 0 0;
            }
        }
        .doc-leftright {
            padding: 0 15.5rem;
        }
        .state-list {
            margin: 0;
            padding: 0;
            ${tablet.handheld`
                padding: 0 7.5rem;
            `}
            ${mobile.handheld`
                padding: 0;
            `}
            li {
                list-style: none;
                color: #0077c8;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 1.8rem;
                padding-bottom: 2.5rem;
                a {
                    color: #0077c8;
                }
            }
            .state-readmore {
                float: right;
            }
        }
        .lang-list {
            padding-top: 5rem;
            ${tablet.handheld`
                padding: 5rem 0 0 0;
            `}
        }
        .state-readmore {
            .more-arrow {
                display: inline-block;
                height: 0.8rem;
                width: 1.4rem;
                margin-left: 0.3rem;
                vertical-align: middle;
            }
            .state-uparrow span {
                background: url(../svg/uparrow.svg) no-repeat;
            }
        }
        .doc-lang {
            text-align: center;
            h3 {
                color: #005398;
                font-weight: 400;
                font-size: 1.6rem;
                margin: 2.3rem 0 2rem;
            }
            h4 {
                color: #000;
                font-weight: 400;
                font-size: 1.4rem;
                margin: 0;
            }
        }
        .state-expanded-content {
            padding: 2.3rem 1.5rem 1.5rem;
            ${mobile.handheld`
                padding: 2.3rem 0 1.5rem 0;
            `}
            p {
                color: #000;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.9rem;
                .doc-bold {
                    font-weight: 700;
                }
                a {
                    font-weight: 500;
                    font-size: 1.4rem;
                    color: #0077c8;
                }
            }
            li {
                color: #000;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 1.9rem;
            }
        }
        .L-space {
            padding-left: 3.9rem;
        }
        ul,
        ol {
            padding: 0 0 0 5rem;
        }
        .rading-list {
            padding: 0 0 1.8rem;
            margin: 0;
            li {
                list-style: none;
                img {
                    vertical-align: text-top;
                    margin-right: 0.2rem;
                }
                span {
                    padding-left: 0.5rem;
                }
            }
        }
    }
    .btm-border {
        border-bottom: 0.2rem solid #ededed;
    }
    .top-border {
        border-top: 0.2rem solid #ededed;
    }
}
.back-to-top {
    padding-top: 4rem;
    a {
        color: #0077c8;
        font-weight: 500;
        font-size: 1.4rem;
        padding: 0 0 0 2rem;
        background: url(../images/top.png) no-repeat;
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
}
/*faq page*/

.pad-top {
    padding-top: 2rem;
}
.mrg-top0 {
    margin-top: 0;
}
.forms-appnt {
    h1 {
        font-weight: 300;
        font-size: 3rem;
        color: #000;
        text-align: center;
        line-height: 2.5rem;
        margin: 0;
        padding: 3.8rem 0 4rem;
    }
    h3 {
        font-weight: 400;
        font-size: 1.6rem;
        color: #000;
        line-height: 2rem;
    }
    .closeicon {
        cursor: pointer;
        display: none;
    }
    .nav-tabs {
        border: none;
        li {
            margin: 0;
            padding: 0 0 2.5rem;
            a {
                border: none;
                border-radius: 0;
                padding: 0 0 0.2rem;
                margin: 0;
                color: #0077c8;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 1.8rem;
                display: inline-block;
                border-bottom: #fff 0.2rem solid;
            }
        }
        li.active a,
        li a:hover {
            background: none;
            border: none;
            border-bottom: #ed8b00 0.2rem solid;
            border-radius: 0;
            color: #0077c8;
        }
    }
    .tab-content {
        padding: 0 5rem 2rem;
        h2 {
            font-weight: 300;
            font-size: 3rem;
            color: #000;
        }
        p {
            font-weight: 400;
            font-size: 1.2rem;
            color: #000;
            line-height: 1.9rem;
            span {
                font-weight: 700;
            }
            a {
                color: #0077c8;
                font-weight: 500;
                font-size: 1.4rem;
            }
        }
        li {
            font-weight: 400;
            font-size: 1.2rem;
            padding-bottom: 0.5rem;
        }
        .app-btn {
            a {
                color: #fff;
                background: #0077c8;
                border-radius: 11px;
                padding: 1rem 2rem;
                font-weight: 400;
                font-size: 1.4rem;
                text-decoration: none;
                display: inline-block;
            }
            a:hover,
            a:focus {
                text-decoration: none;
            }
        }
    }
}

@media (max-width: 1199px) {
    .mag-document-page {
        .mag-document-form {
            .doc-leftright {
                padding: 0;
            }
        }
    }
}
@media (max-width: 767px) {
    .mag-document-page {
        padding: 0;
        h1 {
            padding: 0 0 2rem 0;
        }
        h2 {
            padding: 0 0 2rem;
            line-height: 2.2rem;
        }
        .mag-document-form {
            .doc-state {
                padding: 0 0 2rem;
                label {
                    display: block;
                    padding: 0 0 0.5rem;
                    margin: 0;
                }
                .custom-select {
                    width: 100%;
                }
                p {
                    line-height: 1.6rem;
                    font-size: 1.2rem;
                }
            }
            ul,
            ol {
                padding-left: 2rem;
            }
            .L-space {
                padding-left: 0;
            }
            .state-list {
                padding-top: 1rem;
                li {
                    text-align: center;
                }
            }
            .lang-list {
                padding-top: 3rem;
            }
        }
        .doc-lang {
            padding: 0;
        }
    }
    .forms-appnt {
        .closeicon {
            display: inline;
        }
    }
    .tab-content .tab-pane {
        background: #fff;
        left: 0;
        padding: 2rem 1.5rem;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
}
.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
.clearfix { height: 1%; }
.clearfix { display: block; }
.Select {
  position: relative;
}
.Select,
.Select div,
.Select input,
.Select span {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.Select.is-disabled > .Select-control {
  background-color: #f9f9f9;
}
.Select.is-disabled > .Select-control:hover {
  box-shadow: none;
}
.Select.is-disabled .Select-arrow-zone {
  cursor: default;
  pointer-events: none;
  opacity: 0.35;
}
.Select-control {
  background-color: #fff;
  border:2px solid #9b9b9b;
  border-radius: 6px;
  color: #333;
  cursor: default;
  display: table;
  border-collapse: separate;
  height: 36px;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
  text-align: left;
}
.Select-control:hover {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.Select-control .Select-input:focus {
  outline: none;
}
.is-searchable.is-open > .Select-control {
  cursor: text;
}
.is-open > .Select-control {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: #fff;
  border-color: #9b9b9b #9b9b9b #9b9b9b;
}
.is-open > .Select-control .Select-arrow {
  top: -2px;
  border-color: transparent transparent #999;
  border-width: 0 5px 5px;
}
.is-searchable.is-focused:not(.is-open) > .Select-control {
  cursor: text;
}
.is-focused:not(.is-open) > .Select-control {
  border-color: #9b9b9b;
}
.Select-placeholder,
.Select--single > .Select-control .Select-value {
  bottom: 0;
  color: #aaa;
  left: 0;
  line-height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.has-value.Select--single > .Select-control .Select-value .Select-value-label,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
  color: #333;
}
.has-value.Select--single > .Select-control .Select-value a.Select-value-label,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
  cursor: pointer;
  text-decoration: none;
}
.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
  color: #007eff;
  outline: none;
  text-decoration: underline;
}
.Select-input {
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}
.Select-input > input {
  width: 100%;
  background: none transparent;
  border: 0 none;
  box-shadow: none;
  cursor: default;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;
  line-height: 14px;
  /* For IE 8 compatibility */
  padding: 8px 0 12px;
  /* For IE 8 compatibility */
  -webkit-appearance: none;
}
.is-focused .Select-input > input {
  cursor: text;
}
.has-value.is-pseudo-focused .Select-input {
  opacity: 0;
}
.Select-control:not(.is-searchable) > .Select-input {
  outline: none;
}
.Select-loading-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 16px;
}
.Select-loading {
  -webkit-animation: Select-animation-spin 400ms infinite linear;
  -o-animation: Select-animation-spin 400ms infinite linear;
  animation: Select-animation-spin 400ms infinite linear;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-right-color: #333;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.Select-clear-zone {
  -webkit-animation: Select-animation-fadeIn 200ms;
  -o-animation: Select-animation-fadeIn 200ms;
  animation: Select-animation-fadeIn 200ms;
  color: #999;
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 17px;
}
.Select-clear-zone:hover {
  color: #D0021B;
}
.Select-clear {
  display: none;
  font-size: 18px;
  line-height: 1;
}
.Select--multi .Select-clear-zone {
  width: 17px;
}
.Select-arrow-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 30px;
  background:#ededed;
  border-left:2px solid #9b9b9b;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.Select-arrow {
  border-color: #9b9b9b transparent transparent;
  border-style: solid;
  border-width: 5px 5px 2.5px;
  display: inline-block;
  height: 0;
  width: 0;
  position: relative;
}
.is-open .Select-arrow,
.Select-arrow-zone:hover > .Select-arrow {
  border-top-color: #666;
}
.Select--multi .Select-multi-value-wrapper {
  display: inline-block;
  text-align: left !important;
}
.Select .Select-aria-only {
  display: inline-block;
  height: 1px;
  width: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  float: left;
}
@-webkit-keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.Select-menu-outer {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #fff;
  border: 2px solid #9b9b9b;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: 0;
  max-height: 410px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  border-top: none;
  text-align: left;
  font-weight: 400;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.Select-menu {
  max-height: 408px;
  overflow-y: auto;
}
.Select-option {
  box-sizing: border-box;
  background-color: #fff;
  color: #666666;
  cursor: pointer;
  display: block;
  padding: 5px 20px;
}
.Select-option:last-child {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.Select-option.is-selected {
  background-color: #f5faff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.04);
  color: #333;
  font-weight: 700;
}
.Select-option.is-focused {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  color: #333;
}
.Select-option.is-disabled {
  color: #cccccc;
  cursor: default;
}
.Select-noresults {
  box-sizing: border-box;
  color: #999999;
  cursor: default;
  display: block;
  padding: 8px 10px;
}
.Select--multi .Select-input {
  vertical-align: middle;
  margin-left: 10px;
  padding: 0;
}
.Select--multi.has-value .Select-input {
  margin-left: 5px;
}
.Select--multi .Select-value {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  border-radius: 2px;
  border: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border: 1px solid rgba(0, 126, 255, 0.24);
  color: #007eff;
  display: inline-block;
  font-size: 0.9em;
  line-height: 1.4;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: top;
}
.Select--multi .Select-value-icon,
.Select--multi .Select-value-label {
  display: inline-block;
  vertical-align: middle;
}
.Select--multi .Select-value-label {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  cursor: default;
  padding: 2px 5px;
}
.Select--multi a.Select-value-label {
  color: #007eff;
  cursor: pointer;
  text-decoration: none;
}
.Select--multi a.Select-value-label:hover {
  text-decoration: underline;
}
.Select--multi .Select-value-icon {
  cursor: pointer;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-right: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border-right: 1px solid rgba(0, 126, 255, 0.24);
  padding: 1px 5px 3px;
}
.Select--multi .Select-value-icon:hover,
.Select--multi .Select-value-icon:focus {
  background-color: #d8eafd;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 113, 230, 0.08);
  color: #0071e6;
}
.Select--multi .Select-value-icon:active {
  background-color: #c2e0ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.24);
}
.Select--multi.is-disabled .Select-value {
  background-color: #fcfcfc;
  border: 1px solid #e3e3e3;
  color: #333;
}
.Select--multi.is-disabled .Select-value-icon {
  cursor: not-allowed;
  border-right: 1px solid #e3e3e3;
}
.Select--multi.is-disabled .Select-value-icon:hover,
.Select--multi.is-disabled .Select-value-icon:focus,
.Select--multi.is-disabled .Select-value-icon:active {
  background-color: #fcfcfc;
}
@keyframes Select-animation-spin {
  to {
    transform: rotate(1turn);
  }
}
@-webkit-keyframes Select-animation-spin {
  to {
    -webkit-transform: rotate(1turn);
  }
}
`;
export default DocumentStyles;
