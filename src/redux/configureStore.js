import { createStore, compose } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./modules";
import { createLogger } from 'redux-logger';
// import logger from 'redux-logger'
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState, dispatched }) => next => action => {
    if (typeof action === 'function') {
      console.log('createThunkMiddleware');
      console.log(dispatched);
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
// 自定义日志
let logger = createLogger({
  stateTransformer: (state) => {
    // 转换Immutable结构到js结构，toJS会加大性能损耗，只在开发时用
    return state.toJS();
  },
  diff: true,//显示哪些属性变化
});

let enhancer;
let middlewares = [thunk];// 中间件数组默认

enhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  // 创建store
  const store = createStore(rootReducer, initialState, enhancer);
  // webpack热更新
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./modules", () =>
      store.replaceReducer(require("./modules"))
    );
  }

  return store;
}

function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
        `Other middleware would not be applied to this dispatch.`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
      dispatched: dispatch,
    };
    console.log('dispatch');
    console.log(dispatch);

    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    console.log(dispatch);
    console.log(middlewareAPI.dispatched);
    return {
      ...store,
      dispatch
    }
  }
}
