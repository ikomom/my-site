/**
 * Created by ikonon on 2019/6/7
 */
const passport = require('koa-passport');
const LocalStrategy =  require('passport-local').Strategy;
const userService = require('../service/User');

function genUser(username, password) {
  return {
    id: 1,
    username,
    password,
  }
}

/**
 * 序列化ctx.login()触发, passport.authenticate鉴权
 * todo 完善鉴权
 * 1. 序列化
 */
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ', user);
  done(null, user.id)
});

// 反序列化（请求时，session中存在"passport":{"user":"1"}触发）
passport.deserializeUser(async function(id, done) {
  console.log('deserializeUser: ', id);
  let user = genUser('admin', '123456');
  done(null, user)
});

// 提交数据(策略)
passport.use(new LocalStrategy({
  // usernameField: 'email',
  // passwordField: 'passwd'
}, function(username, password, done) {
  console.log('LocalStrategy', username, password);
  let user = genUser(username, password);
  done(null, user, {msg: 'this is a test'})
  // done(err, user, info)
}));


module.exports = passport;
