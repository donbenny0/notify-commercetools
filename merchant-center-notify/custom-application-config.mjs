import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Notifications',
  entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}'|| 'gcp-eu',
  env: {
    development: {
      initialProjectKey: "ayata-connectors",
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}' || 'cm870gdpi004rxi01gxqc2qpb',
      url: '${env:APPLICATION_URL}' || 'https://mc-app-pmh2ujr237cvfqkzxcfcw1vf.europe-west1.gcp.2.commercetools.app',
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
