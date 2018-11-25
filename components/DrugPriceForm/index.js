/**
*
* DrugPriceForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import Autosuggest from 'react-autosuggest';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import TextFieldGroup from '../../components/TextFieldGroup';
import messages from './messages';
import { validate } from './validate';
import Button from '../Button';
import IndicatesField from '../IndicatesField';
import DrugPriceStyles from './drug-price-styles';
import * as ActionCreators from '../../containers/DrugPrice/actions';


class DrugPriceForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      errors: false,
      value: '',
      suggestions: [],
      drugList: [],
      drugInfo: [],
      selectedDrug: null,
    };
    this.updateDropdowns = this.updateDropdowns.bind(this);
  }

  componentWillMount() {
    this.setState({ drugs: this.props.drugList, errors: false });
  }
  componentDidMount() {
    document.getElementById('drugStrengthFormSection').style.display = 'none';
    document.getElementById('qtySection').style.display = 'none';
    document.getElementById('supplySection').style.display = 'none';
    document.getElementById('mailOrderSection').style.display = 'none';
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ drugInfo: nextProps.drugPriceInfo });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.drugs.filter((drug) =>
      drug.drugName.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => {
    this.props.actions.getDrugPricingInfo(suggestion.hsn);
    document.getElementById('drugStrengthFormSection').style.display = 'block';
    return suggestion.drugName;
  }

  shouldRenderSuggestions(value) {
    return value.trim().length > 2;
  }

  updateDropdowns(e) {
    const gsn = Number(e.target.value);
    const drugs = this.state.drugInfo;
    const selectedDrug = _.find(drugs, { gsn });
    this.setState({ selectedDrug });
    document.getElementById('qtySection').style.display = 'block';
    document.getElementById('supplySection').style.display = 'block';
    document.getElementById('mailOrderSection').style.display = 'block';
  }
  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => (
    <div id={suggestion.hsn}>
      {suggestion.drugName}
    </div>
  );

  render() {
    const { handleSubmit, pristine, reset, submitting, intl } = this.props;
    const { value } = this.state;
    const inputProps = {
      placeholder: intl.formatMessage(messages.threeChars),
      value,
      onChange: this.onChange,
      className: 'form-control',
    };
    const info = this.state.drugInfo.map((drug) => (
      <option key={drug.gsn} value={drug.gsn}>{drug.strength} {drug.dosageFormDesc}</option>
      ));
    return (
      <div className="container">
        <DrugPriceStyles onSubmit={handleSubmit} className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-4">
              <IndicatesField className="help-block required required-indicate"><FormattedMessage {...messages.fieldRequired} /></IndicatesField>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contactReason" className="control-label col-sm-3"><FormattedMessage {...messages.drugName} />:</label>
            <div className="col-sm-4 required">
              <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                highlightFirstSuggestion
                shouldRenderSuggestions={this.shouldRenderSuggestions}
              />
            </div>
          </div>
          <div className="form-group" id="drugStrengthFormSection">
            <label htmlFor="drugStrength" className="control-label col-sm-3"><FormattedMessage {...messages.drugStrength} />/<FormattedMessage {...messages.drugForm} />:</label>
            <div className="col-sm-4 required">
              <Field name="drugStrength" id="drugStrength" component="select" type="select" className="form-control" required="true" onChange={this.updateDropdowns} >
                <option>{this.props.intl.formatMessage(messages.select)}</option>
                {info}
              </Field>
            </div>
          </div>
          <div className="form-group" id="qtySection">
            <label htmlFor="qty" className="control-label col-sm-3"><FormattedMessage {...messages.qtyLabel} />:</label>
            <div className="col-sm-1 required">
              <Field name="qty" id="qty" label={this.props.intl.formatMessage(messages.qtyLabel)} placeholder="QTY" component={TextFieldGroup} type="input" classname="form-control" maxlength="3" minLength="1" value="1" />
            </div>
            {this.state.selectedDrug !== null &&
            <div className="col-sm-1 drug-form-text">
              <p>{this.state.selectedDrug.dosageFormDesc}(s) per</p>
            </div>}
            <div className="col-sm-2" >
              <Field name="frequency" id="frequency" component="select" type="select" className="form-control" required="true" >
                <option value="1">{this.props.intl.formatMessage(messages.day)}</option>
                <option value="7">{this.props.intl.formatMessage(messages.week)}</option>
                <option value="31">{this.props.intl.formatMessage(messages.month)}</option>
              </Field>
            </div>
          </div>
          <div className="form-group" id="supplySection">
            <label htmlFor="mailOrder" className="control-label col-sm-3"><FormattedMessage {...messages.daysSupply} />:</label>
            <div className="col-sm-4 required">
              <div className="radio-inline">
                <label htmlFor="30days">
                  <Field name="daySupply" id="30days" component="input" type="radio" value="30" checked />
                30 days
              </label>
              </div>
              <div className="radio-inline">
                <label htmlFor="60days">
                  <Field name="daySupply" id="60days" component="input" type="radio" value="60" />
                60 Days
              </label>
              </div>
              <div className="radio-inline">
                <label htmlFor="90days">
                  <Field name="daySupply" id="90days" component="input" type="radio" value="90" />
                90 Days
              </label>
              </div>
            </div>
          </div>
          <div className="form-group" id="mailOrderSection">
            <div className="col-sm-offset-3 col-sm-6">
              <h5 className="text-warning"><FormattedMessage {...messages.mailOrderSupply} /></h5>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-4 col-md-6 col-sm-offset-0 col-sm-6">
              <Button type="submit" btnStyle="btn-primary submit-btn" btnText="Submit" disabled={this.state.errors || pristine || submitting} />
              <Button type="button" btnStyle="btn-link clear-btn" btnText="Clear" disabled={pristine || submitting} onClick={reset} />
            </div>
          </div>
        </DrugPriceStyles>
      </div>
    );
  }
}

DrugPriceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  drugList: PropTypes.array.isRequired,
  intl: intlShape.isRequired,
  actions: PropTypes.object.isRequired,
  drugPriceInfo: PropTypes.array.isRequired,
};

DrugPriceForm.defaultProps = {
  characterCount: '',
  selectedReason: '',
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}
const selector = formValueSelector('drugPriceForm'); // <-- same as form name
const reduxformWrapper = reduxForm({ form: 'drugPriceForm', validate });
const connectWrapper = connect((state) => ({ selectedReason: selector(state, 'contactReason') }), mapDispatchToProps);
export default injectIntl(compose(reduxformWrapper, connectWrapper)(DrugPriceForm));

