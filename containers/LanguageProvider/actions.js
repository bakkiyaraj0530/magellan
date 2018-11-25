/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
} from './constants';

export function changeLocale(languageLocale) {
  if (languageLocale === 'es') {
    window.localStorage.setItem('languages', '{"NG_TRANSLATE_LANG_KEY":"es-es"}');
  } else {
    window.localStorage.setItem('languages', '{"NG_TRANSLATE_LANG_KEY":"en-us"}');
  }
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
