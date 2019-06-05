/**
 * 封装中间件
 * Created by ikonon on 2019/6/5
 */
const path = require('path');
const koaService = require('./koaService');
const handle_error = require('./handle_error');
const handle_response = require('./handle_response');

module.exports = (app) => {
  app.use(koaService({serviceRoot: path.join(__dirname, '../service')}));
  app.use(handle_error());
  app.use(handle_response());
};
