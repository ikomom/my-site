/**
 * Created by ikonon on 2019/6/3
 */
module.exports = () => {
  const config = require('./config.default');
  require('./db')(config);
  return config;
};
