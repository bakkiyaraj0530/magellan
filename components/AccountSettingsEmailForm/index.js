/*eslint-disable*/
/**
*
* AccountSettingsEmailForm
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import TextFieldGroup from '../../components/TextFieldGroup';
import messages from './messages';
import StateDrodown from '../StateDropdown';
import { validate } from './accountSettingsEmail-form-validation';
import IndicatesField from '../IndicatesField';
import Button from '../Button';


class AccountSettingsEmailForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    const { handleSubmit,  pristine, reset, submitting , _passwordUpdate} = this.props;
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
      <div>
        <p>Indicates Required Field</p>
        <p>You must enter your current password to change your email.</p>
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
             <label htmlFor="emailAddress" className="control-label">Email Address :</label>
            <Field
              component={TextFieldGroup}
              name="emailAddress"
              id="emailAddress"
              className="form-control"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
              <label htmlFor="confirmEmailAddress" className="control-label">Confirm Email Address :</label>
            <Field
              component={TextFieldGroup}
              name="confirmEmailAddress"
              id="confirmEmailAddress"
              className="form-control"
              type="text"
              placeholder="Confirm Email Address"
            />
            <br/><br/>
          </div>
        </div>
        </div>
        <div className="form-group">
            <div className=" col-sm-9">
              <Button type="submit" btnStyle="primary" btnText="Submit" disabled={this.state.errors || pristine || submitting} />&nbsp;&nbsp;
              {/*<Button type="button" btnStyle="link" btnText="Cancel without Saving" onClick={reset||this.props._passwordUpdate()} />*/}
               <button type="button" onClick={() => this.props._passwordUpdate()} className="btn btn-danger">Cancel without Saving</button>
            </div>
          </div>
      </form>
    );
  }
}

AccountSettingsEmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentPassword:PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  _passwordUpdate: PropTypes.any,
};

AccountSettingsEmailForm.defaultProps = {
  currentPassword:PropTypes.string,
  emailAddress: PropTypes.string,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  _passwordUpdate: PropTypes.bool,
};

const selector = formValueSelector('accountSettingsEmailForm'); // <-- same as form name
const reduxformWrapper = reduxForm({ form: 'accountSettingsEmailForm', validate });
const connectWrapper = connect((state) => ({ characterCount: selector(state, 'questions'), selectedReason: selector(state, 'contactReason') }));
export default compose(reduxformWrapper, connectWrapper)(AccountSettingsEmailForm);

/*
export default reduxForm({
  form: 'drugLookupForm', // a unique identifier for this form
})(DrugLookupForm);
*/