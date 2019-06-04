import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import { createLogger } from 'redux-logger';
// 自定义日志
let logger = createLogger({
  stateTransformer: (state) => {
    // 转换Immutable结构到js结构，toJS会加大性能损耗，只在开发时用
    return state.toJS();
  },
  diff: true,//显示哪些属性变化
});

let finalCreateStore;
let middlewares = [thunk];// 中间件数组默认

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__ ) {
  middlewares.push(logger);// 开发时打印logger
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    // 集成redux_devtools
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);
} else {// 生产
  finalCreateStore = applyMiddleware(...middlewares)(createStore);
}

export default function configureStore(initialState) {
  // 创建store
  const store = finalCreateStore(rootReducer, initialState);
  // webpack热更新
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./modules", () =>
      store.replaceReducer(require("./modules"))
    );
  }

  return store;
}
