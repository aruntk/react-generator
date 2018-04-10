const componentGenerator = require('./component/index.js');
const routeGenerator = require('./route/index.js');
const modelGenerator = require('./model/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('model', modelGenerator);
};
