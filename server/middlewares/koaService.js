const path = require('path');
const glob = require('glob');

const _js = Symbol('JSFLAG');
const _dir = Symbol('DIRFLAG');
const _vmmap = Symbol('DIRMAP');
const _pathname = Symbol('PATHNAMEMAP');
const _module = Symbol('JSMODULE');

defaultOptions = {
  serviceRoot: path.join(process.cwd(), 'service/')
};

function files2dirMap(opt, files) {
  const map = {};
  files.forEach(file => {
    let fileDir = file.replace(/\.js$/, '').split('/');
    let tmp = map;
    fileDir.forEach((name, ind) => {
      if (ind === fileDir.length - 1) {
        const ne = {
          [_js]: true,
          [_pathname]: path.join(opt.serviceRoot, file),
          [_module]: require(path.join(opt.serviceRoot, file))
        };
        tmp[name] = tmp[name] ? Object.assign(tmp[name], ne) : ne;
      } else {
        tmp[name] = tmp[name]
          ? Object.assign(tmp[name], {[_dir]: true})
          : {[_dir]: true};
      }
      tmp = tmp[name];
    })
  });
  return map
}

/**
 * 把serivce挂载到this下的中间件
 * @param {*} options
 */
function genService(options) {// todo 重新封装，把config和contoller想个方法集成
  options = options || {};
  options = Object.assign({}, defaultOptions, options);
  const files = glob.sync('**/*.js', {nodir: true, cwd: options.serviceRoot});
  const fileMap = files2dirMap(options, files);

  return async (ctx, next) => {
    // some code
    const cacheMap = new WeakMap();
    const Handler = {
      get: function (target, key) {
        if (key === '__file' && target[_pathname]) {
          const serv = new (target[_module])();
          serv.ctx = ctx;
          return serv
        }
        if (!target[key] || typeof target[key] !== 'object') {
          return undefined
        }
        if (cacheMap.has(target[key])) {
          // console.log('get from cacheMap')
          const serv = cacheMap.get(target[key]);
          serv.ctx = ctx;
          return serv
        }

        let serv;
        if (target[key] && target[key][_dir]) {
          serv = Object.setPrototypeOf({}, new Proxy(target[key], Handler))
        } else if (target[key] && target[key][_js]) {
          serv = new (target[key][_module])();
          serv.ctx = ctx
        }
        cacheMap.set(target[key], serv);
        return serv
      }
    };
    const service = Object.setPrototypeOf({}, new Proxy(fileMap, Handler));
    Object.defineProperty(ctx, 'service', {
      get() {
        return service
      }
    });
    console.log('handle=============', ctx.service.User.getUserByName)
    await next()
  }
}

module.exports = genService
