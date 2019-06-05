'use strict';

const userSerivce = require('../service/User');

class SignController {
  static async signIn(ctx) {
    const user = await userSerivce.getUserByName('ikonon');
    ctx.body = user;
  }

  static async signUp(ctx) {
    const user = await userSerivce.getUserByName('ikonon');
    if (user) {
      const {name, email, accessToken} = user;
      ctx.body = {name, email, accessToken};
    }else {
      ctx.body = null;
    }
  }
}

module.exports = SignController;
