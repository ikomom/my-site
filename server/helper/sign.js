/**
 * Created by ikonon on 2019/6/5
 */
"use strict";

const bcrypt = require('bcryptjs');

module.exports = {
  // 生成hash值
  bhash : str => bcrypt.hashSync(str, 10),
  /**
   * 比较hash值
   * @param {string} str 原值
   * @param {string} hash hash值2
   * @return {boolean} true
   */
  bcompare: (str, hash) => bcrypt.compareSync(str, hash),
};
