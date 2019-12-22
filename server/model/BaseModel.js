/**
 * 基本model
 * @author ikonon
 * @create 2019/9/6
 */
const mongoose = require('mongoose');
const common = require('../config/common');
const autoIncrement = require('../common/mongoose-auto-increment');
const db = require('../config/db');

class BaseModel {
  constructor(props) {
    this.schema = new mongoose.Schema(this.getSchema());
    this.name = this.getName();

    // 只能为bool值true
    if (this.isNeedAutoIncrement() === true) {
      this.schema.plugin(autoIncrement.plugin, {
        model: this.name,
        field: this.getPrimaryKey(),
        startAt: 9,
        incrementBy: common.rand(1, 10)
      });
    }

    this.model = db.model(this.name, this.schema);
    common.log('BaseModel', this.model);
  }

  /**
   * 需要自增字段
   * @return {boolean}
   */
  isNeedAutoIncrement() {
    return true;
  }

  /**
   * 可通过覆盖此方法生成其他自增字段
   * @return {string}
   */
  getPrimaryKey() {
    return '_id';
  }

  /**
   * 获取collection的schema表结构
   */
  getSchema() {
    common.log('Model类需要getSchema函数', 'error');
  }

  /**
   * schema的名字
   */
  getName() {
    common.log("Model类需要getName函数", "error")
  }
}

module.exports = BaseModel;
