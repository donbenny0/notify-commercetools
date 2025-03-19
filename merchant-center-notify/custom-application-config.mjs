import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Notifications',
  entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: 'ayata-connectors',
      enableNewJsxTransform: '${env:ENABLE_NEW_JSX_TRANSFORM}',
      fastRefresh: '${env:FAST_REFRESH}',
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
      enableNewJsxTransform: '${env:ENABLE_NEW_JSX_TRANSFORM}',
      fastRefresh: '${env:FAST_REFRESH}',
    },
  },
  additionalEnv: {
    ENABLE_NEW_JSX_TRANSFORM: '${env:ENABLE_NEW_JSX_TRANSFORM}',
    FAST_REFRESH: '${env:FAST_REFRESH}',
  },
  oAuthScopes: {
    view: ['view_orders'],
    manage: ['manage_orders'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
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
