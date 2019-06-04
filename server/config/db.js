function mongondb(app) {
  const mongoose = require('mongoose');
  //连接数据库
  const db = mongoose.connection;
  const DB_URL = 'mongodb://localhost/learn-mongoose';
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
  };
  mongoose.connect(DB_URL, options);
  /**
   * 连接成功
   */
  db.on('connected', function () {
    console.log(new Date() + 'Mongoose connection open ' + DB_URL + '连接成功');
  });

  /**
   * 连接异常
   */
  db.on('error', function (err) {
    console.log(new Date() + 'Mongoose connection error: ' + err);
  });

  /**
   * 连接断开
   */
  db.on('disconnected', function () {
    console.log(new Date() + 'Mongoose connection disconnected');
  });
}

module.exports = mongondb();
