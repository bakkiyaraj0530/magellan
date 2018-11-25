/**
*
* PharmacySearchInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
import { injectIntl, intlShape } from 'react-intl';
import InputStyle from './input-style';
import SearchIcon from './search-icon';
import messages from './messages';
// import { FormattedMessage } from 'react-intl';>
// import messages from './messages';

class PharmacySearchInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const cssClasses = {
      input: 'form-control pharmacy-input-control',
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="suggestion-item">
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>);

    const inputProps = {
      type: 'text',
      value: this.props.address,
      onChange: this.props.handleChange,
      placeholder: this.props.intl.formatMessage(messages.placeholder),
      name: 'pharmacySearchInput',
      id: 'pharmacySearchInput',
    };

    const myStyles = {
      autocompleteContainer: { zIndex: 10, top: 35, textAlign: 'left' },
    };

    return (
      <InputStyle className="input-group">
        <label htmlFor="pharmacySearchInput" className="sr-only">{this.props.intl.formatMessage(messages.placeholder)}</label>
        <PlacesAutocomplete
          onSelect={this.props.handleSelect}
          autocompleteItem={AutocompleteItem}
          onEnterKeyDown={this.props.handleSelect}
          classNames={cssClasses}
          inputProps={inputProps}
          styles={myStyles}
        />
        <div className="pharmacy-searchdash-icon"><SearchIcon title="search-icon" titleText="Pharmacy Search" fill="#F4A502" stroke="transparent" width="19" height="19" className="pharmacy-search-icon" /></div>
      </InputStyle>
    );
  }
}
PharmacySearchInput.defaultProps = {
  submitLink: PropTypes.func,
};
PharmacySearchInput.propTypes = {
  intl: intlShape.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};
PharmacySearchInput.contextTypes = {
  intl: PropTypes.object.isRequired,
};
export default injectIntl(PharmacySearchInput);
