/*
 *
 * DrugPrice
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import makeSelectDrugPrice from './selectors';
// import messages from './messages';
import DrugPriceInfo from '../../components/DrugPriceInfo';
import * as ActionCreators from './actions';
import LoadingDots from '../../components/LoadingDots';
export class DrugPrice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      results: {},
      drugInfo: [],
    };
  }
  componentDidMount() {
    this.props.actions.getDrugPricingList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.DrugPrice.drugListResponse) {
      if (nextProps.DrugPrice.drugListResponse.data) {
        this.setState({ results: nextProps.DrugPrice.drugListResponse.data, isLoading: false });
      } else {
        this.setState({ isLoading: false, showTable: true });
      }
    }

    if (nextProps.DrugPrice.drugInfo) {
      if (nextProps.DrugPrice.drugInfo.data) {
        this.setState({ drugInfo: nextProps.DrugPrice.drugInfo.data });
      }
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="modal-backdrop fade in"></div>
          <div className="pageSpinner"> <LoadingDots /></div>
        </div>
      );
    }
    return (
      <div>
        {this.state.isLoading ? <div className="modal-backdrop fade in"></div> : ''}
        {this.state.isLoading ? <div className="pageSpinner"> <LoadingDots /></div> : ''}
        <Helmet
          title="DrugPrice"
          meta={[
            { name: 'description', content: 'Description of DrugPrice' },
          ]}
        />
        <DrugPriceInfo drugList={this.state.results} drugName={this.props.DrugPrice.drugName} isLoading={this.props.DrugPrice.isLoading} drugPriceInfo={this.state.drugInfo} actions={this.props.actions} />
      </div>
    );
  }
}

DrugPrice.propTypes = {
  actions: PropTypes.object.isRequired,
  DrugPrice: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DrugPrice: makeSelectDrugPrice(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrugPrice);
