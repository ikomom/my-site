/**
 * Created by ikonon on 2019/5/14
 */
const Koa = require('koa');
const session = require('koa-session');
const KoaRedis = require('koa-redis');
const passport = require('./common/passport-local');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
const common = require('./config/common');

const router = new Router();
// application 全局只用一个
const app = new Koa();
// 加载初始化设置
const config = require('./config')();

const store = KoaRedis(config.redis);
store.client.on('connect', () => {
  common.log('[connect redis success!!!]')
});

store.client.on('error', (info) => {
  common.log('[connect redis error]:' + info, 'error')
});
//中间件-第三方
app.keys = config.session.secret_keys;
const session_config = Object.assign({}, config.session.config, {store: store});
app.use(session(session_config, app));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());
app.use(logger());
app.passport = passport;// 挂载passport到app
//中间件-自定义
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;
  ctx.set("Access-Control-Allow-Origin", "http://localhost:3000");// 本地允许
  ctx.set("Access-Control-Allow-Credentials", "true");// 本地允许
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  await next()
});
require('./middlewares')(app);
// 加载路由
require('./router/web')(app, router);
require('./router/api')(app, router);
// 启动路由
app.use(router.routes())
  .use(router.allowedMethods());
// 监听端口
app.listen(7000, function () {
  console.log('后端已启动', 7000)
});
