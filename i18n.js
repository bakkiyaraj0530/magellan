/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import axios from 'axios';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line

import enTranslationMessages from './translations/en.json';
import esTranslationMessages from './translations/es.json';

export const appLocales = [
  'en',
  'es',
];

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

export const formatTranslationMessages = (messages) => (
  Object.keys(messages).reduce((formattedMessages, key) => {
    const messageO = messages[key];
    const message = { [messageO.key]: messageO.translation };
    return Object.assign(formattedMessages, message);
  }, {}));

export const formatTranslationMessages1 = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const getTranslations = (locale, fn) => {
  const langLocale = (locale === 'es') ? 'es-ES' : 'en-US';
  const requestUrl = `/translationservice/common/translation/?base=portal&level1=medd&locale=${langLocale}`;
  axios.get(requestUrl).then((response) => {
    fn(formatTranslationMessages(response.data));
  });
};

export const translationMessages = {
  en: formatTranslationMessages1('en', enTranslationMessages),
  es: formatTranslationMessages1('es', esTranslationMessages),
};

