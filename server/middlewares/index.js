/**
 * 封装中间件
 * Created by ikonon on 2019/6/5
 */
const handle_error = require('./handle_error');
const handle_response = require('./handle_response');

module.exports = (app) => {
  app.use(handle_error());
  app.use(handle_response());
};
