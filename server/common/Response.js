/**
 * Created by ikonon on 2019/7/11
 */
export default class Response {
  static succuess(data, msg = '') {
    return {
      data,
      code: 200,
      msg
    }
  }
}
