import axios from 'axios';
import {message} from 'antd';

// 请求
axios.interceptors.request.use(function (request) {
  message.loading('请求中...',0);
  return request
}, rejectErr);

// 响应
axios.interceptors.response.use(function (response) {
  message.destroy();// 这会摧毁全局提示，可能还需要优化
  if (response && response.status === 200) {
    message.success('请求成功', 1)
  }else {
    message.error('请求失败', 1)
  }
  return response
}, handleResponseErr);
// 处理错误
function handleResponseErr(err) {
    if (err && err.response) {
      err.message = codeMessage[err.response.status] || '连接服务器失败!';
    }
    message.error(err.message);
    return rejectErr(err);
}

function rejectErr(err) {
  return Promise.reject(err);
}

// 状态码错误信息
const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
