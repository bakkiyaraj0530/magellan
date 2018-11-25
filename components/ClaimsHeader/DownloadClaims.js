/**
*
* DatePicker
*
*/
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { convertClaimsHistoryObjectToArray, convertClaimsHistoryArrayToCsv } from '../../utils/utils';
import DownloadIcon from './DownloadIcon';

const convertArrayOfObjectsToCSV = (args) => {
  const data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }

  const columnDelimiter = args.columnDelimiter || ',';
  const lineDelimiter = args.lineDelimiter || '\n';

  const keys = Object.keys(data[0]);

  let result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr += 1;
    });
    result += lineDelimiter;
  });

  return result;
};
export default class DownloadClaims extends React.Component {
  getCSV = () => {
    const { claimsHistory } = this.props;
    if (claimsHistory && claimsHistory.claimsHistory && claimsHistory.claimsHistory.claim) {
      const claimsHistoryObject = convertClaimsHistoryObjectToArray(claimsHistory.claimsHistory.claim);
      const csv = convertArrayOfObjectsToCSV({
        data: convertClaimsHistoryArrayToCsv(claimsHistoryObject),
      });
      const data = encodeURIComponent(csv);
      return `data:application/csv;charset=utf-8,${data}`;
    }
    return '';
  };

  // downloadCSV = (e) => {
  //   e.preventDefault();
  //   const { claimsHistory } = this.props;
  //   const claimsHistoryObject = convertClaimsHistoryObjectToArray(claimsHistory.claimsHistory.claim);
  //   const csv = convertArrayOfObjectsToCSV({
  //     data: convertClaimsHistoryArrayToCsv(claimsHistoryObject),
  //   });
  //   if (csv == null) return;

  //   const filename = 'claims-history.csv';
  //   // if (!csv.match(/^data:text\/csv/i)) {
  //   //   csv = `data:text/csv;charset=utf-8,${csv}`;
  //   // }
  //   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  //   if (navigator.msSaveBlob) { // IE 10+
  //     navigator.msSaveBlob(blob, filename);
  //   } else {
  //     const link = document.createElement('a');
  //     if (link.download !== undefined) { // feature detection
  //         // Browsers that support HTML5 download attribute
  //       link.setAttribute('href', `data:text/csv;charset=utf-8,${csv}`);
  //       link.setAttribute('download', filename);
  //       document.body.appendChild(link);
  //       link.click();
  //     }
  //   }
  // }
  render() {
    const claimdetails = this.props.claimsHistory;
    return (
      <div>
        { claimdetails && claimdetails.claimsHistory && claimdetails.claimsHistory.claim ?
          <a
            href={this.getCSV()}
            download="claims-history.csv"
            title="Download Claims"
          ><DownloadIcon fill="#0074CB" /><FormattedMessage {...messages.downloadClaims} /></a>
         : <span
           title="Download Claims"
           className="mag-cursor-none"
         ><DownloadIcon fill="#9B9B9B" /><FormattedMessage {...messages.downloadClaims} /></span>}
      </div>
    );
  }
}
DownloadClaims.propTypes = {
  claimsHistory: PropTypes.any.isRequired,
};
