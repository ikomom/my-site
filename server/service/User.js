/**
 * Created by ikonon on 2019/5/15
 */
'use strict';

const uuid = require('uuid');
const userModel = require('../model/User')();

class UserService {
  static async getUserByName(name) {
    const query = {name: new RegExp(`^${name}$`, 'i')};// 精确查询
    return userModel.findOne(query).exec();
  }

  /*
   * 根据 githubId 查找用户
   * @param {String} githubId 登录名
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  static async getUserByGithubId(githubId) {
    const query = {githubId};
    return userModel.findOne(query).exec();
  }

  // 新增用户并保存
  static async newAndSave(name, pass, email, active) {
    let user = new userModel();
    user.name = name;
    user.pass = pass;
    user.email = email;
    user.active = active || false;
    user.accessToken = uuid.v4();

    return user.save();
  }
}

module.exports = UserService;
