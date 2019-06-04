'use strict';
const mongoose = require('mongoose');

module.exports = () => {
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    // 本地登陆信息
    name: { type: String },
    pass: { type: String },
    email: { type: String },
    url: { type: String },
    active: { type: Boolean }, // 是否激活
    accessToken: { type: String },
    // github账号信息
    avatar: { type: String },
    githubId: { type: String },
    githubUsername: { type: String },
    githubAccessToken: { type: String },

    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
  }, {
    versionKey: false, // true时会自动加入__v字段记录版本
    timestamps: { createdAt: 'create_at', updatedAt: 'update_at' },
  });

  // 建立索引
  UserSchema.index({ email: 1 }, { unique: true });
  UserSchema.index({ accessToken: 1 });
  // 在调用save指令前调用
  UserSchema.pre('save', function(next) {
    this.update_at = new Date();
    next();
  });

  return mongoose.model('Users', UserSchema);
};
