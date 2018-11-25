/*
 * ClaimsHistory Messages
 *
 * This contains all the text for the ClaimsHistory component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_TITLE',
    defaultMessage: 'Claims History',
  },
  header: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_HEADER',
    defaultMessage: 'This information is not a complete description of benefits. Contact the plan for more information. Limitations, copayments, and restrictions may apply. Benefits, formulary, pharmacy network, premium and/or copayments/coinsurance may change on January 1 of each year.',
  },
  rejected: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_REJECTED',
    defaultMessage: 'Rejected',
  },
  rejectedInfo: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_REJECTEDINFO',
    defaultMessage: 'The claim was not processed due to a pharmacy submission error. Please contact your pharmacy.',
  },
  denied: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_DENIED',
    defaultMessage: 'Denied',
  },
  paid: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_PAID',
    defaultMessage: 'Paid',
  },
  deniedInfo: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_DENIEDINFO',
    defaultMessage: 'The claim was not processed due to plan coverage restrictions, or the drug is not currently covered by the plan.',
  },
  dateRange: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_DATERANGE',
    defaultMessage: 'Date Range',
  },
  downloadClaims: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_DOWNLOADCLAIMS',
    defaultMessage: 'Download Claims',
  },
  selectrange: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_SELECTRANGE',
    defaultMessage: 'Select a Date Range',
  },
  apply: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_APPLY',
    defaultMessage: 'Apply',
  },
  from: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_FROM',
    defaultMessage: 'From',
  },
  to: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_TO',
    defaultMessage: 'To',
  },
  lastthirtydays: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_LASTTHIRTYDAYS',
    defaultMessage: 'Last 30 Days',
  },
  lastnintydays: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_LASTNINTYDAYS',
    defaultMessage: 'Last 90 Days',
  },
  thisyear: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_THISYEAR',
    defaultMessage: 'This Year',
  },
  daterangelimit: {
    id: 'APP_COMPONENTS_CLAIMSHISTORYPAGE_DATERANGE_EXCEED',
    defaultMessage: 'Date range cannot exceed 3 years.',
  },
  invalidDate: {
    id: 'INVALID_DATE',
    defaultMessage: 'Invalid Date',
  },
});
