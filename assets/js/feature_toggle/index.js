import { find } from 'lodash';
let userFeatures = [];
const featureMap = [{
  id: 1,
  featureName: 'account_settings',
}, {
  id: 2,
  featureName: 'find_a_pharmacy',
}, {
  id: 3,
  featureName: 'claims_history',
}, {
  id: 4,
  featureName: 'replace_id_card',
}, {
  id: 5,
  featureName: 'featured_pharmacy',
}, {
  id: 6,
  featureName: 'price_a_drug',
}, {
  id: 7,
  featureName: 'drug_lookup',
}, {
  id: 8,
  featureName: 'view_id_card',
}, {
  id: 9,
  featureName: 'healthcare_balances',
}, {
  id: 10,
  featureName: 'memeber_correspondence',
}, {
  id: 11,
  featureName: 'member_profile',
}, {
  id: 12,
  featureName: 'mail_order_third_party',
}, {
  id: 13,
  featureName: 'default_pharmacy',
}, {
  id: 14,
  featureName: 'specialty_mail_order',
}, {
  id: 15,
  featureName: 'split_platform',
}, {
  id: 16,
  featureName: 'magellan_mail_order',
}, {
  id: 17,
  featureName: 'unsecure_portal',
}, {
  id: 18,
  featureName: 'multi_mail_order',
}, {
  id: 19,
  featureName: 'goodrx',
}, {
  id: 20,
  featureName: 'client_mrx_explore',
}, {
  id: 21,
  featureName: 'client_firstci',
}, {
  id: 22,
  featureName: 'client_firstrax',
}, {
  id: 23,
  featureName: 'client_unsecure_portal',
}, {
  id: 24,
  featureName: 'client_unsecure_find_a_pharmacy',
}, {
  id: 25,
  featureName: 'provider_drug_lookup',
}, {
  id: 26,
  featureName: 'provider_member_lookup',
}, {
  id: 27,
  featureName: 'provider_contract_request',
}, {
  id: 28,
  featureName: 'provider_webpa',
}, {
  id: 29,
  featureName: 'change_provider',
}, {
  id: 30,
  featureName: 'provider_unsecure_portal',
}, {
  id: 31,
  featureName: 'provider_uac',
}, {
  id: 32,
  featureName: 'unsecure_find_a_pharmacy',
}, {
  id: 33,
  featureName: 'member_plan_selection',
}];

export const hasFeature = (feature) => {
  userFeatures = [6, 17, 32, 33]; // This needs to be removed. Only for testing until new features service is ready.
  const featureMapItem = find(featureMap, { featureName: feature });
  return userFeatures.includes(featureMapItem.id);
};

export const setFeatures = (features) => {
  userFeatures = features;
};
