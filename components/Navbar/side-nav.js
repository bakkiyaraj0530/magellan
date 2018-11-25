import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const SideNav = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    background-color: ${colors.magellanwhite};
    overflow-x: hidden;
    padding-top: 45px;
    transition: 0.5s;
    font-size: 1.3rem;
    background-color: #fff;
    color: #000005;
    font-weight: 600;
    white-space:nowrap;

    h1 {
      position: absolute;
      top: 17px;
      margin-left: 20px;
      color:${colors.magellanblue};
      font-size: 1.6rem;
    }
    .nav>li>a{
      padding: 15px;
    }
    .nav>li>a:hover,
    .nav>li>a:focus {
      text-decoration: none;
      background-color: transparent;
    }

    a {
      padding: 0 8px 8px 32px;
      text-decoration: none;
      font-size: 1.3rem;
      color: ${colors.magellanblue};
      display: block;
    }

    .side-nav-icon {
      font-size: 1.2rem;
    }
    .mag-slidebar-reg{
      margin-left: 20px;
    }
    .nav .open>a,
    .nav .open>a:hover,
    .nav .open>a:focus {
      background-color: transparent;
    }

    .open .dropdown-menu {
      position: relative;
      float: none;
      width: auto;
      margin-top: 0;
      border: 0;
      border-radius: 0px;
      box-shadow: none;
    }

    .divider {
      border:1px solid ${colors.magellan3black};
    }

    .dropdown-menu {
      min-width: 180px;
      margin-top: 5px !important;
      background-color:${colors.magellan1black};
      ${media.tablet`
          margin-left: 0;
        `}
      >li {
        margin-left:15px;
      }
      >li>a {
        font-weight: 600;
        color:${colors.magellanblue};
        outline: none;
      }

      >li>a:hover,
      >li>a:focus {
        text-decoration: none;
        background-color: transparent;
      }
    }

    .closebtn {
      position: absolute;
      top: 0;
      right: 1px;
      font-size: 36px;
      margin-left: 50px;
      font-weight: 300;
    }

    .font-size-changer-buttons {
      padding: 10px 15px;
      >button {
        padding: 2px;
        padding-right: 20px;
        border: none;
        color:${colors.magellanblue};
      }
      .base-font-size {
        font-size: 1.3rem;
      }
      .large-font-size {
        font-size: 1.5rem;
      }
      .largest-font-size {
        font-size: 1.8rem;
      }
    }

    .caret-icon {
      display: inline-block;
      margin-left: 2px;
      margin-top: 4px;
      vertical-align: middle;
    }

    .caret-icon-flipped {
      -moz-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
      filter: FlipV;
      -ms-filter: "FlipV";
      margin-left: 2px;
    }

    svg {
      position: relative;
      z-index: -1;
      margin-right:3px;
      ${media.tablet`
          margin-top: -3px;
      `}
    }

    span {
      position: relative;
      z-index: -1
    }

    #mobile-lang-toggle{
      >ul>li{
        margin-left:25px;
        border:none!important;
      }

      >ul>li>button{
          font-size: 1.3rem;
          font-weight:600;
      }
    }


/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#app {
    transition: margin-left .5s;
    padding: 20px;
}
   ${media.desktop`
    display:none;
   `}
      ${media.tablet`
    display:block;

   `}
      ${media.phone`
    display:block;
   `}
`;

export default SideNav;
