import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';
import { mobile } from '../HelperUtils/Media-query';

const Nav = styled.nav`
    margin-bottom: 0em;
    font-size: 1.5rem;
    font-weight:500;
    background-color: #fff;
    color: #000005;
    min-height:1px !important;
    height:3.9rem !important;
    border:none;
    margin-bottom: 3.6rem;
    border-top: 2px solid ${colors.magellan5black};
    border-bottom: 2px solid ${colors.magellan5black};
 .icon-bar{
    background-color:${colors.magellanblue}!important;
}
.navbar-collapse{
    padding-left:0px;
    padding-right:0px;
}
.navbar-toggle{
    border:none;
}
    #navbar-mobile-logo{
            display:none;
        }
    #mobile-lang-toggle {
      >ul>li>button {
        padding: 10px 15px;
        color:${colors.magellanblue};
        }
    }
    .navbar-toggle{
        float: left !important;
    }

    .font-size-changer-buttons {
        padding:10px 15px;
        >button {
            border: none;
        }
    }

    .divider{
        border:0.5px solid ${colors.magellan3black};
        margin-left:0.5rem;
        margin-right:0.5rem;
    }

    >div {
      #portalNav {
        >ul>li{
          a {
            height: 3.5rem;
            color:${colors.magellanblue};
            padding-top:5px;
            padding-bottom:5px;
            display: inline-block;
            position: relative;
            z-index: 1;
            padding-right: 0;
            padding-left: 0;
            margin: 0 15px;
            line-height: 3.5rem;
            padding: 0;
            font-weight: 500;
          }
          a:hover, a:active {
            border-bottom:none;
          }
          a.dropdown-toggle{
                background-color:transparent;
          }
        a.dropdown-toggle.active{
            border-bottom:2px solid ${colors.magellanbrightorange};
        }
          svg{
            position: relative;
            z-index: -1
            margin-right:3px;
            ${mobile.handheld`
              margin-top: -3px;
            `}
          }
        span{
            position: relative;
            z-index: -1;
            vertical-align: middle;
          }
        }
.mag-spanish-head{
      li{
        margin-right: -20px;
      }
    }
      }
    }

    .dropdown-menu {
        min-width: ${(props) => props.selectedLang ? '220px' : '180px'};
        margin-top: 5px !important;
        border-top-right-radius: 4px !important;
        border-top-left-radius: 4px !important;
        font-size:1.4rem;
        font-weight:500;
        box-shadow: none !important;
        >li{
            margin-right:0px !important;
        }
        >li>a{
            height:2.2rem !important;
            line-height:2.2rem !important;
        }
        >li>a:hover {
        background-color: transparent;
        border:none !important;
        color:${colors.magellanblue};
        }
        .mag-nav-rxcare{
          padding: 0 5px;
          li{
            border-bottom: none;
            margin: 7px 0px !important;
            a{
              height: 2.2rem !important;
              line-height: 2.2rem !important;
              margin: 0 15px 0 10px !important;
            }
            a:hover{
              text-decoration: none;
            }
          }
        }
        >li>div {
        display: block;
        padding: 0px 20px;
        clear: both;
        font-weight: normal;
        line-height: 1.42857;
        color: #333333;
        white-space: nowrap;
        height:2.2rem !important;
        }

        >li>div>a:hover {
        border-bottom:none;
        color:${colors.magellanblue};
        }

        > li > div >a:hover {
        border-bottom:none !important;
        text-decoration: none;
        }

        >li>a:hover{
        color:${colors.magellanblue};
        }
    }

    #nav-price-drug-link{
        color: ${colors.magellanwhite} !important;
        background-color: ${colors.magellanblue};
        padding-right: 15px !important;
        padding-left: 15px !important;
    }
    .caret-icon{
      margin-left: 0 !important;
      margin-top:5px;
    }
    #nav-benefits-link-dropdown{
        >.dropdown-menu{
            left:${(props) => props.selectedLang ? '91px' : '98px'};
        >.arrow{
            left:80%;
        }
        }
        span{
          padding-right: 3px;
        }
    }
    #nav-resources-link-dropdown{
        >.dropdown-menu{
              left:${(props) => props.selectedLang ? '72px' : '47px'};
            >.arrow{
                left:74%;
            }
        }
        span{
          padding-right: 3px;
        }
    }
    .nav-price-drug-link-icon{
        margin-right:12px !important;
        margin-bottom:2px;
    }
.memberArrow{
  left: 79% !important;
}


    ${media.tablet`
            height:5.3rem !important;
            border-bottom: 2px solid ${colors.magellan5black};
            margin-top:5px;
            border-top: none;
            border-radius:0px;
            margin-bottom: 1.6rem;
        .navbar-header {
            float: none;
        }
        .navbar-left,.navbar-right {
            float: none !important;
        }
        .navbar-toggle {
            display: block;
        }
        .navbar-toggle:focus{
          background-color: transparent !important;
        }
        .navbar-toggle:hover{
          background-color: transparent !important;
        }
        .navbar-collapse {
            border-top: 1px solid transparent;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .navbar-fixed-top {
            top: 0;
            border-width: 0 0 1px;
        }
        .navbar-collapse.collapse {
            display: none!important;
        }
        .navbar-nav {
            float: none!important;
            margin-top: 7.5px;
        }
        .navbar-nav>li {
            float: none;
        }
        .navbar-nav>li>a {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .collapse.in{
            display:block !important;
        }
        .open .dropdown-menu{
            position: static;
            float: none;
            width: auto;
            margin-top: 0;
            background-color: transparent;
            border: 0;
            box-shadow: none !important;
        }

        #navbar-mobile-logo{
            display:block;
            >img{
                width:225px;
                height:50px;
                margin-left:0px;
                margin-right:10px;
            }

        }


    `}

`;

export default Nav;
