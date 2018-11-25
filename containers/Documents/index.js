/*
 *
 * Documents
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { selectedLanguageState, makeSelectAppState } from '../App/selectors';
import messages from './messages';
import DocumentStyles from './DocumentStyles';
import UpArrow from './UpArrow';
import DownArrow from './DownArrow';
import starIcon from './images/star.png';

// import selectArrow from './images/select-arrow.png';

export class Documents extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      dataToggleExpand: false,
      dataToggleExpandNew: false,
      clearable: false,
      searchable: false,
      diffList: ['AK', 'CA', 'CT', 'FL', 'HI', 'KS', 'MA', 'MS', 'NV', 'NJ', 'OH', 'OK', 'OR', 'RI', 'SC', 'VT', 'WA', 'WI'],
      selectedRegionDocs2017: [],
      selectedRegionDocs2018: [],
      stateDocuments: [{
        id: 0,
        latitude: 44.0000,
        longitude: -71.5000,
        title: 'New Hampshire',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg01.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R1.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_1_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_1_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R1.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR1_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_1_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R1.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R1_FINAL_web.pdf',
        }],
        state: 'NH',

      }, {
        id: 1,
        latitude: 40.7127,
        longitude: -74.0059,
        title: 'New York',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg03.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R3.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_3_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_3_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R3.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR3_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_3_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R3.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R3_FINAL_web.pdf',
        }],
        state: 'NY',
      }, {
        id: 2,
        latitude: 38.9047,
        longitude: -77.0164,
        title: 'Washington District of Columbia',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg05.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R5.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_5_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_5_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R5.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR5_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_5_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R5.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R5_FINAL_web.pdf',
        }],
        state: 'DC',
      }, {
        id: 3,
        latitude: 41.0000,
        longitude: -77.5000,
        title: 'Pennsylvania',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg06.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R6.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_6_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_6_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R6.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR6_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_6_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R6.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R6_FINAL_web.pdf',
        }],
        state: 'PA',
      }, {
        id: 4,
        latitude: 37.5000,
        longitude: -79.0000,
        title: 'Virginia',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg07.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R7.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_7_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_7_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R7.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR7_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_7_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R7.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R7_FINAL_web.pdf',
        }],
        state: 'VA',
      }, {
        id: 5,
        latitude: 35.5000,
        longitude: -80.0000,
        title: 'North Carolina',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg08.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R8.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_8_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_8_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R8.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR8_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_8_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R8.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R8_FINAL_web.pdf',
        }],
        state: 'NC',
      }, {
        id: 6,
        latitude: 32.9605,
        longitude: -83.1132,
        title: 'Georgia',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg10.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R10.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_10_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_10_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R10.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR10_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_10_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R10.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R10_FINAL_web.pdf',
        }],
        state: 'GA',
      }, {
        id: 7,
        latitude: 32.7000,
        longitude: -86.7000,

        title: 'Alabama',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg12.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R12.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_12_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_12_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R12.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR12_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_12_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R12.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R12_FINAL_web.pdf',
        }],
        state: 'AL',
      }, {
        id: 8,
        latitude: 43.6867,
        longitude: -86.7000,
        title: 'Michigan',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg13.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R13.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_13_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_13_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R13.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR13_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_13_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R13.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R13_FINAL_web.pdf',
        }],
        state: 'MI',
      }, {
        id: 9,
        latitude: 40.0000,
        longitude: -86.0000,
        title: 'Indiana',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg15.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R15.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_15_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_15_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R15.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR15_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_15_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R15.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R15_FINAL_web.pdf',
        }],
        state: 'IN',
      }, {
        id: 10,
        latitude: 40.0000,
        longitude: -89.0000,
        title: 'Illinois',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg17.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R17.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_17_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_17_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R17.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR17_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_17_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R17.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R17_FINAL_web.pdf',
        }],
        state: 'IL',
      }, {
        id: 11,
        latitude: 38.5000,
        longitude: -92.5000,
        title: 'Missouri',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg18.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R18.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_18_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_18_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R18.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR18_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_18_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R18.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R18_FINAL_web.pdf',
        }],
        state: 'MO',
      }, {
        id: 12,
        latitude: 34.8000,
        longitude: -92.2000,
        title: 'Arkansas',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg19.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R19.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_19_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_19_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R19.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR19_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_19_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R19.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R19_FINAL_web.pdf',
        }],
        state: 'AR',
      }, {
        id: 13,
        latitude: 31.0413,
        longitude: -91.8360,
        title: 'Louisiana',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg21.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R21.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_21_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_21_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R21.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR21_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_21_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R21.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R21_FINAL_web.pdf',
        }],
        state: 'LA',
      }, {
        id: 14,
        latitude: 31.0000,
        longitude: -100.0000,
        title: 'Texas',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg22.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R22.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_22_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_22_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R22.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR22_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_22_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R22.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R22_FINAL_web.pdf',
        }],
        state: 'TX',
      }, {
        id: 15,
        latitude: 43.0000,
        longitude: -107.5000,
        title: 'Wyoming',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'WY',
      }, {
        id: 16,
        latitude: 34.0000,
        longitude: -106.0000,
        title: 'New Mexico',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg26.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R26.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_26_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_26_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R26.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR26_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_26_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R26.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R26_FINAL_web.pdf',
        }],
        state: 'NM',
      }, {
        id: 17,
        latitude: 39.0000,
        longitude: -105.5000,
        title: 'Colorado',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg27.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R27.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_27_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_27_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R27.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR27_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_27_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R27.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R27_FINAL_web.pdf',
        }],
        state: 'CO',
      }, {
        id: 18,
        latitude: 34.0000,
        longitude: -112.0000,
        title: 'Arizona',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg28.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R28.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_28_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_28_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R28.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR28_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_28_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R28.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R28_FINAL_web.pdf',
        }],
        state: 'AZ',
      }, {
        id: 19,
        latitude: 39.5000,
        longitude: -111.5000,
        title: 'Utah',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg31.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R31.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_31_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_31_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R31.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR31_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_31_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R31.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R31_FINAL_web.pdf',
        }],
        state: 'UT',
      }, {
        id: 20,
        latitude: 45.5000,
        longitude: -69.0000,
        title: 'Maine',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg01.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R1.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_1_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_1_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R1.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR1_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_1_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R1.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R1_FINAL_web.pdf',
        }],
        state: 'ME',

      }, {
        id: 21,
        latitude: 39.0000,
        longitude: -75.5000,
        title: 'Delaware',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg05.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R5.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_5_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_5_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R5.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR5_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_5_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R5.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R5_FINAL_web.pdf',
        }],
        state: 'DE',
      }, {
        id: 22,
        latitude: 39.0000,
        longitude: -76.7000,
        title: 'Maryland',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg05.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R5.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_5_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_5_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R5.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR5_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_5_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R5.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R5_FINAL_web.pdf',
        }],
        state: 'MD',
      }, {
        id: 23,
        latitude: 39.0000,
        longitude: -80.5000,
        title: 'West Virginia',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg06.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R6.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_6_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_6_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R6.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR6_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_6_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R6.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R6_FINAL_web.pdf',
        }],
        state: 'WV',
      }, {
        id: 24,
        latitude: 36.0000,
        longitude: -86.0000,
        title: 'Tennessee',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg12.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R12.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_12_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_12_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R12.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR12_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_12_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R12.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R12_FINAL_web.pdf',
        }],
        state: 'TN',
      }, {
        id: 25,
        latitude: 37.5000,
        longitude: -85.0000,
        title: 'Kentucky',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg15.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R15.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_15_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_15_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R15.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR15_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_15_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R15.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R15_FINAL_web.pdf',
        }],
        state: 'KY',
      }, {
        id: 26,
        latitude: 42.0000,
        longitude: -93.0000,
        title: 'Iowa',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'IA',
      }, {
        id: 27,
        latitude: 46.0000,
        longitude: -94.0000,
        title: 'Minnesota',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'MN',
      }, {
        id: 28,
        latitude: 47.0000,
        longitude: -110.0000,
        title: 'Montana',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'MT',
      }, {
        id: 29,
        latitude: 47.0000,
        longitude: -100.0000,
        title: 'North Dakota',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'ND',
      }, {
        id: 30,
        latitude: 41.2324,
        longitude: -98.4160,
        title: 'Nebraska',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'NE',
      }, {
        id: 31,
        latitude: 44.5000,
        longitude: -100.0000,
        title: 'South Dakota',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R25.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_25_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_25_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R25.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR25_2018_rev1.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_25_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R25.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R25_FINAL_web.pdf',
        }],
        state: 'SD',
      }, {
        id: 32,
        latitude: 45.0000,
        longitude: -114.0000,
        title: 'Idaho',
        docs2017: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: '2017_ANOC_Reg31.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2017_MRx_Summary_of_Benefits_R31.pdf',
        }, {
          name: 'EVIDENCE_OF_COVERAGE',
          path: '2017_PDP_EOC_Final_v2.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: 'LIS_Premium_Summary_Region_31_2017.pdf',
        }, {
          name: 'PHARMACY_DIRECTORY',
          path: 'Pharmacy_Dir_Region_31_2017.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2017_Premium_CostShare_R31.pdf',
        }],
        docs2018: [{
          name: 'ANNUAL_NOTICE_OF_CHANGES',
          path: 'S4607_CMANOCR31_2018.pdf',
        }, {
          name: 'LIS_PREMIUIM_SUMMARY',
          path: '2018_LIS_Premium_Summary_Region_31_FINAL.pdf',
        }, {
          name: 'PREMIUM_COST_SHARE',
          path: '2018_Premium_Cost_Sharing_Chart_R31.pdf',
        }, {
          name: 'SUMMARY_OF_BENEFITS',
          path: '2018_MRx_Summary_of_Benefits_R31_FINAL_web.pdf',
        }],
        state: 'ID',
      }],
    };
  }
  getCurrentLocale = () => this.props.language.locale === 'en' ? 'en-us' : 'es-es'

  dataToggleShow = () => {
    this.setState({ dataToggleExpand: !this.state.dataToggleExpand });
  }
  dataToggleShowNew = () => {
    this.setState({ dataToggleExpandNew: !this.state.dataToggleExpandNew });
  }
  showRegionDocs = (state) => {
    _(this.state.stateDocuments).forEach((marker) => {
      if (marker.state === state) {
        this.setState({ selectedRegionDocs2017: marker.docs2017 });
        this.setState({ selectedRegionDocs2018: marker.docs2018 });
      }
    });
  };
  handleChange = (val) => {
    this.setState({ value: val });
    this.showRegionDocs(val);
  }
  render() {
    const options = [
      { value: 'AL', label: this.context.intl.formatMessage(messages.alabama) },
      { value: 'AK', label: this.context.intl.formatMessage(messages.alaska) },
      { value: 'AZ', label: this.context.intl.formatMessage(messages.arizona) },
      { value: 'AR', label: this.context.intl.formatMessage(messages.arkansas) },
      { value: 'CA', label: this.context.intl.formatMessage(messages.california) },
      { value: 'CO', label: this.context.intl.formatMessage(messages.colorado) },
      { value: 'CT', label: this.context.intl.formatMessage(messages.connecticut) },
      { value: 'DE', label: this.context.intl.formatMessage(messages.delaware) },
      { value: 'DC', label: this.context.intl.formatMessage(messages.columbia) },
      { value: 'FL', label: this.context.intl.formatMessage(messages.florida) },
      { value: 'GA', label: this.context.intl.formatMessage(messages.georgia) },
      { value: 'HI', label: this.context.intl.formatMessage(messages.hawaii) },
      { value: 'ID', label: this.context.intl.formatMessage(messages.idaho) },
      { value: 'IL', label: this.context.intl.formatMessage(messages.illinois) },
      { value: 'IN', label: this.context.intl.formatMessage(messages.indiana) },
      { value: 'IA', label: this.context.intl.formatMessage(messages.iowa) },
      { value: 'KS', label: this.context.intl.formatMessage(messages.kansas) },
      { value: 'KY', label: this.context.intl.formatMessage(messages.kentucky) },
      { value: 'LA', label: this.context.intl.formatMessage(messages.louisiana) },
      { value: 'ME', label: this.context.intl.formatMessage(messages.maine) },
      { value: 'MD', label: this.context.intl.formatMessage(messages.maryland) },
      { value: 'MA', label: this.context.intl.formatMessage(messages.massachusetts) },
      { value: 'MI', label: this.context.intl.formatMessage(messages.michigan) },
      { value: 'MN', label: this.context.intl.formatMessage(messages.minnesota) },
      { value: 'MS', label: this.context.intl.formatMessage(messages.mississippi) },
      { value: 'MO', label: this.context.intl.formatMessage(messages.missouri) },
      { value: 'MT', label: this.context.intl.formatMessage(messages.montana) },
      { value: 'NE', label: this.context.intl.formatMessage(messages.nebraska) },
      { value: 'NV', label: this.context.intl.formatMessage(messages.nevada) },
      { value: 'NH', label: this.context.intl.formatMessage(messages.hampshire) },
      { value: 'NJ', label: this.context.intl.formatMessage(messages.jersey) },
      { value: 'NM', label: this.context.intl.formatMessage(messages.mexico) },
      { value: 'NY', label: this.context.intl.formatMessage(messages.york) },
      { value: 'NC', label: this.context.intl.formatMessage(messages.carolina) },
      { value: 'ND', label: this.context.intl.formatMessage(messages.dakota) },
      { value: 'OH', label: this.context.intl.formatMessage(messages.ohio) },
      { value: 'OK', label: this.context.intl.formatMessage(messages.oklahoma) },
      { value: 'OR', label: this.context.intl.formatMessage(messages.oregon) },
      { value: 'PA', label: this.context.intl.formatMessage(messages.pennsylvania) },
      { value: 'RI', label: this.context.intl.formatMessage(messages.rhode) },
      { value: 'SC', label: this.context.intl.formatMessage(messages.southcarolina) },
      { value: 'SD', label: this.context.intl.formatMessage(messages.southdakota) },
      { value: 'TN', label: this.context.intl.formatMessage(messages.tennessee) },
      { value: 'TX', label: this.context.intl.formatMessage(messages.texas) },
      { value: 'UT', label: this.context.intl.formatMessage(messages.utah) },
      { value: 'VT', label: this.context.intl.formatMessage(messages.vermont) },
      { value: 'VA', label: this.context.intl.formatMessage(messages.virginia) },
      { value: 'WA', label: this.context.intl.formatMessage(messages.washington) },
      { value: 'WV', label: this.context.intl.formatMessage(messages.westvirginia) },
      { value: 'WI', label: this.context.intl.formatMessage(messages.wisconsin) },
      { value: 'WY', label: this.context.intl.formatMessage(messages.wyoming) },
    ];
    const getPharmacyURL = () => this.props.global.userInfo === null ? '/member/publicPharmacylocator' : '/member/pharmacylocator';
    const regionDocs = this.state.selectedRegionDocs2017.map((item) => (
      item.name === 'PHARMACY_DIRECTORY' ?
        <li key={item.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <a href={getPharmacyURL()} target="_parent">{this.context.intl.formatMessage(messages.findAPharmacy)}</a>
        </li> :
        <li key={item.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <a href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/${item.path}`} target="_blank">{this.context.intl.formatMessage({ id: item.name })}</a>
        </li>
      ));
    const regionDocsNew = this.state.selectedRegionDocs2018.map((item) => (
      item.name === 'PHARMACY_DIRECTORY' ?
        <li key={item.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <a href={getPharmacyURL()} target="_parent">{this.context.intl.formatMessage(messages.findAPharmacy)}</a>
        </li> :
        <li key={item.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <a href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/${item.path}`} target="_blank">{this.context.intl.formatMessage({ id: item.name })}</a>
        </li>
      ));
    return (
      <div>
        <Helmet
          title="Documents | MagellanRx Management"
          meta={[
            { name: 'description', content: 'Description of Documents' },
          ]}
        />

        <DocumentStyles>
          <div className="mag-document-page">
            <div className="mag-document-form">
              <h1><FormattedMessage {...messages.header} /></h1>
              <h2><FormattedMessage {...messages.description} /></h2>
              <div className="doc-state clearfix">
                <label htmlFor="state-box"><FormattedMessage {...messages.statelabel} />:</label>
                <div className="custom-select">
                  <Select
                    autofocus
                    options={options}
                    simpleValue
                    placeholder={this.context.intl.formatMessage(messages.stateplaceholder)}
                    clearable={this.state.clearable}
                    searchable={this.state.searchable}
                    name="selected-state"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <br /><br />
                {this.state.diffList.indexOf(this.state.value) === -1 ? '' : <h2 className="plan-not-offered"><FormattedMessage {...messages.planNotOffered} /></h2>}
                <p><FormattedMessage {...messages.statedesc} /></p>
              </div>
              {this.state.value ? <div className="doc-leftright">
                <h1>2018</h1>
                <ul className="state-list clearfix">
                  { this.state.diffList.indexOf(this.state.value) === -1 ?
                    <div>{regionDocsNew}</div> : ''
                  }
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2018_Enrollment_Form_Final.pdf`}><FormattedMessage {...messages.form} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2018_MagellanRx_Medicare_Basic_PDP_EOC_FINAL.pdf`}><FormattedMessage {...messages.evidence} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2018_Comprehensive_Formulary_1.1.18.pdf`}><FormattedMessage {...messages.formulary} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/S4607-RXFLEX-PRIOR-AUTHORIZATION-MAGELLAN-PDP-(18273)-08072017-STAGE3.pdf`}><FormattedMessage {...messages.prior} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/S4607-RXFLEX-STEP-THERAPY-MAGELLAN-PDP-(18273)-08072017-STAGE3.pdf`}><FormattedMessage {...messages.therapy} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/NOTICE_OF_PRIVACY_PRACTICES_MRxMedicare_8.14.17.pdf`}><FormattedMessage {...messages.practices} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2018_Disenrollment_Rights_And_Responsibilities.pdf`}><FormattedMessage {...messages.rights} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/UM_Criteria.pdf`}><FormattedMessage {...messages.criteria} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MLI_new_B&W.pdf`}><FormattedMessage {...messages.services} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a href={getPharmacyURL()} target="_parent">{this.context.intl.formatMessage(messages.findAPharmacy)}</a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4 state-readmore">
                    <a className="state-more" href="#state-data" onClick={this.dataToggleShowNew}><FormattedMessage {...messages.ratingsnew} /> { this.state.dataToggleExpandNew ? <span className="more-arrow"><UpArrow /></span> : <span className="more-arrow"><DownArrow /></span> } </a>
                  </li>
                </ul>
              </div> : ''}
              { this.state.dataToggleExpandNew ? <div className="state-expanded-content top-border">
                <div className="doc-leftright">
                  <p><FormattedMessage {...messages.medicare} /></p>
                  <ol>
                    <li><FormattedMessage {...messages.scores} /></li>
                    <li><FormattedMessage {...messages.summary} /></li>
                  </ol>
                  <p><FormattedMessage {...messages.include} /></p>
                  <ul>
                    <li><FormattedMessage {...messages.rate} /></li>
                    <li><FormattedMessage {...messages.healthy} /></li>
                    <li><FormattedMessage {...messages.medications} /></li>
                  </ul>
                  <p><FormattedMessage {...messages.star} /></p>
                  <p className="L-space"><span className="doc-bold"><FormattedMessage {...messages.enough} /></span>
                  </p>
                  <p><FormattedMessage {...messages.received} /></p>
                  <p className="L-space"><FormattedMessage {...messages.health} /> <span className="doc-bold"><FormattedMessage {...messages.offered} /></span>
                    <br /> <FormattedMessage {...messages.drug} /> <span className="doc-bold"><FormattedMessage {...messages.measured} /></span>
                  </p>
                  <p><FormattedMessage {...messages.performs} /></p>
                  <ul className="rading-list">
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.excellent} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.average} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.threestar} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.below} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.poor} /></span>
                    </li>
                  </ul>
                  <p><span className="doc-bold"><FormattedMessage {...messages.contracts} /></span>
                  </p>
                  <p><FormattedMessage {...messages.plans} />
                    <br /><a target="_blank" href="http://www.medicare.gov"><FormattedMessage {...messages.website} /></a>
                  </p>
                  <p><FormattedMessage {...messages.toll} />
                    <br /> <FormattedMessage {...messages.members} /></p>
                  <p><FormattedMessage {...messages.starratings} /></p>
                </div>
              </div> : '' }
              {this.state.value ? <div className="doc-leftright">
                <h1>2017</h1>
                <ul className="state-list clearfix">
                  { this.state.diffList.indexOf(this.state.value) === -1 ?
                    <div>{regionDocs}</div> : ''
                  }
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/Disenrollment_Rights_And_Responsibilities.pdf`}><FormattedMessage {...messages.rights} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_PDP_PriorAuthorization.pdf`}><FormattedMessage {...messages.prior} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_PDP_StepTherapy.pdf`}><FormattedMessage {...messages.therapy} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2017_PDP_Enrollment_Form.pdf`}><FormattedMessage {...messages.form} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_PDP_ComprehensiveFormulary.pdf`}><FormattedMessage {...messages.formulary} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/2017_PDP_MultiLanguageInsert_Final.pdf`}><FormattedMessage {...messages.services} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MRx_Notice_of_Privacy_Practices.pdf`}><FormattedMessage {...messages.practices} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_UM.pdf`}><FormattedMessage {...messages.criteria} /></a></li>
                  <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4 state-readmore">
                    <a className="state-more" href="#state-data" onClick={this.dataToggleShow}><FormattedMessage {...messages.ratings} /> { this.state.dataToggleExpand ? <span className="more-arrow"><UpArrow /></span> : <span className="more-arrow"><DownArrow /></span> } </a>
                  </li>
                </ul>
              </div> : ''}
              { this.state.dataToggleExpand ? <div className="state-expanded-content top-border">
                <div className="doc-leftright">
                  <p><FormattedMessage {...messages.medicare} /></p>
                  <ol>
                    <li><FormattedMessage {...messages.scores} /></li>
                    <li><FormattedMessage {...messages.summary} /></li>
                  </ol>
                  <p><FormattedMessage {...messages.include} /></p>
                  <ul>
                    <li><FormattedMessage {...messages.rate} /></li>
                    <li><FormattedMessage {...messages.healthy} /></li>
                    <li><FormattedMessage {...messages.medications} /></li>
                  </ul>
                  <p><FormattedMessage {...messages.star} /></p>
                  <p className="L-space"><span className="doc-bold"><FormattedMessage {...messages.enough} /></span>
                  </p>
                  <p><FormattedMessage {...messages.received} /></p>
                  <p className="L-space"><FormattedMessage {...messages.health} /> <span className="doc-bold"><FormattedMessage {...messages.offered} /></span>
                    <br /> <FormattedMessage {...messages.drug} /> <span className="doc-bold"><FormattedMessage {...messages.measured} /></span>
                  </p>
                  <p><FormattedMessage {...messages.performs} /></p>
                  <ul className="rading-list">
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.excellent} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.average} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.threestar} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.below} /></span>
                    </li>
                    <li><img src={starIcon} alt="Star" /><span><FormattedMessage {...messages.poor} /></span>
                    </li>
                  </ul>
                  <p><span className="doc-bold"><FormattedMessage {...messages.contracts} /></span>
                  </p>
                  <p><FormattedMessage {...messages.plans} />
                    <br /><a target="_blank" href="http://www.medicare.gov"><FormattedMessage {...messages.website} /></a>
                  </p>
                  <p><FormattedMessage {...messages.toll} />
                    <br /> <FormattedMessage {...messages.members} /></p>
                  <p><FormattedMessage {...messages.starratings} /></p>
                </div>
              </div> : '' }
              <div className="doc-lang top-border">
                <h3><FormattedMessage {...messages.languages} /></h3>
                <h4><FormattedMessage {...messages.attention} /></h4>
              </div>
              <div className="doc-leftright">
                <ul className="state-list lang-list clearfix">
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Español <FormattedMessage {...messages.spanish} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}><FormattedMessage {...messages.arabic} /> العربية</a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Deutsch <FormattedMessage {...messages.german} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>繁體中文 <FormattedMessage {...messages.chinese} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Français <FormattedMessage {...messages.french} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Kreyòl Ayisyen <FormattedMessage {...messages.creole} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Tiếng Việt <FormattedMessage {...messages.vietnamese} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Polski <FormattedMessage {...messages.polish} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}><FormattedMessage {...messages.urdu} /> ردُو</a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>한국어 <FormattedMessage {...messages.korean} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Tagalog <FormattedMessage {...messages.filipino} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>বাংলা <FormattedMessage {...messages.bengali} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Русский <FormattedMessage {...messages.russian} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}>Italiano <FormattedMessage {...messages.italian} /></a></li>
                  <li className="col-xs-12 col-sm-4 col-md-4 col-lg-4"><a target="_blank" href={`/member/external/medicare/medd_common/doc/${this.getCurrentLocale()}/MEDD_Top_15_Languages_Spoken.pdf`}><FormattedMessage {...messages.yiddish} /> אידיש</a></li>
                </ul>
              </div>
            </div>
          </div>
        </DocumentStyles>
      </div>
    );
  }
}

Documents.propTypes = {
  language: PropTypes.object.isRequired,
  global: PropTypes.object.isRequired,
};

Documents.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  language: selectedLanguageState(),
  global: makeSelectAppState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
