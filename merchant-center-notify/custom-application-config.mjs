import { PERMISSIONS } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Notifications',
  entryPointUriPath: '${env:ENTRY_POINT_URI_PATH}',
  description: 'This connector is designed to automate real-time order status notifications for customers. It listens for changes to order statuses in CommerceTools and automatically sends WhatsApp notifications to customers via Twilio when an order confirmed.',
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: 'ayata-connectors',
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
      url: 'https://notify-commercetools-connector.vercel.app',
    },
  },
  oAuthScopes: {
    view: ['view_orders'],
    manage: ['manage_orders'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/bell.svg}',
  mainMenuLink: {
    defaultLabel: 'Notifications',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'settings',
      defaultLabel: 'Notification settings',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
