/* eslint-disable */
/*
 *
 * PlanSection
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { startSubmit, reset } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectPlanSectionreponsecussess, makeSelectPlanSection } from './selectors';

import * as planSelectionactionCreators from './actions';
import messages from './messages';
import Planselection from '../../components/PlanSelection';
import ViewPlanModal from '../../components/ViewPlanModal';
export class PlanSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    // console.log(values.get('gender'));
    const PlanselectionRequestpayload = {
       gender: values.get('gender'),
       age: values.get('ageRange'),
       selectedPlan: window.localStorage.getItem('selectedPlan'),
    }
    // this.setState({ isLoading: true, showTable: false });
    this.props.actions.PlanselectionRequest(PlanselectionRequestpayload);
    window.localStorage.removeItem('selectedPlan');
    // this.props.dispatch(reset('planselection'));
  }
  // componentWillReceiveProps(nextProps) {
  //    console.log('dddddddd',nextProps.PlanSection);
  // }
  render() {
    const { planSection } = this.props;
    console.log('PROPS', planSection);
    // if(planSection) {
    //   browserHistory.push('/member');
    // }
    return (
      <div>
          <Planselection />
          <ViewPlanModal modalID="dashIDModal" onSubmit={this.submit} />
      </div>
    );
  }
}

PlanSection.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  planSection: PropTypes.object,
  doSubmit: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  planSection: makeSelectPlanSection(),
  planSectionresponse: selectPlanSectionreponsecussess(),
});

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(planSelectionactionCreators, dispatch),
    dispatch,
  };
  // return {
  //   doSubmit: (values) => {
  //     console.log(values);
  //     dispatch(startSubmit('planselection'));
  //     dispatch(planSelectionactionCreators.PlanselectionRequest(values));
  //   },
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanSection);
