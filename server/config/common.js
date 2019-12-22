/**
 * $
 * @author ikonon
 * @create 2019/9/6
 */
const fs = require('fs');
const path = require('path');
const config = require('./config.default');

exports.rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

exports.log = (msg, type = 'log') => {
  if (!msg) return;
  let f;

  switch(type) {
    case 'warn':
      f = console.warn;
      break;
    case 'error':
      f = console.error;
      break;
    default:
      f = console.log;
      break;
  }

  f(type + ':', msg);

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay() + 1;

  let logfile = path.join(config.WEBROOT_LOG, year + '-' + month + '-' + day + '.log');

  if (typeof msg === 'object') {
    if (msg instanceof Error) msg = msg.message;
    else msg = JSON.stringify(msg);
  }

  let data = `[ ${new Date().toLocaleString()} ] [ ${type} ] ${msg}\n`;

  fs.writeFileSync(logfile, data, {flag: 'a'});
};
