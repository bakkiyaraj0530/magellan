/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import TextFieldGroup from '../../components/TextFieldGroup';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class DrugLookupForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-3">
            <label htmlFor="drugName" className="control-label">Drug Name</label>
            <Field name="drugName" id="drugName" label="Drug Name" placeholder="Drug Name" component={TextFieldGroup} type="input" classname="form-control" maxlength="50" minLength="3" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-4">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

DrugLookupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,

};

export default reduxForm({
  form: 'drugLookupForm', // a unique identifier for this form
})(DrugLookupForm);
