'use strict';

/**
 * web端路由
 * @param {Application} app
 * @param {Router} router
 */
const userController = require('../controller/User');
const signController = require('../controller/Sign');
const danMuController = require('../controller/DanMu');

module.exports = (app, router) => {
  router
    .get('/userInfo', userController.getUserInfo)
    .post('/signin', signController.signIn)
    .post('/signup', signController.signUp)

    .get('/danmu', danMuController.danmu)

};
