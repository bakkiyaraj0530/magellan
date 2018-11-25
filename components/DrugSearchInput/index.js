/**
*
* PharmacySearchInput
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import Autosuggest from 'react-autosuggest';
import { injectIntl, intlShape } from 'react-intl';
import InputStyle from './input-style';
import SearchIcon from '../PharmacySearchInput/search-icon';
import messages from './messages';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
class DrugSearchInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      selectedSuggestion: [],
    };
  }
  onChange = (event, { newValue }) => {
    if (this.isvalidate(newValue)) {
      this.setState({
        value: newValue,
      });
    }
  };
  onBlur = (e) => {
    if (e.target.value) {
      this.setState({
        selectedSuggestion: this.getSuggestions(e.target.value),
      });
    }
  }
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
      selectedSuggestion: [],
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  getSuggestions = (value) => {
    if (this.isvalidate(value)) {
      const inputValue = value && value.trim().toLowerCase();
      const inputLength = inputValue.length;
      return inputLength === 0 ? [] : this.props.drugList.filter((drug) =>
        drug.drugName.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
    return [];
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion) => {
    this.setState({
      selectedSuggestion: this.getSuggestions(suggestion.drugName),
    });
    if (!this.props.isDrugInfo) {
      this.props.actions.setSelectedDrugData(suggestion);
      browserHistory.push('/member/drug-pricing');
    } else {
      this.props.actions.getDrugPricingInfo(suggestion);
    }
    return suggestion.drugName;
  }

  shouldRenderSuggestions(value) {
    if (typeof value === 'string') {
      return value && value.trim().length > 2;
    }
    return true;
  }

  isvalidate = (newValue) => {
    const regEx = /^([^0-9]*)$/;
    return (regEx.test(newValue) && (newValue.length <= 250));
  }
  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion) => (
    <div id={suggestion.hsn}>
      {suggestion.drugName}
    </div>
  );

  render() {
    const { value, suggestions, selectedSuggestion } = this.state;
    const inputProps = {
      placeholder: this.props.intl.formatMessage(messages.placeholder),
      name: 'drugSearchInput',
      id: 'drugSearchInput',
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
      className: 'price-search-input',
    };
    return (
      <InputStyle>
        <label htmlFor="drugSearchInput" className="sr-only">{this.props.intl.formatMessage(messages.placeholder)}</label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          highlightFirstSuggestion
          shouldRenderSuggestions={this.shouldRenderSuggestions}
        />
        <div className="pharmacy-searchdash-icon"><SearchIcon title="search-icon" titleText="Pharmacy Search" fill="#F4A502" stroke="transparent" width="19" height="19" className="pharmacy-search-icon" /></div>
        { (value && value.length > 2 && selectedSuggestion.length === 0) ? <div className="phamacy-search-result">{this.props.intl.formatMessage(messages.noResultFound)}</div> : ''}
      </InputStyle>
    );
  }
}

DrugSearchInput.propTypes = {
  intl: intlShape.isRequired,
  drugList: React.PropTypes.array.isRequired,
  isDrugInfo: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object,
};

DrugSearchInput.defaultProps = {
  actions: React.PropTypes.object,
};

DrugSearchInput.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

export default injectIntl(DrugSearchInput);
