import styled from 'styled-components';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

const FormsStyles = styled.div`
.back-to-top {
    padding-top: 4rem;
    a {
        color: #0077c8;
        font-weight: 500;
        font-size: 1.4rem;
        text-decoration: none;
        img{
          vertical-align: middle;
          margin-right: 0.5rem;
        }
    }
    a:hover {
        text-decoration: none;
    }
}
.pad-top {
    padding-top: 2rem;
}
.mag-font-bold{
  span{
    font-weight: 700;
    font-size:1.2rem;
  }
}
.pad-top10 {
    padding-top: 1rem;
}
.mrg-top0 {
    margin-top: 0;
}
.mrg-btm0 {
    margin-bottom: 0;
}
.list-leftspace {
    padding-left: 6rem;
}
.second-level-list {
    padding-top: 0.8rem;
}
.second-level-list li {
    list-style: disc;
}
.forms-appnt {
    h1 {
        font-weight: 300;
        font-size: 3rem;
        color: #000;
        text-align: center;
        line-height: 2.5rem;
        margin: 0;
        padding: 0 0 4rem;
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
        button{
          border: none;
        }
    }
    .nav-tabs {
        border: none;
        padding-left: 11.5rem;
        ${tablet.handheld`
            padding-left: 0;
        `}
        ${mobile.handheld`
            text-align:center;
        `}
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
            font-weight: 700;
        }
    }
    .tab-content {
        padding: 0 17.2rem 2rem;
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
            .mag-forms-bold {
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
                border-radius: 1.1rem;
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
  .forms-appnt .tab-content{
      padding: 0 2rem 2rem 0;
  }
}
@media (max-width: 767px) {
  .forms-appnt {
      h1 {
          padding: 0 0 2.5rem;
          line-height: 3.5rem;
      }
      h3 {
          text-align: center;
      }
      .closeicon {
          font-weight: 500;
          font-size: 1.4rem;
          color: #0077c8;
          display: block;
          text-align: right;
      }
  }
  .tab-content .tab-pane {
      background: #fff;
      left: 0;
      padding: 2rem 1.5rem;
      top: 7rem;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding-bottom: 9rem;
  }
  .forms-appnt .tab-content {
      h2 {
          font-size: 1.6rem;
          font-family: Ubuntu;
          text-align: center;
      }
  }
  .list-leftspace {
      padding-left: 2rem;
  }
}
.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; }
.clearfix { height: 1%; }
.clearfix { display: block; }
`;
export default FormsStyles;
