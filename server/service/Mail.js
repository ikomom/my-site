// /**
//  * 邮件发送
//  * Created by ikonon on 2019/5/17
//  */
// 'use strict';
//
// const mailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');
//
// class MailService {
//   async sendMail(data) {
//     const { config } = this;
//     // 封装成smtp防止误判为垃圾邮件-然而对qq还是不管用
//     const transporter = mailer.createTransport(smtpTransport(config.mail_option));
//     // 发送失败后尝试继续发送
//     for (let i = 0; i < 6; i++) {
//       try {
//         await transporter.sendMail(data);
//         console.log('发送邮件成功', data)
//         // 发送邮件成功: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
//         break;
//       } catch (err) {
//         if (i === 5) {
//           console.error('发送邮件失败---结束', err, data);
//           return new Error(err);
//         }
//         console.error('发送邮件失败---尝试继续发送', err, data);
//       }
//     }
//   }
//
//   /**
//    * 发送激活邮件
//    * @param {string} who 邮箱
//    * @param {string} token accessToken
//    * @param {string} name 登录名
//    */
//   async sendActiveMail(who, token, name) {
//     const { config } = this;
//     const from = `${config.name} <${config.mail_option.auth.user}>`;
//     const to = who;
//     const subject = config.name + '帐号激活';
//     const html = '<p>您好：' + name + '</p>' +
//       '<p>我们收到您在' + config.name + '的注册信息，请点击下面的链接来激活帐户：</p>' +
//       '<a href= "' + config.host + '/active_account?key=' + token + '&name=' + name + '">激活链接</a>' +
//       '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
//       '<p>' + config.name + ' 谨上。</p>';
//
//     this.sendMail({
//       from,
//       to,
//       subject,
//       html,
//     });
//   }
// }
//
// module.exports = MailService;
