const mongoose = require('mongoose');

module.exports = (config) => {
  //连接数据库
  const {mongoose: {url, options}} = config;
  const db = mongoose.connection;
  mongoose.connect(url, options);
  /**
   * 连接成功
   */
  db.on('connected', function () {
    console.log(new Date() + 'Mongoose connection open ' + url + '连接成功');
  });

  /**
   * 连接异常
   */
  db.on('error', function (err) {
    console.log(new Date() + 'Mongoose connection error: ' + err);
    process.exit(1);
  });

  /**
   * 连接断开
   */
  db.on('disconnected', function () {
    console.log(new Date() + 'Mongoose connection disconnected');
    process.exit(1);
  });
};

/**
 * 公共创建model的方法
 * @param model model名字
 * @param schema
 * @return {Model}
 */
function model(model, schema) {
  if (!(schema instanceof mongoose.Schema)) {
    schema = new mongoose.Schema(schema);
  }
  schema.set('autoIndex', false);
  return mongoose.model(model, schema, model)
}
exports.model = model;
