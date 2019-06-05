"use strict";

module.exports = () => {
  return async function handle_response(ctx, next) {
    await next();
    let res = ctx.response;
    if (res.body === null) {
      res.status = 200;
      res.body = {}
    }
    console.log(ctx.response.body)
  }
};
