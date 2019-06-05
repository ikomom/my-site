'use strict';

const userSerivce = require('../service/User');
const validator = require('validator');
const utility = require('utility');
const sign = require('../helper/sign');

class SignController {
  static async signIn(ctx) {
    const user = await userSerivce.getUserByName('ikonon');
    ctx.body = user;
  }

  static async signUp(ctx) {
    // post请求取数据
    const name = validator.trim(ctx.request.body.username || '').toLowerCase();
    const email = validator.trim(ctx.request.body.email || '').toLowerCase();
    const pass = validator.trim(ctx.request.body.password || '');

    const passhash = sign.bhash(pass);
    const active_token = utility.md5(email + passhash );

    const user = await userSerivce.getUserByName(name);

    if (user) {
      const {name, email, accessToken} = user;
      ctx.body = {name, email, accessToken};
    }else {
      ctx.body = null;
    }
  }
}

module.exports = SignController;
