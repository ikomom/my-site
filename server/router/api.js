/**
 * Created by ikonon on 2019/6/20
 */
const HomeController = require('../api/Home');

module.exports = (app, router) => {
  router
    .get('/api/v1/home', HomeController.topbg)
    .get('/api/v1/hot', HomeController.hot)
    .get('/api/v1/liveXhr', HomeController.liveXhr)


};
