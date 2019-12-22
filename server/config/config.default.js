/**
 * 默认配置
 * Created by ikonon on 2019/6/5
 */
const path = require('path');

let config = {
  // debug 为 true 时，用于本地调试
  debug: true,

  name: 'My_Site', // 名字
  description: 'ikonon的个人小站', // 描述

  host: 'http://192.168.43.27:7001',

  /**
   *  mongodb 配置
   *  @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  mongoose: {
    url: 'mongodb://localhost/learn-mongoose',
    options: {
      poolSize: 20, // 线程池大小
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  },

  WEBROOT_LOG: path.resolve(__dirname, '../../logs'),

  // redis 配置，默认是本地
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 1,
    password: '',
  },

  //session & cookie
  auth_cookie_name: 'my_site',
  session: {
    secret_keys: ['my_site_secret'],
    config: {
      key: 'my_site',   //cookie key (default is koa:sess)
      maxAge: 36000,  //86400000 1天 （开发默认10分钟）
      overwrite: true,  //是否可以overwrite    (默认default true)
      httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
      signed: true,   //签名（默认true）
      rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
      renew: false,  //(boolean) renew session when session is nearly expired,
    }
  },

  // 邮件服务配置
  mail_option: {
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    secureConnection: true, // 使用了 SSL
    port: 465,
    auth: {
      user: '794389161@qq.com',
      pass: 'mljpeuaedejfbfeh',
    },
  },
};

module.exports = config;
