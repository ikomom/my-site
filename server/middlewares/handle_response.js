"use strict";

module.exports = () => {
  return async function handle_response(ctx, next) {
    await next();
    let res = ctx.response;
    if (!res.body) {
      res.status = 200;
      res.body = {}
    }
  }
};
