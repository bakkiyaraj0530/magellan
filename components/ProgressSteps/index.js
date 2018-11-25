/**
*
* ProgressSteps
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProgressStyles from './progress-style';
import ProgressStyleDashboard from './progress-styles-dashboard';

function ProgressSteps(props) {
  const getStepClass = (step) => {
    const stepClass = classNames({ 'btn btn-circle': true, 'active-step': props.stepNumber === step });
    return stepClass;
  };
  if (props.isDashboard) {
    return (
      <ProgressStyleDashboard>
        <div className="stepwizard-dashboard">
          <div className="row stepwizard-row-dashboard">
            <div className="col-xs-12 stepwizard-step-dashboard">
              <button type="button" className={getStepClass('DED')}>1</button>
              <button type="button" className={getStepClass('UG')}>2</button>
              <button type="button" className={getStepClass('IG')}>3</button>
              <button type="button" className={getStepClass('OG')}>4</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 stepwizard-step-dashboard">
              { props.stepNumber === 'DED' &&
              <div>
                <h5 className="stage-title"><FormattedMessage {...messages.yearlyDeductible} /></h5>
                <p className="stage-text hidden-xs"><FormattedMessage {...messages.stage1Text} /></p>
              </div>
            }
              { props.stepNumber === 'UG' &&
              <div>
                <h5 className="stage-title"><FormattedMessage {...messages.intitialCoverage} /></h5>
                <p className="stage-text hidden-xs"><FormattedMessage {...messages.stage2Text} /></p>
              </div>
            }
              { props.stepNumber === 'IG' &&
              <div>
                <h5 className="stage-title"><FormattedMessage {...messages.coverageGap} /></h5>
                <p className="stage-text hidden-xs"><FormattedMessage {...messages.stage3Text} /></p>
              </div>
            }
              { props.stepNumber === 'OG' &&
              <div>
                <h5 className="stage-title"><FormattedMessage {...messages.cataCoverage} /></h5>
                <p className="stage-text hidden-xs"><FormattedMessage {...messages.stage4Text} /></p>
              </div>
            }
            </div>
          </div>
        </div>
      </ProgressStyleDashboard>
    );
  }
  return (
    <ProgressStyles>
      <div className="stepwizard">
        <div className="row stepwizard-row">
          <div className="col-lg-3 col-xs-12 stepwizard-step">
            {props.stepNumber === 'DED' ? <p className="current-stage"><FormattedMessage {...messages.currentStage} /></p> : <p className="current-stage">&nbsp;</p>}
            <div className="col-lg-12 col-sm-1 col-xs-2">
              <button type="button" className={getStepClass('DED')}>1</button>
            </div>
            <div className="col-lg-12 col-sm-10 col-xs-10 stage-description">
              <h5 className="stage-title"><FormattedMessage {...messages.yearlyDeductible} /></h5>
              <p className="stage-text"><FormattedMessage {...messages.stage1Text} /></p>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 stepwizard-step">
            {props.stepNumber === 'UG' ? <p className="current-stage"><FormattedMessage {...messages.currentStage} /></p> : <p className="current-stage">&nbsp;</p>}
            <div className="col-lg-12 col-sm-1 col-xs-2">
              <button type="button" className={getStepClass('UG')}>2</button>
            </div>
            <div className="col-lg-12 col-sm-10 col-xs-10 stage-description">
              <h5 className="stage-title"><FormattedMessage {...messages.intitialCoverage} /></h5>
              <p className="second-stage-text"><FormattedMessage {...messages.stage2Text} /></p>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 stepwizard-step">
            {props.stepNumber === 'IG' ? <p className="current-stage"><FormattedMessage {...messages.currentStage} /></p> : <p className="current-stage">&nbsp;</p>}
            <div className="col-lg-12 col-sm-1 col-xs-2">
              <button type="button" className={getStepClass('IG')}>3</button>
            </div>
            <div className="col-lg-12 col-sm-10 col-xs-10 stage-description">
              <h5 className="stage-title"><FormattedMessage {...messages.coverageGap} /></h5>
              <p className="stage-text"><FormattedMessage {...messages.stage3Text} /></p>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 stepwizard-step">
            {props.stepNumber === 'OG' ? <p className="current-stage"><FormattedMessage {...messages.currentStage} /></p> : <p className="current-stage">&nbsp;</p>}
            <div className="col-lg-12 col-sm-1 col-xs-2">
              <button type="button" className={getStepClass('OG')}>4</button>
            </div>
            <div className="col-lg-12 col-sm-10 col-xs-10 stage-description">
              <h5 className="stage-title"><FormattedMessage {...messages.cataCoverage} /></h5>
              <p className="second-stage-text"><FormattedMessage {...messages.stage4Text} /></p>
            </div>
          </div>
        </div>
      </div>
    </ProgressStyles>
  );
}

ProgressSteps.propTypes = {
  stepNumber: PropTypes.string.isRequired,
  isDashboard: PropTypes.bool,
};

ProgressSteps.defaultProps = {
  isDashboard: false,
};


export default ProgressSteps;
