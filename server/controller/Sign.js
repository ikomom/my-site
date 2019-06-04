'use strict';

const serivce = require('../service/UserService');

class SignController {
  static async signIn(ctx) {
    const user = await serivce.getUserByName('ikonon');
    ctx.body = user;
  }

  static async signUp(ctx) {
    const user = await serivce.getUserByName('ikonon');
    if (user) {
      const {name, email, accessToken} = user;
      ctx.body = {name, email, accessToken};
    }else {
      ctx.body = null;
    }
  }
}

module.exports = SignController;
