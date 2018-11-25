/*eslint-disable*/
/**
*
* AccountSettingsPasswordForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import TextFieldGroup from '../../components/TextFieldGroup';
import messages from './messages';
import { validate } from './accountSettingsPassword-form-validation';
import IndicatesField from '../IndicatesField';
import Button from '../Button';
import { Link } from 'react-router';


class PswrdHelp extends React.Component{

 render() {
    return (
      <div>
         <div className="alert alert-info alertPassword  col-sm-9">
            <button type="button" className="close" title="Close" >
            <i className="sl-black icon-close-filled"></i>
            </button>
            <h5>Password Help</h5>
            <p>Your password must be 8-20 characters long, must not contain any form of user/member first name or last name, and must meet at least three of the following criteria:</p>
            <ol>
              <li>must contain at least one lowercase alpha character</li>
              <li>must contain at least one uppercase alpha character</li>
              <li>must contain at least one number</li>
              <li>must contain at least one of the following special characters: ! @ # $ % *</li>
            </ol>
          </div>
    </div>
    );
  }
}

class AccountSettingsPasswordForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
    super(props);
    this.state = {
      errors: false,
       pswrdHelpVisible: false
    };
  }
   _pswrdHelpSH() {
    this.setState({pswrdHelpVisible: !this.state.pswrdHelpVisible});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.invalid) {
      this.setState({ errors: true });
    } else {
      this.setState({ errors: false });
    }
  }
/*
  onPasswordChange = (event) => {
    const password = event.target.value;

    const rules = {
      isValidLength: (password.length >= 8 && password.length <= 20),
      hasLowerLetter: /[a-z]/.test(password),
      hasUpperLetter: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$*]/.test(password),
      length: password.length ? 1 : 0,
    };

    rules.isValidChar = ((1 * rules.hasLowerLetter) + (1 * rules.hasUpperLetter) + (1 * rules.hasNumber) + (1 * rules.hasSpecialChar)) >= 3;
    rules.showFeedback = (password.length > 0);
    this.setState({ password, rules }, () => {
      this.setMeterAttributes(this.state.rules);
      this.isValidForm();
    });
  }
*/
  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
        <div>
        <FormattedMessage {...messages.header} />
       <form onSubmit={handleSubmit} className="form-horizontal">
        <p>Indicates Required Field</p>
        <p>You must enter your current password to change your password.</p>
        <div className="row">
          <div className="col-sm-6">
          <label htmlFor="currentPassword" className="control-label">Current Password :</label>
            <Field
              component={TextFieldGroup}
              name="currentPassword"
              id="currentPassword"
              className="form-control"
              type="input"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
             <label htmlFor="Password" className="control-label"> New Password :</label>
            <Field
              component={TextFieldGroup}
              name="newPassword"
              id="newPassword"
              className="form-control"
              type="input"
              placeholder="New Password"
            />
          </div>
        </div>
        <a className='control' onClick={() => this._pswrdHelpSH()} aria-invalid="false">
          Password Help <i className="sl icon-information"></i> </a>
         <div className="row">
            <div className="col-6">
          {
          this.state.pswrdHelpVisible

            ? <PswrdHelp  />
            : null
          }
            </div>
         </div>
        <div className="row">
          <div className="col-sm-6">
              <label htmlFor="Password" className="control-label">Confirm New Password :</label>
            <Field
              component={TextFieldGroup}
              name="confirmNewPassword"
              id="confirmNewPassword"
              className="form-control"
              type="input"
              placeholder="Confirm New Password"
            />
            <br/><br/>
          </div>
        </div>
         <div className="row">
          <div className="col-sm-9">
          <div className="form-group">
            <div className=" col-sm-9">
              <Button type="submit" btnStyle="primary" btnText="Submit" disabled={this.state.errors || pristine || submitting} />&nbsp;&nbsp;
             {/* <Button type="button" btnStyle="link" btnText="Clear" disabled={pristine || submitting} onClick={reset} />*/}
              <button type="button" onClick={() => this.props. _emailUpdate()} 
              className="btn btn-danger">Cancel without Saving</button>
            </div>
          </div>
            &nbsp;&nbsp;
           
          </div>
        </div>
</form>
      </div>
    );
  }
}

AccountSettingsPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  intl: intlShape.isRequired,
};

AccountSettingsPasswordForm.defaultProps ={
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,

};

//export default AccountSettingsPasswordForm;
//accountsettingspasswordForm

const selector = formValueSelector('accountsettingspasswordForm'); // <-- same as form name
const reduxformWrapper = reduxForm({ form: 'accountsettingspasswordForm', validate });
const connectWrapper = connect((state) => ({ characterCount: selector(state, 'questions'), selectedReason: selector(state, 'contactReason') }));
export default injectIntl(compose(reduxformWrapper, connectWrapper)(AccountSettingsPasswordForm));
