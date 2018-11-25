/*
 * Modal Messages
 *
 * This contains all the text for the Modal component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  head: {
    id: 'APP_COMPONENTS_MODAL_HEAD',
    defaultMessage: 'You are leaving the medicareqa.magellanrx.com website',
  },
  desc: {
    id: 'MRX_CARES_POP_UP_MESSAGE',
    defaultMessage: 'The link you selected will redirect you to an external site not controlled by Magellan Health, Inc. or any of its subsidiaries. Click OK to continue to this third-party site or click Cancel to return to page you were viewing.',
  },
  ok: {
    id: 'APP_COMPONENTS_MODAL_OK',
    defaultMessage: 'OK',
  },
  cancel: {
    id: 'APP_COMPONENTS_MODAL_CANCEL',
    defaultMessage: 'Cancel',
  },
});
