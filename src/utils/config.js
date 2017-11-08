const isProduction = NODE_ENV === 'production';

console.log({ isProduction });

const lambdaEndpoint = isProduction
  ? 'https://57dina5fih.execute-api.us-east-1.amazonaws.com/dev'
  : 'http://localhost:3000';

const endpoints = {
  emailContactFormAlert: `${lambdaEndpoint}/email-contact-form-alert`,
};

const config = { isProduction, lambdaEndpoint, endpoints };

export { config as default, isProduction, lambdaEndpoint, endpoints };
