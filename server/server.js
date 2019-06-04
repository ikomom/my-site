/**
 * Created by ikonon on 2019/5/14
 */
const Koa = require('koa');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
const router = new Router();
// application 全局只用一个
const app = new Koa();
require('./config')(app);// 加载初始化设置

//中间件-第三方
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true,  //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true,   //签名默认true
  rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
app.use(bodyParser());
app.use(logger());
//中间件-自定义
app.use(async (ctx, next) => {
  try {
    await next();
  }catch (e) {
    console.log(e)
  }
});
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;
  ctx.set("Access-Control-Allow-Origin", "*");// http://localhost:3000
  ctx.set("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
  ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  await next()
});
// 加载路由
require('./router/web')(app, router);
// 启动路由
app.use(router.routes())
  .use(router.allowedMethods());
// 监听端口
app.listen(7000, function () {
  console.log('后端已启动', 7000)
});
