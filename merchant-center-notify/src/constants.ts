/* eslint-disable  @typescript-eslint/no-explicit-any */
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

export const entryPointUriPath =
    (typeof window === 'undefined'
        ? process.env.ENTRY_POINT_URI_PATH
        : (window as any).app.entryPointUriPath) || 'notifications';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);