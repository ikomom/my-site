/**
 * 判断用户是否登陆 // todo 未绑定
 * Created by ikonon on 2019/6/7
 */

'use strict';

module.exports = () => {
  // 验证用户是否登录
  return async function auth_user(ctx, next) {
    // Ensure current_user always has defined.
    ctx.locals.current_user = null;
    // 用户登陆时ctx会自动挂载当前user，通过passport。
    const { user } = ctx;

    if (!user) {
      return await next();
    }


    ctx.locals.current_user = user;
    await next();
  };
};
