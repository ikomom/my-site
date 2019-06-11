'use strict';

const serivce = require('../service/DanMu');


function generateDanMu({uid, text, timeline}) {
  return {
    key: uid,
    text,
    time: 200,
    color: 'blue',
    createdAt: timeline,
  }
}
class DanMuController {
  static async danmu(ctx) {
    const info = await serivce.getDamuInfo();
    const roomInfo = info.data.data.room;
    ctx.body = {
      data: roomInfo.map(item => generateDanMu(item)),
      status: 'success'
    };
  }

}

module.exports = DanMuController;
