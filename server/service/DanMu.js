/**
 * Created by ikonon on 2019/5/15
 */
'use strict';

const axios = require('axios');

class DanMuService {
  static async getDamuInfo() {
    const info = await axios.post("https://api.live.bilibili.com/ajax/msg", 'roomid=35399&csrf_token=9014409fd2366f0ffaf98fa4d8f8d35d&csrf=9014409fd2366f0ffaf98fa4d8f8d35d&visit_id=',{
      "credentials": "omit",
      "headers": {"accept": "application/json, text/plain, */*", "content-type": "application/x-www-form-urlencoded"},
      "referrer": "https://live.bilibili.com/1150",
      "referrerPolicy": "no-referrer-when-downgrade",
      "method": "POST",
      "mode": "cors"
    });

    return info;
  }

}

module.exports = DanMuService;
