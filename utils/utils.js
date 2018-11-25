import moment from 'moment';
/**
 * @desc Converts the Claimshistory data from Object to Array
 * This object is used to display in the grid and to download as CSV
 */
export const convertClaimsHistoryObjectToArray = (data) => {
  const items = data.map((item, idx) => {
    const paid = parseFloat(item.copayAmount).toFixed(2);
    return { dateOfService: (moment(item.dateOfService).format('MMM DD, YYYY')),
      drugName: item.drugName,
      serviceProvider: item.serviceProvider,
      copayAmount: `$ ${paid}`,
      claimStatus: item.CLAIM_STATUS,
      productId: item.PRODUCT_ID,
      healthServiceId: item.healthServiceId,
      claimStatusLower: item.CLAIM_STATUS ? item.CLAIM_STATUS.toLowerCase() : '',
      id: idx,
      memberId: item.memberId,
      moreInfo: item.moreInfo,
    };
  });
  return items;
};

export const convertClaimsHistoryArrayToCsv = (data) => {
  const items = data.map((item) => {
    const dateOfService = `"${item.dateOfService}"`;
    return {
      'Service Date': dateOfService,
      'Drug Name': `"${item.drugName}"`,
      Pharmacy: `"${item.serviceProvider}"`,
      'You Paid': `"${item.copayAmount}"`,
      'Claim Status': `"${item.claimStatus}"`,
    };
  });
  return items;
};
