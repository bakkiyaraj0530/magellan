import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const ProgressStyleDashboard = styled.div`

.active-step {
    background-color:#509E2F !important;
}
.stepwizard-step-dashboard p {
    margin-top: 5px;
    padding: 0 30px 0 0;
    color:${colors.magellandarkblue};
}

.stepwizard-dashboard {
    display: table;
    width: 100%;
    position: relative;
    margin-bottom:20px;
}


.stepwizard-row-dashboard:before {
    top: 20px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 28%;
    height: 1px;
    background-color: ${colors.magellan10black};
    margin-left:1.5rem;

}

.stepwizard-step-dashboard {
    text-align:left;
    position: relative;
}

.stepwizard-step-dashboard button{
        margin-right:1em;
}

.btn-circle {
    width: 1.9rem;
    height: 1.9rem;
    text-align: center;
    padding: 0 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 3rem;
    background-color:${colors.magellandarkblue};
    color:${colors.magellanwhite};
    cursor: default;
}

.btn-circle.active-step {
    width: 4rem;
    height: 4rem;
    font-size:3rem;
    font-weight:500;
    margin-right:.7rem;
    line-height: 1;
}

.current-stage{
    text-transform: uppercase;
    color:${colors.magellanblack} !important;
    font-weight:600;
}

.stage-title{
     font-weight:700;
     margin-bottom: 0;
}
.stage-text{
    text-align: justify !important;
}




${media.tablet`
    border-bottom:1px solid ${colors.magellan5black};
    .stepwizard-step-dashboard {
        text-align:center;
        position: relative;
    }
    .stepwizard-step-dashboard p{
        padding: 0 110px;
    }

    .stepwizard-row-dashboard:before {
        top: 20px;
        bottom: 0;
        position: absolute;
        content: " ";
        width: 15%;
        height: 1px;
        background-color: ${colors.magellan10black};
        margin-left:31rem;

    }
    .stage-title{
         margin-top: 20px;
    }
    .stage-text{
        text-align: center!important;
    }
`}

${media.phone`
  border-bottom:1px solid ${colors.magellan10black};
  margin-bottom:20px;
      .stepwizard-row-dashboard:before {
        top: 20px;
        bottom: 0;
        position: absolute;
        content: " ";
        width: 30%;
        height: 1px;
        background-color: ${colors.magellan10black};
        margin-left:14rem;

    }
    .stepwizard-step-dashboard p{
        padding: 0;
    }
`}


`;

export default ProgressStyleDashboard;
