import styled from 'styled-components';
import media from '../HelperUtils/media-utils';
import colors from '../HelperUtils/branding-colors';

const ProgressStyle = styled.div`

button{
    font-weight:700;
}
.active-step {
    background-color:#509E2F !important;
}
.stepwizard-step p {
    margin-top: 10px;
    color:${colors.magellandarkblue};
}

.stepwizard {
    display: table;
    width: 100%;
    position: relative;
    margin-bottom:20px;
}

.stepwizard-row:before {
    top: 55px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 78%;
    height: 2px;
    background-color: ${colors.magellan5black};
    margin-left:13rem;

}
.stage-description{
  padding-right: 5px;
  padding-left: 5px;
}
.stepwizard-step {
    text-align: center;
    position: relative;
    padding-right: 0;
    padding-left: 0;
}

.stepwizard-step p {
    margin-top: 10px;
    color:${colors.magellandarkblue};
}

.btn-circle {
  width: 4rem;
  height: 4rem;
  text-align: center;
  padding: 6px 0;
  font-size: 1.6rem;
  line-height: 1.428571429;
  border-radius: 3rem;
  background-color:${colors.magellandarkblue};
  color:${colors.magellanwhite};
  cursor: default;
}

.current-stage{
    text-transform: uppercase;
    color:${colors.magellanblack} !important;
    font-weight:600;
}

.stage-title{
     font-weight:700;
}
.stage-text{
    text-align: center;
}
.second-stage-text{
  text-align: center;
  padding: 0 35px;
}

.btn-circle.active-step {
    font-size:2.4rem;
    font-weight:500;
    padding: 0px 0px;
}




${media.tablet`
    .stepwizard-step {
        text-align:left;
    }
    .stepwizard-step p {
        margin:2px 0px 0px 0px;
    }
    .stage-text{
        margin:0px;
        text-align: left !important;
    }
    .second-stage-text{
      text-align: left !important;
      padding: 0;
    }
    .stage-description{
      padding-right: 15px;
      padding-left: 15px;
    }
    .stage-title{
        margin:5px 0px 0px 0px;
    }
    .stepwizard-row:before {
    width: 2px;
    background-color: black;
    height: 300px;
    float: left;
    position: absolute;
    top: 2.1rem;
    bottom: 0;
    position: absolute;
    background-color: ${colors.magellan5black};
    margin-left:3.5rem;

    }
    .current-stage{
        margin-left:7.2rem!important;
        height: 14px;
        margin-top: 8px !important;
    }

`}
${media.phone`
  border-bottom:1px solid ${colors.magellan10black};
  margin-bottom:20px;

.stepwizard-step {
    text-align: center;
    position: relative;
    padding-right:0px;

}
    .stepwizard-row:before {
    width: 2px;
    background-color: black;
    height: 405px;
    float: left;
    position: absolute;
    top: 2.2rem;
    bottom: 0;
    position: absolute;
    background-color: ${colors.magellan5black};
    margin-left:3.5rem;

    }
    .stage-text{
      padding-right: 15px;
    }
    .second-stage-text{
      padding-right: 20px;
    }
    .current-stage{
        margin-left:6.8rem !important;
        text-align: left !important;
    }
    .stage-title{
      text-align: left !important;
    }
    .stage-description{
      padding-right: 5px;
      padding-left: 5px;
    }
`}


`;

export default ProgressStyle;
