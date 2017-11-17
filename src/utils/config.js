const isProduction = NODE_ENV === 'production';

const version = 'v2.3.2';

const lambdaEndpoint = isProduction
  ? 'https://57dina5fih.execute-api.us-east-1.amazonaws.com/dev'
  : 'http://localhost:3000';

const endpoints = {
  emailContactFormAlert: `${lambdaEndpoint}/email-contact-form-alert`,
};

const config = { isProduction, version, lambdaEndpoint, endpoints };

console.log({ config });

export { config as default, isProduction, version, lambdaEndpoint, endpoints };
