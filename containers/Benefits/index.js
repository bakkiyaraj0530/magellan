/*
 *
 * Benefits
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { FormattedMessage, FormattedNumber, injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectBenefits from './selectors';
import messages from './messages';
import Graph from '../../components/Graph';
import Stages from '../../components/ProgressSteps';
import GraphLegend from '../../components/GraphLegend';
import colors from '../../components/HelperUtils/branding-colors';
import * as ActionCreators from './actions';
import media from '../../components/HelperUtils/media-utils';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';
import DashboardButton from '../../components/DashboardButton';
import LoadingDots from '../../components/LoadingDots';
const TotalSection = styled.div`
  border-top:1px solid ${colors.magellan10black};
  border-bottom:1px solid ${colors.magellan10black};
  margin-top:20px;
  margin-bottom:20px;
  padding-bottom:2.5rem;

  p{
    font-weight:500;
    font-size:1.8rem;
    color:${colors.magellandarkblue} !important;
  }

  h5{
    font-weight:300;
    padding-top:3rem;
  }
  .total-text{
    font-size:2.6rem;
  }

   ${media.phone`
      div{
        padding:0px;
      }
      .remaining-deductible-title{
        white-space:nowrap;
      }
   `}
`;

const UpdatingOverlay = styled.div`
    background:${colors.magellanwhite};
    opacity:.2;
    z-index:1000;
    text-align:center;
    height:300px;
`;

const BenefitDashboard = styled.div`
  margin-top:3rem;
  .dashboard-steps-title{
    color:${colors.magellanblack};
    font-weight: 300;
  }
  .dashboard-graph-title{
    color:${colors.magellanblack};
    margin-left:4rem;
    font-weight: 300;
  }
  .dashboard-graph-span{
    margin-left:4rem;
    font-weight: 500;
    letter-spacing:0;
    line-height:27px;
    color:#005398;
    padding-right: 25px;
    margin-top: 10px;
    ${mobile.handheld`
        margin-left: 0 !important;
        padding: 0 30px 15px 30px !important;
    `}
  }
  .button-row{
    margin-top:4rem;
    ${mobile.handheld`
        margin-top: 0;
    `}
  }
  .dashboard-left-align{
    padding-right: 0;
    padding-left: 0;
    .mag-dash-head{
      font-weight: 700;
    }
    h3{
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
  ${media.tablet`
    text-align:center;
    margin-top:1rem;
    .dashboard-graph-title{
      color:${colors.magellanblack};
      margin-left:0px;
      margin-top: 20px;
      font-size: 3.0rem;
      ${mobile.handheld`
          margin-top: 0;
          font-size: 1.4rem;
      `}
    }
    .dashboard-graph-span{
      margin-left:4rem;
      margin-top: 25px;
      padding: 0px 60px;
    }
    .mag-dash-total{
      h4{
        font-weight: 700;
      }
    }
    .dashboard-left-align{
      h5{
        margin-left:0;
      }
      h3{
        font-weight: 700;
        font-size: 1.8rem;
      }
      text-align:left;
      padding-left: 0;
    }
    .legend-text{
      white-space:nowrap;
    }
  `}
`;

const BenefitPage = styled.div`
  margin-bottom:4rem;
    h1{
      font-weight:300;
    }
    .mag-benefit-lowin{
      margin-top: 0;
    }
    .mag-benefit-lowsubhead{
      ${mobile.handheld`
          font-size: 1.4rem;
          margin-bottom: 20px;
      `}
    }
    .mag-benefit-lowsub{
      padding: 0 200px;
      ${tablet.handheld`
          padding: 0 20px;
      `}
      ${mobile.handheld`
          padding: 0 10px;
      `}
      h2{
        margin-top: 0;
        font-size: 2.0rem;
        font-weight: 500;
        margin-bottom: 30px;
        line-height:27px;
        padding: 0 80px;
        ${tablet.handheld`
            padding: 0 50px;
        `}
        ${mobile.handheld`
            padding: 0 30px;
        `}
      }
      p{
        margin-bottom: 20px;
      }

    }
    .extra-help-explanation{
      padding: 0 80px;
      ${tablet.handheld`
          padding: 0;
      `}
      >h2{
        font-weight:500;
        margin-bottom:3.0rem;
      }
      p{
        margin-left: 25px;
        margin-bottom: 0;
      }
    }
    .benefits-graph{
      padding-right:0px;
    }
    .mag-mobile-stagetxt{
      ${mobile.handheld`
          font-size: 1.4rem;
      `}
    }
    .mag-stagefour-txt{
      padding: 0 300px;
      line-height: 27px;
      ${tablet.handheld`
        padding: 0 70px;
        line-height: 27px;
        font-weight: 500;
      `}
    }
    .benefits-graph-legend{
      padding-left:0px;
      ${mobile.handheld`
          padding-left:15px;
      `}
      >h3{
        font-weight:500;
      }
    }
  `;
export class Benefits extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = intialState;
  }

  componentDidMount() {
    this.props.actions.getBenefits();
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.Benefits.benefitsResponse && this.state.accums.length === 0) {
      if (nextProps.Benefits.benefitsResponse.data && nextProps.Benefits.benefitsResponse.data.isError === false) {
        if (nextProps.Benefits.benefitsResponse.data.accumulation.BenefitStage === 'UG' || nextProps.Benefits.benefitsResponse.data.accumulation.BenefitStage === 'IG') {
          this.props.actions.getBenefitLimits();
        } else {
          this.setState({ accums: nextProps.Benefits.benefitsResponse.data.accumulation, isLoading: false });
        }
      }
    }
    if (nextProps.Benefits.benefitLimitsResponse) {
      if (nextProps.Benefits.benefitLimitsResponse.data) {
        this.setState({ accumLimits: nextProps.Benefits.benefitLimitsResponse.data, accums: nextProps.Benefits.benefitsResponse.data.accumulation, isLoading: false });
      }
    }
    if (nextProps.Benefits.showErrorMessage) {
      window.scrollTo(0, 0);
      this.setState({ isLoading: false, error: true });
    }
  }

  calcRemainingDeductible(amount1, amount2) {
    const total = amount1 - amount2;
    return total.toFixed(2);
  }

  render() {
    if (!this.state.isLoading && this.state.error) {
      return (
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-danger text-center">Error: Could not retrieve Benefit Information at this time.</div>
          </div>
        </div>
      );
    }
    if (this.props.isDashboard) {
      if (this.state.isLoading && !this.state.error) {
        return (
          <div className="row">
            <div className="col-xs-12">
              <div className="loading-dots"> <LoadingDots /></div>
              <UpdatingOverlay></UpdatingOverlay>
            </div>
          </div>
        );
      }
      const dashGraphVal = { sidePadding: 10, cutoutPercentage: 40 };
      const dashLegendStyle = { width: 15, height: 15 };
      return (
        <BenefitDashboard>
          <div className="row">
            <div className="col-lg-offset-1 col-lg-5 col-xs-12">
              <h5 className="dashboard-steps-title"><FormattedMessage {...messages.yourBenefitStage} /></h5>
              <Stages stepNumber={this.state.accums.BenefitStage} isDashboard />
            </div>
            <div className="col-lg-5 col-xs-12">
              {this.state.accums.BenefitStage === 'DED' && <h5 className="dashboard-graph-title"><FormattedMessage {...messages.yearlyDeductibleStage} /></h5>}
              {this.state.accums.BenefitStage === 'UG' && <h5 className="dashboard-graph-title"><FormattedMessage {...messages.initialCoverage} /></h5>}
              {this.state.accums.BenefitStage === 'IG' && <h5 className="dashboard-graph-title"><FormattedMessage {...messages.coverageGap} /></h5>}
              {this.state.accums.BenefitStage === 'OG' &&
              <div>
                <h5 className="dashboard-graph-title"><FormattedMessage {...messages.cataGap} /></h5>
                <h2 className="dashboard-graph-span"><FormattedMessage {...messages.stage4LimitReached} /></h2>
              </div>}
              {this.state.accums.BenefitStage !== 'OG' &&
              <div className="mag-dash-total">
                {this.state.accums.BenefitStage === 'DED' && <h4 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.totalDedLimit} />:&nbsp;$<FormattedNumber value={this.state.accums.PlanDeductibleLimit.toFixed(2)} /></h4>}
                {this.state.accums.BenefitStage === 'UG' && <h4 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.initialCoverageSpendLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planICL.toFixed(2)} /></h4>}
                {this.state.accums.BenefitStage === 'IG' && <h4 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.totalOOPLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planTroopLimit.toFixed(2)} /></h4>}
                {this.state.accums.PlanDeductibleLimit === '' || this.state.accums.PlanDeductibleLimit === null ? <h3 className="hidden-sm hidden-md hidden-lg col-lg-12"><FormattedMessage {...messages.zeroDeductible} /></h3> : null}

                <div className="col-md-offset-0 col-sm-offset-2 col-md-4 col-sm-3 col-xs-5">
                  {this.state.accums.BenefitStage === 'DED' && <Graph spaceVal={dashGraphVal} totalValue={this.state.accums.PlanDeductibleLimit} data={[this.state.accums.DeductibleTotal.toFixed(2), this.state.accums.RemainingDeductible.toFixed(2)]} isDashboard />}
                  {this.state.accums.BenefitStage === 'UG' && <Graph spaceVal={dashGraphVal} totalValue={this.state.accumLimits.planICL.toFixed(2)} data={[this.state.accums.GcdcAccum.toFixed(2), this.calcRemainingDeductible(this.state.accumLimits.planICL, this.state.accums.GcdcAccum)]} isDashboard />}
                  {this.state.accums.BenefitStage === 'IG' && <Graph spaceVal={dashGraphVal} totalValue={this.state.accumLimits.planTroopLimit} data={[this.state.accums.TroopAccum.toFixed(2), this.calcRemainingDeductible(this.state.accumLimits.planTroopLimit, this.state.accums.TroopAccum)]} isDashboard />}
                </div>
                <div className="col-lg-8 col-sm-7 col-xs-7 dashboard-left-align">
                  {this.state.accums.BenefitStage === 'DED' && <h3 className="hidden-xs"><FormattedMessage {...messages.totalDedLimit} />:&nbsp;$<FormattedNumber value={this.state.accums.PlanDeductibleLimit} /></h3>}
                  {this.state.accums.BenefitStage === 'UG' && <h5 className="hidden-xs mag-dash-head"><FormattedMessage {...messages.initialCoverageSpendLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planICL} /></h5>}
                  {this.state.accums.BenefitStage === 'IG' && <h5 className="hidden-xs mag-dash-head"><FormattedMessage {...messages.totalOOPLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planTroopLimit} /></h5>}
                  {this.state.accums.BenefitStage === 'DED' &&
                    <div>
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.amountApplied} />} legendColor="#509E2F" legendValue={this.state.accums.DeductibleTotal.toFixed(2)} />
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.remainingDed} />} legendColor="#004B98" legendValue={this.state.accums.RemainingDeductible.toFixed(2)} />
                    </div>
                  }
                  {this.state.accums.BenefitStage === 'UG' &&
                    <div>
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.totalDrugCost} />} legendColor="#509E2F" legendValue={this.state.accums.GcdcAccum.toFixed(2)} />
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.remainingAmount} />} legendColor="#004B98" legendValue={this.calcRemainingDeductible(this.state.accumLimits.planICL, this.state.accums.GcdcAccum)} />
                    </div>
                  }
                  {this.state.accums.BenefitStage === 'IG' &&
                    <div>
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.amountApplied} />} legendColor="#509E2F" legendValue={this.state.accums.TroopAccum.toFixed(2)} />
                      <GraphLegend legendStyle={dashLegendStyle} legendText={<FormattedMessage {...messages.remainingAmount} />} legendColor="#004B98" legendValue={this.calcRemainingDeductible(this.state.accumLimits.planTroopLimit, this.state.accums.TroopAccum)} />
                    </div>
                  }
                </div>
              </div>
              }
            </div>
            <div className="col-xs-12 button-row">
              <div className="text-center">
                <DashboardButton btnText={this.props.intl.formatMessage(messages.fullBenefitSummary)} btnLink="/member/benefits" type="button" />
              </div>
            </div>
          </div>
        </BenefitDashboard>
      );
    }
    if (this.state.isLoading && !this.props.showErrorMessage) {
      return (
        <div>
          <div className="loading-backdrop fade in"></div>
          <div className="pageSpinner"><LoadingDots /></div>
        </div>
      );
    }
    const benefitGraphVal = { sidePadding: 30, cutoutPercentage: 60 };
    const benLegendStyle = { width: 18, height: 18 };
    return (
      <BenefitPage>
        <Helmet
          title="Benefits"
          meta={[
            { name: 'description', content: 'Description of Benefits' },
          ]}
        />

        <div className="row">
          <div className="col-xs-12">
            <h1 className="text-center mag-benefit-lowin"><FormattedMessage {...messages.benefitSummary} /></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-0 col-md-12 col-sm-offset-1 col-sm-11 col-xs-12">
            <Stages stepNumber={this.state.accums.BenefitStage} />
          </div>
        </div>
        <div className="row">
          {this.state.accums.BenefitStage === 'DED' && <h1 className="text-center mag-mobile-stagetxt"><FormattedMessage {...messages.yearlyDeductibleStage} /></h1>}
          {this.state.accums.BenefitStage === 'UG' && <h1 className="text-center mag-mobile-stagetxt"><FormattedMessage {...messages.initialCoverage} /></h1>}
          {this.state.accums.BenefitStage === 'IG' && <h1 className="text-center mag-mobile-stagetxt"><FormattedMessage {...messages.coverageGap} /></h1>}
          {this.state.accums.BenefitStage === 'OG' &&
          <div>
            <h1 className="text-center mag-mobile-stagetxt"><FormattedMessage {...messages.cataGap} /></h1>
            <h2 className="text-center mag-stagefour-txt"><FormattedMessage {...messages.stage4LimitReached} /></h2>
          </div>}
          {this.state.accums.BenefitStage !== 'OG' &&
          <div>
            {this.state.accums.BenefitStage === 'DED' && <h3 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.totalDedLimit} />:&nbsp;$<FormattedNumber value={this.state.accums.PlanDeductibleLimit.toFixed(2)} /></h3>}
            {this.state.accums.BenefitStage === 'UG' && <h3 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.initialCoverageSpendLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planICL} /></h3>}
            {this.state.accums.BenefitStage === 'IG' && <h3 className="hidden-sm hidden-md hidden-lg col-xs-12 text-center"><FormattedMessage {...messages.totalOOPLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planTroopLimit.toFixed(2)} /></h3>}
            {this.state.accums.PlanDeductibleLimit === '' || this.state.accums.PlanDeductibleLimit === null ? <h3 className="hidden-sm hidden-md hidden-lg col-xs-12"><FormattedMessage {...messages.zeroDeductible} /></h3> : null}

            <div className="col-lg-offset-4 col-sm-offset-3 col-lg-2 col-sm-3 col-xs-5 benefits-graph">
              {this.state.accums.BenefitStage === 'DED' && <Graph spaceVal={benefitGraphVal} totalValue={this.state.accums.PlanDeductibleLimit} data={[this.state.accums.DeductibleTotal.toFixed(2), this.state.accums.RemainingDeductible.toFixed(2)]} isDashboard={false} />}
              {this.state.accums.BenefitStage === 'UG' && <Graph spaceVal={benefitGraphVal} totalValue={this.state.accumLimits.planICL} data={[this.state.accums.GcdcAccum.toFixed(2), this.calcRemainingDeductible(this.state.accumLimits.planICL, this.state.accums.GcdcAccum)]} isDashboard={false} />}
              {this.state.accums.BenefitStage === 'IG' && <Graph spaceVal={benefitGraphVal} totalValue={this.state.accumLimits.planTroopLimit} data={[this.state.accums.TroopAccum.toFixed(2), this.calcRemainingDeductible(this.state.accumLimits.planTroopLimit, this.state.accums.TroopAccum)]} isDashboard={false} />}
            </div>
            <div className="col-lg-5 col-md-4 col-sm-6 col-xs-7 benefits-graph-legend">
              {this.state.accums.BenefitStage === 'DED' && <h3 className="hidden-xs"><FormattedMessage {...messages.totalDedLimit} />:&nbsp;$<FormattedNumber value={this.state.accums.PlanDeductibleLimit} /></h3>}
              {this.state.accums.BenefitStage === 'UG' && <h3 className="hidden-xs"><FormattedMessage {...messages.initialCoverageSpendLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planICL} /></h3>}
              {this.state.accums.BenefitStage === 'IG' && <h3 className="hidden-xs"><FormattedMessage {...messages.totalOOPLimit} />:&nbsp;$<FormattedNumber value={this.state.accumLimits.planTroopLimit} /></h3>}
              {this.state.accums.PlanDeductibleLimit === 82 && (this.state.accums.BenefitStage !== 'UG' && this.state.accums.BenefitStage !== 'IG') && <h5><FormattedMessage {...messages.limit82} /></h5>}
              {this.state.accums.BenefitStage === 'DED' &&
                <div>
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.amountApplied} />} legendColor="#509E2F" legendValue={this.state.accums.DeductibleTotal.toFixed(2)} />
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.remainingDed} />} legendColor="#004B98" legendValue={this.state.accums.RemainingDeductible.toFixed(2)} />
                </div>
              }
              {this.state.accums.BenefitStage === 'UG' &&
                <div>
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.totalDrugCost} />} legendColor="#509E2F" legendValue={this.state.accums.GcdcAccum.toFixed(2)} />
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.remainingAmount} />} legendColor="#004B98" legendValue={this.calcRemainingDeductible(this.state.accumLimits.planICL, this.state.accums.GcdcAccum)} />
                </div>
              }
              {this.state.accums.BenefitStage === 'IG' &&
                <div>
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.amountApplied} />} legendColor="#509E2F" legendValue={this.state.accums.TroopAccum.toFixed(2)} />
                  <GraphLegend legendStyle={benLegendStyle} legendText={<FormattedMessage {...messages.remainingAmount} />} legendColor="#004B98" legendValue={this.calcRemainingDeductible(this.state.accumLimits.planTroopLimit, this.state.accums.TroopAccum)} />
                </div>
              }
            </div>
          </div>
          }
        </div>
        <div className="row">
          <TotalSection className="col-lg-offset-2 col-lg-9 col-sm-offset-1 col-sm-10 col-xs-12">
            <div className="col-md-offset-1 col-md-5 col-xs-6">
              <h5 className="text-center"><FormattedMessage {...messages.totalDrugCost} /></h5>
              <p className="text-center total-text">$<FormattedNumber value={this.state.accums.GcdcAccum.toFixed(2)} /></p>
              {this.state.accums.BenefitStage !== 'DED' &&
              <div>
                <h5 className="text-center"><FormattedMessage {...messages.totalDeductible} /></h5>
                <p className="text-center total-text">$<FormattedNumber value={this.state.accums.DeductibleTotal.toFixed(2)} /></p>
              </div>
              }
            </div>
            <div className="col-md-4 col-xs-6">
              <h5 className="text-center"><FormattedMessage {...messages.troop} /></h5>
              <p className="text-center total-text">$<FormattedNumber value={this.state.accums.TroopAccum.toFixed(2)} /></p>
              {this.state.accums.BenefitStage !== 'DED' &&
              <div>
                <h5 className="text-center remaining-deductible-title"><FormattedMessage {...messages.remainingDed} /></h5>
                <p className="text-center total-text">$<FormattedNumber value={this.state.accums.RemainingDeductible.toFixed(2)} /></p>
              </div>
              }
            </div>
          </TotalSection>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center mag-benefit-lowsubhead"><FormattedMessage {...messages.lis} /></h1>
          </div>
          <div className="col-xs-12 mag-benefit-lowsub">
            {this.state.accums.Lics === 0 && <h2 className="text-center"><FormattedMessage {...messages.notEnrolled} /></h2>}
            {this.state.accums.Lics > 0 && <h2 className="text-center"><FormattedMessage {...messages.lis14} /></h2>}
            {this.state.accums.Lics > 0 && <p><FormattedMessage {...messages.evidenceOfCoverage} /></p>}
            {this.state.accums.Lics > 0 && <p><FormattedMessage {...messages.medicarePartBMsg} /></p>}

          </div>
          <div className="col-md-offset-1 col-md-10 col-xs-offset-0 col-xs-12 extra-help-explanation">

            {this.state.accums.Lics === 0 && <p><FormattedMessage {...messages.extraHelpMsg} /></p>}
            {this.state.accums.Lics === 0 && <p><strong><FormattedMessage {...messages.qualifyMsg} />:</strong></p>}
            {this.state.accums.Lics > 0 && <p><strong><FormattedMessage {...messages.questionsMsg} />:</strong></p>}
            <ul>
              <li><FormattedMessage {...messages.medicarePhoneLine} /></li>
              <li><FormattedMessage {...messages.ssoPhoneLine} /></li>
              <li><FormattedMessage {...messages.stateMedicaidMsg} /></li>
            </ul>
          </div>
        </div>
      </BenefitPage>
    );
  }
}

Benefits.propTypes = {
  actions: PropTypes.object.isRequired,
  Benefits: PropTypes.object.isRequired,
  showErrorMessage: PropTypes.bool,
  isDashboard: PropTypes.bool,
  intl: intlShape.isRequired,

};

Benefits.defaultProps = {
  showErrorMessage: false,
  isDashboard: false,
};

const intialState = {
  accums: [],
  isLoading: true,
  accumLimits: [],
};
Benefits.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
const mapStateToProps = createStructuredSelector({
  Benefits: makeSelectBenefits(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Benefits));
