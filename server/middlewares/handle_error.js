"use strict";

module.exports = () => {
  return async function handle_error(ctx, next) {
    try {
      await next();
    }catch (e) {
      console.log(e);
    }
  }
};
