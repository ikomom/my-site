const BaseModel = require('./BaseModel');
const common = require('../config/common');

class AvatarModel extends BaseModel{
  getName() {
    return 'avatar';
  }

  getSchema() {
    return {
      uid: { type: Number, required: true},
      baseCode: String,// base64编码
      type: String,// 图片格式
    }
  }
}
