'use strict';

const userSerivce = require('../service/User');

class UserController {
  static async getUserInfo(ctx) {
    const user = await userSerivce.getUserByName('ikonon');
    ctx.body = user;
  }
}

module.exports = UserController;
