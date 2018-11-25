/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
// import TextFieldGroup from '../../components/TextFieldGroup';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const handleSubmit = this.props.handleSubmit;
    const fields = this.props.fields;
    const content = fields.map((value) => (
      <div key={`div_${value.id}`} className="col-sm-4">
        <label className="control-label" htmlFor={value.name}>{value.labelText}</label>
        <Field name={value.name} id={value.id} placeholder={value.labelText} label={value.labelText} component="input" type="text" key={`input_${value.id}`} className="form-control" />
      </div>
    ));
    return (
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          {content}
        </div>
        <div className="form-group">
          <div className="text-center">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form);
