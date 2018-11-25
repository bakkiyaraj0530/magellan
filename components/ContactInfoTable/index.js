/**
*
* Graph
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ContactInfoTable from './contact-info-table-style';

class ContactTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContactInfoTable>
        <div id="contactInfoTable">
          <div className="col-lg-1 col-md-1 hidden-xs hidden-sm"></div>
          <div className="col-lg-2 col-md-4 col-sm-4 mag-contact-btm">
            <div className="contact-info-header">
              <h4><FormattedMessage {...messages.customerService} /></h4>
            </div>
            <div className="contact-info-body">
              <h5><FormattedMessage {...messages.callUs} /></h5>
              <p>800-424-5870</p>
              <h5><FormattedMessage {...messages.faxUs} /></h5>
              <p>800-424-5872</p>
              <h5><FormattedMessage {...messages.writeUs} /></h5>
              <p className="contact-address">Magellan Rx Medicare</p>
              <p className="contact-address"><FormattedMessage {...messages.meddPOBox} /></p>
              <p className="contact-address">Maryland Heights, MO</p>
              <p className="contact-address">63043</p>
            </div>

          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 mag-contact-btm">
            <div className="contact-info-header">
              <h4><FormattedMessage {...messages.mailOrder} /></h4>
            </div>
            <div className="contact-info-body">
              <h5><FormattedMessage {...messages.callUs} /></h5>
              <p>800-424-8272</p>
              <h5><FormattedMessage {...messages.faxUs} /></h5>
              <p>888-282-1349</p>
              <h5><FormattedMessage {...messages.writeUs} /></h5>
              <p className="contact-address"><FormattedMessage {...messages.magellanPharmacy} /></p>
              <p className="contact-address">PO Box 620968</p>
              <p className="contact-address">Orlando, FL</p>
              <p className="contact-address">32862</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 mag-contact-btm mag-tablet-line">
            <div className="contact-info-header">
              <h4><FormattedMessage {...messages.specialtyPharmacy} /></h4>
            </div>
            <div className="contact-info-body">
              <h5><FormattedMessage {...messages.callUs} /></h5>
              <p>800-424-8272</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 mag-contact-btm">
            <div className="contact-info-header">
              <h4><FormattedMessage {...messages.webSupport} /></h4>
            </div>
            <div className="contact-info-body">
              <h5><FormattedMessage {...messages.assistanceMsg} />:</h5>
              <p>800-424-8272</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 mag-contact-btm">
            <div className="contact-info-header">
              <h4><FormattedMessage {...messages.fraudAbuse} /></h4>
            </div>
            <div className="contact-info-body">
              <h5><FormattedMessage {...messages.fraudAbuseMsg} />:</h5>
              <p>800-349-2919</p>
            </div>
          </div>
        </div>
      </ContactInfoTable>
    );
  }
}

ContactTable.propTypes = {

};

export default ContactTable;
