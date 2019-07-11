/**
 * Created by ikonon on 2019/6/20
 */
const URL = require('./urlConfig');
const axios = require('axios');

function getImg({pic, litpic}) {
  return [pic, litpic]
}

function reqImg(url) {
  return axios.get(url, {
    headers: {
      Referer: "https://www.bilibili.com/"
    },
    responseType: "arraybuffer"
  });
}

function genBase64(data) {
  return 'data:image/png;base64,' + data.toString('base64')
}

function stripImg(url) {
  return `<img src=${url} alt="no-content" style="width: 100%; height: 100px"/>`
}


async function base64Render(img) {
  const res = await axios.all(img.map(url => reqImg(url)));
  return res.map(r => genBase64(r.data))
    .map(base64 => stripImg(base64))
    .join('');
}

class HomeController {
  static async topbg(ctx) {
    const response = await axios.get(URL.topbg);
    const img = getImg(response.data.data[0]);
    ctx.body = await base64Render(img)
  }

  static async hot(ctx) {
    const response = await axios.get(URL.hot);
    ctx.body = response.data
  }

  static async liveXhr(ctx) {
    const response = await axios.get(URL.search);
    ctx.body = response.data
  }

}

module.exports = HomeController;
