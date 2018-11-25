/*
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContact from './selectors';
import messages from './messages';
import ContactForm from '../../components/ContactForm';
import InfoTable from '../../components/ContactInfoTable';
import * as ActionCreators from './actions';
import Alert from '../../components/Alert';
import colors from '../../components/HelperUtils/branding-colors';
import { tablet, mobile } from '../../components/HelperUtils/Media-query';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {};
    this.submit = this.submit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.Contact.contactFormResponse) {
      window.scrollTo(0, 0);
      this.setState({ showSuccess: true });
    } else {
      this.setState({ showFailuer: true });
    }

    if (nextProps.showErrorMessage) {
      window.scrollTo(0, 0);
      this.setState({ isLoading: false, showTable: true });
    }
  }
  hideMessages = () => {
    this.setState({ showSuccess: false, showFailuer: false });
  }
  submit(values) {
    const requestData = {
      selReason: values.get('contactReason'),
      txtFirstName: values.get('firstName'),
      txtLastName: values.get('lastName'),
      txtAddress1: values.get('address1'),
      txtAddress2: values.get('address2'),
      txtCity: values.get('city'),
      selState: values.get('state'),
      txtZip: values.get('zip'),
      txtCPhone: values.get('phone'),
      txtCEmail: values.get('email'),
      txtAddInfo: values.get('questions'),
    };
    this.props.actions.sendContactEmail(requestData);
  }

  render() {
    const ContactMessages = styled.div`
      h1{
        font-weight:300;
        text-align: center;
        margin-top: 0;
      }
      h5{
        color:${colors.magellanblack};
        font-weight:400;
        text-align: center;
        margin-bottom: 25px;
      }
      .mag-contact-error{
        padding: 0 80px;
      }
      .mag-contact-formpad{
        padding: 0 125px 0 0;
        ${tablet.handheld`
          padding: 0 50px;
        `}
        ${mobile.handheld`
          padding: 0;
        `}
      }
      .alert-success{
        background:rgba(80,158,47,0.10) !important;
        border:2px solid #509e2f !important;
        border-radius:8px !important;
        text-align: center !important;
        font-size:12px !important;
        color:#509e2f !important;
        padding: 10px !important;
      }
      .mag-contact-cust{
        border: 1px solid red;
        ${mobile.handheld`
          padding-left: 0 !important;
          padding-right: 0 !important;
        `}
      }
    `;
    const Contactcust = styled.div`
      .mag-contact-cust{
        ${mobile.handheld`
          padding-left: 0 !important;
          padding-right: 0 !important;
        `}
      }
    `;
    return (
      <div>
        <Helmet
          title="Contact | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of Contact' },
          ]}
        />
        <ContactMessages>
          <div className="mag-contact-error">{this.state.showSuccess && !this.props.showErrorMessage ? <Alert role="alert" alertMessage={this.props.intl.formatMessage(messages.successMsg)} alertType="success" /> : null}</div>
          <div>
            <h1><FormattedMessage {...messages.contactUs} /></h1>
            <h5><FormattedMessage {...messages.phiMsg} /></h5>
            <div className="row mag-contact-formpad">
              <div className="col-xs-12">
                <ContactForm onSubmit={this.submit} hideMessages={this.hideMessages} />
              </div>
            </div>
          </div>
        </ContactMessages>
        <Contactcust><div className="row">
          <div className="col-xs-12 mag-contact-cust">
            <InfoTable />
          </div>
        </div></Contactcust>
      </div>
    );
  }
}

Contact.propTypes = {
  actions: PropTypes.object.isRequired,
  Contact: PropTypes.object.isRequired,
  showErrorMessage: PropTypes.bool,
  intl: intlShape.isRequired,
};

Contact.defaultProps = {
  showErrorMessage: false,
};

const mapStateToProps = createStructuredSelector({
  Contact: makeSelectContact(),
});
Contact.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Contact));
