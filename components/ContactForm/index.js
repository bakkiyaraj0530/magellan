/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MaskedInput from 'react-text-mask';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import TextFieldGroup from '../../components/TextFieldGroup';
import messages from './messages';
import { validate } from './contact-form-validation';
import IndicatesField from '../IndicatesField';
import Button from '../Button';
import ContactFormStyles from './contact-form-styles';
import SelectOption from '../SelectOption';

class ContactForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      clearable: false,
      searchable: false,
      errors: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.invalid) {
      this.setState({ errors: true });
    } else {
      this.setState({ errors: false });
    }
  }
  onPhoneCheck = (e) => {
    const phone = e.target.value;
    if (phone.length < 12) {
      this.setState({ errors: true });
    }
  }
  handleChange = (val) => {
    this.setState({ value: val });
  }

  resetForm = () => {
    this.props.reset();
    this.props.hideMessages();
  }
  render() {
    const { handleSubmit, characterCount, selectedReason, pristine, submitting } = this.props;
    const options = [
      { value: 'memberLogin', label: this.context.intl.formatMessage(messages.memberLogin) },
      { value: 'pharmacyLocator', label: this.context.intl.formatMessage(messages.pharmacyLocator) },
      { value: 'mailingAddress', label: this.context.intl.formatMessage(messages.mailingAddressChange) },
      { value: 'memberCard', label: this.context.intl.formatMessage(messages.memberCard) },
      { value: 'premiumBilling', label: this.context.intl.formatMessage(messages.premiumBilling) },
      { value: 'priorAuth', label: this.context.intl.formatMessage(messages.priorAuth) },
      { value: 'drugAppeal', label: this.context.intl.formatMessage(messages.drugAppeal) },
      { value: 'drugCov', label: this.context.intl.formatMessage(messages.drugCov) },
      { value: 'drugPricing', label: this.context.intl.formatMessage(messages.drugPricing) },
      { value: 'compliments', label: this.context.intl.formatMessage(messages.compliments) },
      { value: 'other', label: this.context.intl.formatMessage(messages.other) },
    ];
    const stateOptions = [
      { value: 'AL', label: this.context.intl.formatMessage(messages.alabama) },
      { value: 'AK', label: this.context.intl.formatMessage(messages.alaska) },
      { value: 'AZ', label: this.context.intl.formatMessage(messages.arizona) },
      { value: 'AR', label: this.context.intl.formatMessage(messages.arkansas) },
      { value: 'CA', label: this.context.intl.formatMessage(messages.california) },
      { value: 'CO', label: this.context.intl.formatMessage(messages.colorado) },
      { value: 'CT', label: this.context.intl.formatMessage(messages.connecticut) },
      { value: 'DE', label: this.context.intl.formatMessage(messages.delaware) },
      { value: 'DC', label: this.context.intl.formatMessage(messages.columbia) },
      { value: 'FL', label: this.context.intl.formatMessage(messages.florida) },
      { value: 'GA', label: this.context.intl.formatMessage(messages.georgia) },
      { value: 'HI', label: this.context.intl.formatMessage(messages.hawaii) },
      { value: 'ID', label: this.context.intl.formatMessage(messages.idaho) },
      { value: 'IL', label: this.context.intl.formatMessage(messages.illinois) },
      { value: 'IN', label: this.context.intl.formatMessage(messages.indiana) },
      { value: 'IA', label: this.context.intl.formatMessage(messages.iowa) },
      { value: 'KS', label: this.context.intl.formatMessage(messages.kansas) },
      { value: 'KY', label: this.context.intl.formatMessage(messages.kentucky) },
      { value: 'LA', label: this.context.intl.formatMessage(messages.louisiana) },
      { value: 'ME', label: this.context.intl.formatMessage(messages.maine) },
      { value: 'MD', label: this.context.intl.formatMessage(messages.maryland) },
      { value: 'MA', label: this.context.intl.formatMessage(messages.massachusetts) },
      { value: 'MI', label: this.context.intl.formatMessage(messages.michigan) },
      { value: 'MN', label: this.context.intl.formatMessage(messages.minnesota) },
      { value: 'MS', label: this.context.intl.formatMessage(messages.mississippi) },
      { value: 'MO', label: this.context.intl.formatMessage(messages.missouri) },
      { value: 'MT', label: this.context.intl.formatMessage(messages.montana) },
      { value: 'NE', label: this.context.intl.formatMessage(messages.nebraska) },
      { value: 'NV', label: this.context.intl.formatMessage(messages.nevada) },
      { value: 'NH', label: this.context.intl.formatMessage(messages.hampshire) },
      { value: 'NJ', label: this.context.intl.formatMessage(messages.jersey) },
      { value: 'NM', label: this.context.intl.formatMessage(messages.mexico) },
      { value: 'NY', label: this.context.intl.formatMessage(messages.york) },
      { value: 'NC', label: this.context.intl.formatMessage(messages.carolina) },
      { value: 'ND', label: this.context.intl.formatMessage(messages.dakota) },
      { value: 'OH', label: this.context.intl.formatMessage(messages.ohio) },
      { value: 'OK', label: this.context.intl.formatMessage(messages.oklahoma) },
      { value: 'OR', label: this.context.intl.formatMessage(messages.oregon) },
      { value: 'PA', label: this.context.intl.formatMessage(messages.pennsylvania) },
      { value: 'RI', label: this.context.intl.formatMessage(messages.rhode) },
      { value: 'SC', label: this.context.intl.formatMessage(messages.southcarolina) },
      { value: 'SD', label: this.context.intl.formatMessage(messages.southdakota) },
      { value: 'TN', label: this.context.intl.formatMessage(messages.tennessee) },
      { value: 'TX', label: this.context.intl.formatMessage(messages.texas) },
      { value: 'UT', label: this.context.intl.formatMessage(messages.utah) },
      { value: 'VT', label: this.context.intl.formatMessage(messages.vermont) },
      { value: 'VA', label: this.context.intl.formatMessage(messages.virginia) },
      { value: 'WA', label: this.context.intl.formatMessage(messages.washington) },
      { value: 'WV', label: this.context.intl.formatMessage(messages.westvirginia) },
      { value: 'WI', label: this.context.intl.formatMessage(messages.wisconsin) },
      { value: 'WY', label: this.context.intl.formatMessage(messages.wyoming) },
    ];
    return (
      <ContactFormStyles onSubmit={handleSubmit} className="form-horizontal">
        <div className="">
          <div className="form-group">
            <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 mag-contact-indi">
              <IndicatesField className="help-block required required-indicate"><FormattedMessage {...messages.fieldRequired} /></IndicatesField>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mag-contact-form">
          <div className="form-group">
            <label htmlFor="contactReason" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.reasonForContact} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 custom-select required">
              <Field
                id="contactReason"
                placeholder={this.context.intl.formatMessage(messages.select)}
                component={SelectOption}
                value={this.state.value}
                options={options}
                simpleValue
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                name="contactReason"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.firstName} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
              <Field name="firstName" id="firstName" label={this.props.intl.formatMessage(messages.firstName)} placeholder={this.props.intl.formatMessage(messages.firstNamePlaceholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.lastName} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
              <Field name="lastName" id="lastName" label={this.props.intl.formatMessage(messages.lastName)} placeholder={this.props.intl.formatMessage(messages.lastNamePlaceholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
            </div>
          </div>
          {selectedReason === 'mailingAddress' &&
            <div>
              <div className="form-group">
                <label htmlFor="address1" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.address1} />:</label>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
                  <Field name="address1" id="address1" label={this.props.intl.formatMessage(messages.address1)} placeholder={this.props.intl.formatMessage(messages.address1Placeholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address2" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.address2} />:</label>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
                  <Field name="address2" id="address2" label={this.props.intl.formatMessage(messages.address2)} placeholder={this.props.intl.formatMessage(messages.address2Placeholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.city} />:</label>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
                  <Field name="city" id="city" label={this.props.intl.formatMessage(messages.city)} placeholder={this.props.intl.formatMessage(messages.cityPlaceholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="state" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.state} />:</label>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
                  <Field
                    id="state"
                    placeholder={this.context.intl.formatMessage(messages.selectState)}
                    component={SelectOption}
                    value={this.state.value}
                    options={stateOptions}
                    simpleValue
                    clearable={this.state.clearable}
                    searchable={this.state.searchable}
                    name="state"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="zip" className="control-label col-lg-6 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.zip} />:</label>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
                  <Field name="zip" id="zip" label={this.props.intl.formatMessage(messages.zip)} placeholder={this.props.intl.formatMessage(messages.zipPlaceholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mag-contact-form">
          <div className="form-group">
            <label htmlFor="email" className="control-label col-lg-4 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.email} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
              <Field name="email" id="email" label={this.props.intl.formatMessage(messages.email)} placeholder={this.props.intl.formatMessage(messages.emailPlaceholder)} component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="control-label col-lg-4 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.phone} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
              <MaskedInput
                mask={[/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="form-control"
                placeholder={this.props.intl.formatMessage(messages.phonePlaceholder)}
                guide={false}
                id="phone"
                onBlur={this.onPhoneCheck}
                value={this.state.phoneNo}
                name="phoneNo"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="questions" className="control-label col-lg-4 col-md-6 col-sm-12 col-xs-12"><FormattedMessage {...messages.questions} />:</label>
            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 required">
              <Field name="questions" id="questions" label={this.props.intl.formatMessage(messages.questions)} component="textarea" type="textarea" className="form-control" maxLength="500" rows="6" />
              <p className="max-characters"><FormattedMessage {...messages.maxChars} /></p>
              <p><FormattedMessage {...messages.numberOfChars} />: {characterCount.length}</p>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-4 col-md-6 col-sm-offset-0 col-sm-6">
              <div className="mag-center"><Button type="submit" btnStyle="btn-primary submit-btn enable-submit-btn" btnText={this.props.intl.formatMessage(messages.submit)} disabled={this.state.errors || pristine || submitting} /></div>
              <Button type="button" btnStyle="btn-link clear-btn" btnText={this.props.intl.formatMessage(messages.clear)} disabled={pristine || submitting} onClick={this.resetForm} />
            </div>
          </div>
        </div>
      </ContactFormStyles>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  characterCount: PropTypes.any,
  selectedReason: PropTypes.any,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  intl: intlShape.isRequired,
  hideMessages: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
  characterCount: '',
  selectedReason: '',
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

ContactForm.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const selector = formValueSelector('contactForm'); // <-- same as form name
const reduxformWrapper = reduxForm({ form: 'contactForm', validate });
const connectWrapper = connect((state) => ({ characterCount: selector(state, 'questions'), selectedReason: selector(state, 'contactReason') }));
export default injectIntl(compose(reduxformWrapper, connectWrapper)(ContactForm));
