import 'babel-polyfill';

const coreTestContext = require.context('./src/', true, /\.test\.js$/);
coreTestContext.keys().forEach(coreTestContext);
