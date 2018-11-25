import styled from 'styled-components';
import { tablet, mobile } from '../HelperUtils/Media-query';

const ClaimsDetailsStyles = styled.div`
.claim-tablepanel {
    padding: 0 8rem;
    font-size: 1.4rem;
    font-weight:500;
    a {
        color: #0074cb;
    }
    a:hover {
        text-decoration: none;
    }
}

.claim-range {
    float: left;
    img {
        margin-left: 0.5rem;
        height: auto;
    }
    a {
        color: #005398;
    }
}
.claim-download {
    float: right;
    a[href] {
        color: #0074cb;
    }
    a {
        background: url(../image/download.svg) no-repeat;
        padding: 0 0 0 2.4rem;
        background-size: 2rem 1.5rem;
        color: #9B9B9B;
    }
}
.claim-download.inactive {
    float: right;
    a[href] {
        color: #9B9B9B;
    }
    a {
        background: url(../image/download-innactive.svg) no-repeat;
        padding: 0 0 0 2.4rem;
        background-size: 2rem 1.5rem;
    }
}
.claimhistory-list {
    float: left;
    width: 100%;
    padding: 2rem 0 0;
    margin: 0;
    ${tablet.handheld`
      padding: 1rem 0 0;
    `}
    li {
        list-style: none;
        font: normal 1.4rem Ubuntu;
        padding: 1.5rem 0;
        border: none;
        box-shadow: 0 0 0 0;
        margin: 0;
        border-radius: 0;
        border-bottom: #ededed 0.2rem solid;
        div {
            padding: 0;
            color: #000;
        }
    }
    li.panel {
        border-radius: 0;
        margin: 0!important;
    }
    li.claimlist-head {
        border-bottom: #9b9b9b 0.2rem solid;
        padding: 0 0 0.4rem 0;
        div {
            font-size:1.2rem;
            font-weight:700;
            line-height: 1.3rem;
            .mag-claim-sortTxt {
                color: #005398;
            }
            .mag-claim-sortTxt.inactive {
                color: #9B9B9B;
            }
            .mag-claim-sortImg {
              width: 2rem;
              height: 1.3rem;
              margin-left: 0.3rem;
              vertical-align: bottom;
              ${tablet.handheld`
                margin-left: 0;
              `}
            }
            .mag-claim-sortImg.inactive {
                background: url(./image/sort-innactive.svg) no-repeat;
                background-size: 2rem 1.5rem;
                padding-right: 2.4rem;
            }
            br {
                display: none;
            }
        }
    }
    .no-available-claims {
        border: none;
        text-align: center;
        color: #9b9b9b;
        font: normal 2rem Ubuntu;
        padding-top: 3.8rem;
        ${tablet.handheld`
          padding-bottom: 2rem;
        `}
        ${mobile.handheld`
          padding-bottom: 0;
        `}
    }
    .cm-left,
    .cm-right {
        padding: 0;
    }
    .moreinfo {
        text-align: right;
        cursor: pointer;
    }
    .more-info {
        font-weight:500;
        img {
            vertical-align: baseline;
            margin-left: 0.3rem;
        }
    }
    .video-playicon {
        img {
            vertical-align: sub;
            margin-left: 1rem;
        }
    }
    .denied {
        color: #c8102e;
    }
    .rejected {
        color: #ed8b00;
    }
    .paid {
        color: #509e2f;
    }
    .accarrow {
        width: 1.4rem;
        height: 0.8rem;
        display: inline-block;
    }
    .down-arrow {
        background: url(./image/arrow.svg) no-repeat;
    }
    .up-arrow {
        background: url(./image/arrowdown.svg) no-repeat;
    }
}
.claimhistory-list li div.claimexpanded-content {
    padding: 0;
    float: left;
    width: 100%;
    background: #fafafa;
    border-top: #ededed 0.2rem solid;
    margin-top: 1.5rem;
    margin-bottom: -1.5rem;
}
.claimexpanded-content {
    .panel-body {
        padding: 1.5rem;
    }
    .plancost {
        text-align: center;
    }
    .expand-left {
        padding-right: 1rem;
        p {
            margin: 0;
            font: normal 1.4rem Ubuntu;
            color: #000;
            line-height: 2rem;
        }
    }
    .expand-right {
        p {
            margin: 0 0 0.8rem;
            font: normal 1.4rem Ubuntu;
            color: #000;
            line-height: 1.8rem;
            span {
                display: block;
                font-size:1.2rem;
                font-weight:700;
                color: #000;
            }
        }
    }
    .quantity-count {
        text-align: right;
    }
}
.claimhistory-list li {
    .planing-list {
        padding-top: 1rem;
        div {
            color: #005398;
            font-size:1.4rem;
            font-weight:300;
            .mag-claim-amt {
                display: block;
                font-size:2.3rem;
                font-weight:500;
            }
        }
        p {
            padding: 0;
            margin: 0;
        }
    }
}
.video-panel {
    float: left;
    line-height: 1.5rem;
    min-width: 2.2rem;
    min-height: 1.9rem;
}
/*desktopend*/
/*Ipad landscape*/

@media(max-width:1199px) {
    .claim-tablepanel {
        padding: 0;
        margin-top: 3rem;
        ${mobile.handheld`
          margin-top: 0;
        `}
    }
    .claim-info {
        padding: 0;
    }
}
/*Ipad portrait*/

@media(max-width:991px) {
    .claimhistory-list {
        li.claimlist-head {
            div {
                br {
                    display: block;
                }
                .mag-claim-sortTxt {
                    float: left;
                    padding-right: 0.6rem;
                }
                .servicedate {
                    float: left;
                    padding-right: 0;
                    width: 5.5rem;
                    color: #005398;
                }
                .status{
                  width: 4.8rem;
                  float: left;
                  padding-right: 0;
                  color: #005398;
                }
            }
        }
    }
    .claimexpanded-content {
        .plancost {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    }
    .claimhistory-list li {
        font-size: 1.2rem;
    }
}
/*mobile css*/

@media(max-width:767px) {
    .claimhistory-list {
        border-top: 0.2rem solid #ededed;
        padding: 0;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }
    .claimhistory-list .cm-right {
        text-align: right;
    }
    .claimhistory-list .title-attr::before,
    .claimhistory-list .status::before {
        content: attr(data-title);
        display: block;
        padding-bottom: 0;
        float: left;
        width: 100%;
        font-size:1.2rem;
        font-weight:700;
        color: #000;
    }
    .claimhistory-list li {
        div {
            padding-bottom: 0.7rem;
        }
        div.moreinfo {
            padding: 0;
            text-align: left;
            cursor: pointer;
        }
    }
    .claimexpanded-content {
        .expand-left {
            padding-right: 0;
        }
        .expand-right {
            padding-bottom: 0;
        }
    }
    .claimhistory-list li .claimexpanded-content {
        .planing-list {
            padding-bottom: 0;
            margin-bottom: -1.2rem;
            padding-top: 0;
        }
    }
    .video-panel {
        display: block;
        padding-bottom: 0 !important;
        float: right;
    }
    .video-lbl{
      padding-bottom: 0 !important;
    }
}
/*767end*/

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
.pharm-lbl{
  padding: 0 1rem 0 0 !important;
}

`;
export default ClaimsDetailsStyles;
