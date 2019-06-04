'use strict';

const serivce = require('../service/UserService');

class UserController {
  static async getUserInfo(ctx) {
    const user = await serivce.getUserByName('ikonon');
    ctx.body = user;
  }
}

module.exports = UserController;
