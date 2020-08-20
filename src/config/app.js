import { qdtEnigma } from 'qdt-components';

const config = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '372cbc85-f7fb-4db6-a620-9a5367845dce', // Consumer Sales
};

const appPromise = qdtEnigma(config);

appPromise.then((app) => { app.clearAll(); });

export default appPromise;