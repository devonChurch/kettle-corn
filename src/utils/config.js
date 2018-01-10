const isProduction = APP_ENV === 'production';
const isStage = APP_ENV === 'stage';
const isDevelopment = APP_ENV === 'development';

const version = 'v3.5.0';

const siteEndpoint = (() => {
  switch (true) {
    case isProduction:
      return 'https://enhancedigital.co.nz';
    case isStage:
      return 'http://stage.enhancedigital.co.nz';
    default:
      return 'http://localhost:8000';
  }
})();

const assetsEndpoint = 'http://assets.enhancedigital.co.nz';

const lambdaEndpoint = isDevelopment
  ? 'http://localhost:3000'
  : 'https://57dina5fih.execute-api.us-east-1.amazonaws.com/dev';

const endpoints = {
  emailContactFormAlert: `${lambdaEndpoint}/email-contact-form-alert`,
};

const config = {
  isProduction,
  isStage,
  isDevelopment,
  version,
  siteEndpoint,
  assetsEndpoint,
  lambdaEndpoint,
  endpoints,
};

console.log({ config });

export {
  config as default,
  isProduction,
  isStage,
  isDevelopment,
  version,
  siteEndpoint,
  assetsEndpoint,
  lambdaEndpoint,
  endpoints,
};
