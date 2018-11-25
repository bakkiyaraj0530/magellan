import styled from 'styled-components';
import media from '../../components/HelperUtils/media-utils';
import colors from '../../components/HelperUtils/branding-colors';

const LandingPageContainer = styled.div`
 margin-top:-35px;
.feature-bar {
    background: #0077C8;
    box-shadow: 0 0 15px rgba(0, 0, 0, .7);
    position: relative;
    z-index: 10;
    color: white;
}
.sl-white{
    color:${colors.magellanwhite};
}

.hero-title {
    line-height: 1.1em;
    margin-top: 30px;
    font-weight:300;
    color:${colors.magellandarkblue};
}
.feature-bar-title {
    font-size: 1.8em;
}

.hero-actions{
    color:${colors.magellan50black};
}

.feature-bar-secondary-links {
    padding-top: .25em;
}

.text-white,
a.text-white {
    color: white;
}

.font-md {
    font-size: 1.2em;
}

.font-lg {
    font-size: 1.3em;
}

.gray {
    color: ${colors.magellan10black};
}

h2{
    font-size:2.8rem;
    color:${colors.magellanblue};
    font-weight:300;
}

.feature-bar-primary,
.feature-bar-secondary {
    padding: 15px 0 15px;
}

.feature-bar-secondary {
    background: rgba(0, 0, 0, .15);
    opacity: .8;
    background: -webkit-linear-gradient(#009AD5, #1D76BC); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#009AD5, #1D76BC); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#009AD5, #1D76BC); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#009AD5, #1D76BC); /* Standard syntax (must be last) */
}

.no-margin-bottom {
    margin-bottom: 0;
}

.border-dark {
    border-color: rgba(0, 0, 0, .20)
}

.btn-xl {
    font-size: 18px;
    line-height: 1.2;
    padding: 10px 16px;
}

.feature-bar-buttons {
    margin-top: 10px;
}

.find-pharmacy-by-zip-container p {
    margin-bottom: 20px;
}

.textfield--floating-label.is-focused .textfield__label,
.stay-focused.textfield__label {
    color: #999;
}

#pharmacyLogos>ol.carousel-indicators {
    display: none!important;
}

#pharmacyLogos>.carousel-control {
    background: none;
}

.glyphicon-chevron-left:before, .glyphicon-chevron-right:before{
    color:${colors.magellanblue};
}

#pharmacyLogos>.carousel-inner>.item>.text-center>img {
   margin-right:10px;
   display: inline!important;
}
.premiumAlert {font-size: 125%;}

.sl-secure-landing-icons{
    left:35px;
    top:-5px;
}

.featured-wrapper {
    background: linear-gradient(to bottom,
    #ffffff 87%,
    #f8f8f8 100%);
    position: relative;
    z-index: 10;
    padding: 20px 0;
}
.featured-wrapper__col-left {
    border-right: 1px solid #eee;
}
.featured-wrapper__col-right {
    border-left: 1px solid #eee;
    margin-left: -1px;
}
.featured-wrapper .carousel-control {
    width: auto;
    padding: 0 15px;
}

.landing-icon{
    width:4.8rem;
    height:4.8rem;
}

.landing-icon-small{
    width:1.8rem;
    height:1.8rem;
}
.shop-enroll-btn{
    background-color:${colors.magellandeeporange};
    border-color:${colors.magellandeeporange};
    color:${colors.magellanwhite};
}
.btn{
    border-radius:1.2rem;
}
${media.phone`

    .feature-bar-benefits.right-border {
        border: none;
    }
    .featured-wrapper__col-left {
        border-right: none;
    }
    .featured-wrapper__col-right {
        border-left: none;
        margin-left: 0;
    }

`}

`;

export default LandingPageContainer;
