import styled from 'styled-components';
// import colors from '../HelperUtils/branding-colors';

const DrugPriceInfoStyles = styled.form`
.price-drugpage-con{
  text-align: center;
  margin-top:40px;
  h1{
    color: #4A4A4A;
    font-family: Ubuntu;
    font-size: 30px;
    line-height: 35px;
    font-weight: 300;
  }
  .price-searchpage-con{
    margin: 0 auto;
    width: 100%;
    .price-searchpage-input{
      width: 320px;
      height: 30px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #005398;
      padding: 0 15px;
      outline: none;
      margin-top: 10px;
      background-image: url(./../svg/video.svg);
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: right;
    }
    input::placeholder {
      color: #00A8E2;
      font-family: Ubuntu;
      font-size: 14px;
      font-weight: 500;
      line-height: 19px;
    }
  }
  }
  .price-table-container{
  margin-top:50px;
  .price-table-head{
    color: #0077C8;
    font-family: Ubuntu;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    text-align: left;
    padding-left: 10px;
  }
  .price-age-txt{
    text-align: right;
    font-family: Ubuntu-bold;
    font-size: 14px;
    line-height: 19px;
    padding-right: 15px;
  }
  .price-ageedit-icon{
    width:27px;
    height:11px;
    display:inline-block;
    background:url(./../svg/sort.svg) no-repeat;
    cursor: pointer;
  }
  .price-agetick-icon{
    width:27px;
    height:11px;
    display:inline-block;
    background:url(./../svg/sort-innactive.svg) no-repeat;
    cursor: pointer;
  }
  .price-age-container{
    font-family: Ubuntu-bold;
    font-size: 14px;
    line-height: 19px;
    text-align: right;
    padding-right: 15px;
  }
  .price-table-details{
    height: 50px;
    background-color: #ECECEC;
    padding: 0 25px;
    .price-fieldset{
      padding: 12px 0;
    }
    input{
      width: 92px;
      height: 27px;
      border: none;
      color: #005398;
      font-family: Ubuntu;
      font-size: 14px;
      line-height: 16px;
      direction: rtl;
      outline: none;
      padding: 0 10px;
      background: #fff;
    }
    label{
      color: #005398;
      font-family: Ubuntu;
      font-size: 12px;
      line-height: 13px;
      margin-right: 6px;
    }
    .price-update-txt{
      padding: 18px 0;
      margin: 0;
      font-family: Ubuntu-bold;
      font-size: 12px;
      color: #00A8E2;
      line-height: 13px;
      text-align: right;
    }
  }
  .price-tablepanel{
    font-family: Ubuntu;
    font-size: 14px;
    a{
      color:#00A8E2;
    }
    a:hover{
      text-decoration:none;
    }
  }
  .price-list{
    float:left;
    width:100%;
    padding:20px 0 0;
    margin:0;
    height: 350px;
    overflow: auto;
    li{
      list-style:none;
      font-family: Ubuntu;
      font-size: 14px;
      padding:15px 0;
      color: #4A4A4A;
      border:none;
      box-shadow:0 0 0 0;
      margin:0;
      border-radius:0;
      border-bottom:1px solid #9B9B9B;
      div{
        padding:0;
        color: #4A4A4A;
      }
    }
    li.panel{
      border-radius:0;
      margin:0!important;
    }
    li.pricelist-head{
      border-bottom:1px solid #9B9B9B;
      padding:0 0 4px 0;
      div{
        font:normal 12px Ubuntu-bold;
        line-height:13px;
      }
    }
    .price{
      text-align:right;
    }
    .accarrow{
      width:14px;
      height:8px;
      display:inline-block;
    }
    .down-arrow{
      background:url(./images/arrow.svg) no-repeat;
    }
    .up-arrow{
      background:url(./images/arrowdown.svg) no-repeat;
    }
    .price-panel{
      padding-top: 15px;
    }
    .price-panel-head{
      border-bottom: 1px solid #E2E2E2;
      padding: 0 25px;
    }
    .price-panel-head p{
      color: #4A4A4A;
      font-family: Ubuntu-bold;
      font-size: 12px;
      line-height: 13px;
      margin:0;
      padding-bottom:5px;
    }
    .price-network {
      padding: 15px 25px;
      .price-network-txt{
        font-family: Ubuntu-light;
      }
    }
    .price-network p{
      margin:0;
    }
    .price-network:nth-child(odd) {
      background-color: #ECECEC;
    }
    .best-price{
      color: #61AB17;
      font-family: Ubuntu-bold;
      font-size: 12px;
      line-height: 13px;
      padding-left:5px;
    }
  }
  .price-list li div.priceexpanded-content{
  padding:0;
  float:left;
  width:100%;
  background:#fafafa;
  border-top:#ededed 2px solid;
  margin-top:15px;
  margin-bottom:-14px;
  }

  br{
  display:none;
  }
  .cm-left,.cm-right{
  padding:0;
  }

  }

  @media(max-width:991px){
  .price-table-container{
    .price-table-ipad div{
      padding: 0;
    }
    br{
      display:block;
    }
    .price-table-details {
      #take{
        width: 50px;
      }
      #unit{
        width: 130px;
      }
      .price-fieldset-ipad{
        label, input{
          float: left;
        }
      }
    }
  }
  }
  @media(max-width:767px){
  .price-table-container{
    .price-table-details{
      height: 130px;
      .price-update-txt{
        padding: 0;
        padding-right: 8px;
      }
    }
    .price-age-txt{
      padding-right:0;
    }
    .price-list{
      height: auto;
      li{
        font-size: 12px;
        div{
          padding-bottom: 7px;
        }
      }
      .price{
        text-align:left;
        padding: 0;
      }
      .price-network{
        padding: 0 0 10px 0;
        .price-network-txt{
          font-family: ubuntu-bold;
          text-align: center;
          font-size: 14px;
          margin: 15px 0;
          color: #005398;
        }
      }
      .price-panel{
        padding-top:0;
      }
      .best-price{
        display: block;
      }
    }
    .price-list .title-attr::before,.price-list .status::before{
      content: attr(data-title);
      display: block;
      padding-bottom:0;
      float:left;
      width:100%;
      font:normal 12px ubuntu-bold;
      color:#000;
    }
    .price-list .mobile-attr{
      text-align: center;
      p{
        margin-top:20px;
      }
    }

  }
  .cm-right{
    text-align:right;
  }
  }
`;
export default DrugPriceInfoStyles;
