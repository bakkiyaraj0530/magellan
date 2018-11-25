/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
let locale = 'en';
const languages = window.localStorage.getItem('languages');
if (languages) {
  if (languages.includes('es-es')) {
    locale = 'es';
  } else {
    locale = 'en';
  }
}
export const DEFAULT_LOCALE = locale;


export const APP_GET_FEATURES = 'app/App/APP_GET_FEATURES';
export const APP_SET_FEATURES = 'app/App/APP_SET_FEATURES';
export const APP_SET_USERINFO = 'app/App.APP_SET_USERINFO';
export const APP_GET_USERINFO = 'app/App.APP_GET_USERINFO';
