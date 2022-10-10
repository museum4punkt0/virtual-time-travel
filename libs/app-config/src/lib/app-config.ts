// TODO !!
const DATA_ROOT = '/assets/items';

const DATA_FENCES = 'fences';
const DATA_FENCES_TYPE = 'csv';

const DATA_POVS = 'povs';
const DATA_POVS_TYPE = 'csv';

const DATA_PAGES = 'pages';
const DATA_PAGES_TYPE = 'csv';

const DATA_LOCALES = 'locales';
const DATA_LOCALES_TYPE = 'csv';

const DATA_DIALOGS = 'dialogs';

const DISABLE_ORIENTATION = false;

const DISABLE_QR = false;

const INVIEW_THRESHOLD_ANGLE = parseInt('20');

const INVIEW_THRESHOLD_DISTANCE = parseInt('100');

export interface DataFetchParamsRes {
  url: string;
  type: string;
}

const getDataFetchParams = (
  scope: string,
  type: string
): DataFetchParamsRes => ({
  url: [DATA_ROOT, scope, `index.${type}`].join('/'),
  type,
});

const getDataContentBaseUrl = (scope: string, locale: string): string =>
  [DATA_ROOT, scope, 'locales', locale].join('/');

const getDataAssetsBaseUrl = (scope: string): string =>
  [DATA_ROOT, scope, 'medias'].join('/');

export const getDataRoot = () => DATA_ROOT;

// for development purpose
// you might want to switch device orientation off since is not avail on most pcs
export const getUseOrientation = () => !DISABLE_ORIENTATION;

export const getUseQr = () => !DISABLE_QR;
export const getInViewThresholdAngle = () => INVIEW_THRESHOLD_ANGLE;
export const getInViewThresholdDistance = () => INVIEW_THRESHOLD_DISTANCE;

export const getFencesFetchParams = () =>
  getDataFetchParams(DATA_FENCES, DATA_FENCES_TYPE);

export const getFencesContentBaseUrl = (locale: string) =>
  getDataContentBaseUrl(DATA_FENCES, locale);

export const getPovsFetchParams = () =>
  getDataFetchParams(DATA_POVS, DATA_POVS_TYPE);

export const getPovsContentBaseUrl = (locale: string) =>
  getDataContentBaseUrl(DATA_POVS, locale);

export const getPovsAssetsBaseUrl = () => getDataAssetsBaseUrl(DATA_POVS);

export const getLocalesFetchParams = () =>
  getDataFetchParams(DATA_LOCALES, DATA_LOCALES_TYPE);

export const getPagesFetchParams = () =>
  getDataFetchParams(DATA_PAGES, DATA_PAGES_TYPE);

export const getPagesContentBaseUrl = (locale: string) =>
  getDataContentBaseUrl(DATA_PAGES, locale);

export const getDialogsContentBaseUrl = (locale: string) =>
  getDataContentBaseUrl(DATA_DIALOGS, locale);
