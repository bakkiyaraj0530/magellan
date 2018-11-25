/*
 *
 * DrugLookup
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { reset } from 'redux-form';
import makeSelectDrugLookup from './selectors';

import DrugLookupForm from '../../components/DrugLookupForm';
import DataTable from '../../components/DrugLookupTable';
import * as ActionCreators from './actions';
import LoadingDots from '../../components/LoadingDots';


export class DrugLookup extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = intialState;
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.DrugLookup.drugSearchResponse) {
      if (nextProps.DrugLookup.drugSearchResponse.data.drugList && nextProps.DrugLookup.drugSearchResponse.data.isError === 'FALSE') {
        this.setState({ results: nextProps.DrugLookup.drugSearchResponse.data.drugList, isLoading: false, showTable: true });
      } else if (nextProps.DrugLookup.drugSearchResponse.data && nextProps.DrugLookup.drugSearchResponse.data.isError === 'FALSE') {
        this.setState({ results: { drugs: [] }, isLoading: false, showTable: true });
      } else {
        this.setState({ isLoading: false, showTable: true });
      }
    }

    if (nextProps.showErrorMessage) {
      window.scrollTo(0, 0);
      this.setState({ isLoading: false, showTable: true });
    }
  }

  submit(values) {
    this.setState({ isLoading: true, showTable: false });
    this.props.actions.getDrugs(values.get('drugName'));
    this.props.dispatch(reset('drugLookupForm'));
  }

  render() {
    return (
      <div>
        {this.state.isLoading && !this.props.showErrorMessage ? <div className="modal-backdrop fade in"></div> : ''}
        {this.state.isLoading && !this.props.showErrorMessage ? <div className="pageSpinner"> <LoadingDots /></div> : ''}
        <Helmet
          title="DrugLookup"
          meta={[
            { name: 'description', content: 'Description of DrugLookup' },
          ]}
        />
        <div className="container">
          <DrugLookupForm onSubmit={this.submit} />
          { this.state.showTable ? <DataTable tableData={this.state.results} /> : null }
        </div>
      </div>
    );
  }
}

DrugLookup.propTypes = {
  actions: PropTypes.object.isRequired,
  DrugLookup: PropTypes.object.isRequired,
  showErrorMessage: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

DrugLookup.defaultProps = {
  showErrorMessage: false,
};

const mapStateToProps = createStructuredSelector({
  DrugLookup: makeSelectDrugLookup(),

});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}
const intialState = {
  results: [],
  colData: [
    { id: 'drugName', name: 'Drug Name', isKey: true },
    { id: 'drugStrengthDesc', name: 'Strength / Form', isKey: false },
    { id: 'tier', name: 'Tier', isKey: false },
    { id: 'genderCode', name: 'Limits / Restrictions', isKey: false },
  ],
  isLoading: false,
  showTable: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrugLookup);
