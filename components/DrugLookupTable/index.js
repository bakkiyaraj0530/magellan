/**
*
* DrugLookupTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


class DrugLookupTable extends React.Component { // eslint-disable-line react/prefer-stateless-function

  activeFormatter(cell, row) {
    return (
      <ul>
        {row.genderCode !== '' ? <li>{row.genderCode}</li> : null}
        {row.limitedAccess !== '' ? <li>{row.limitedAccess}</li> : null}
        {row.quantityLimit !== '' ? <li>{row.quantityLimit}</li> : null}
        {row.stepTherapy !== '' ? <li>{row.stepTherapy}</li> : null}
        {row.paStatus !== '' ? <li>{row.paStatus}</li> : null}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.tableData.drugs} bordered={false}>
          <TableHeaderColumn dataField="drugName" isKey dataSort>Drug Name</TableHeaderColumn>
          <TableHeaderColumn dataField="drugStrengthDesc" dataSort>Strength/Form</TableHeaderColumn>
          <TableHeaderColumn dataField="tier" dataSort>Tier</TableHeaderColumn>
          <TableHeaderColumn dataFormat={this.activeFormatter}>Limits/Restrictions</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

DrugLookupTable.propTypes = {
  tableData: PropTypes.object.isRequired,
};

export default DrugLookupTable;
