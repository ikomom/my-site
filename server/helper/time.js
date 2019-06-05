/**
 * Created by ikonon on 2019/6/5
 */
"use strict";

const moment = require('moment');
// 相对时间
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
