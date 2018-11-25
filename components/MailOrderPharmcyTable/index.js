/**
*
* MailOrderPharmcyTable
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import MailOrderTable from './table-styles';

class MailOrderPharmcyTable extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <MailOrderTable>
        <div id="mailOrderTable">
          <div className="col-sm-12">
            <h3>Mail Order Pharmacy</h3>
          </div>
          <div className="col-sm-4">
            <div className="mailorder-info-header">
              <h5>Magellan Rx Pharmacy</h5>
            </div>
            <div className="mailorder-info-body">
              <p>6870 SHADOWRIDGE DR<br />ORLANDO, FL 32812 <a title="external site - opens new window" onClick={() => this.open('https://www.google.com/maps?daddr=6870+SHADOWRIDGE+DR+ORLANDO+FL+328129002&safe=on&ie=UTF8&z=16&hl=en')} href="#googleMaps">Map</a>
                <br />800-424-8272</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="mailorder-info-header">
              <h5>Praxis Rx Pharmacy</h5>
            </div>
            <div className="mailorder-info-body">
              <p>5455 W WATERS AVE<br />SUITE 214<br />TAMPA, FL 33634-1208 <a title="external site - opens new window" onClick={() => this.open('https://www.google.com/maps?daddr=5455+W+WATERS+AVE+TAMPA+FL+336341208&safe=on&ie=UTF8&z=16&hl=en')} href="#googleMaps">Map</a>
                <br />(888) 903-7453
              </p>
            </div>
          </div>
        </div>
      </MailOrderTable>
    );
  }
}

MailOrderPharmcyTable.propTypes = {
  tableData: PropTypes.object.isRequired,
};


export default MailOrderPharmcyTable;
