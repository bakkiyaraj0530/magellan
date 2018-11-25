/* eslint-disable */
/*
 *
 * PlanSection actions
 *
 */

import {
  PLAN_SELECTION_REQUEST, PLAN_SELECTION_SUCCESS, PLAN_SELECTION_FAILED
} from './constants';

export function PlanselectionRequest(plandetails) {
	console.log('actions', plandetails);
   return {
     type: PLAN_SELECTION_REQUEST,
     plandetails
   };
 }
 export function PlanselectionSuccess(plandetailsResponse) {
   return {
     type: PLAN_SELECTION_SUCCESS,
     plandetailsResponse
   };
 }
 export function PlanselectionFailure(plandetailsmessage) {
   return {
     type: PLAN_SELECTION_FAILED,
     plandetailsmessage
   };
 }
