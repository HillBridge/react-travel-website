import { Middleware } from 'redux';

const stateLoggerMiddleware: Middleware<any, any, any> = (storeAPI) => (next) => (action) => {
  // 1. 获取 action 触发前的 state
  const prevState = storeAPI.getState();

  // 打印日志的头部，可以包含时间戳等
  console.groupCollapsed(`ACTION: ${action.type} @ ${new Date().toLocaleTimeString()}`);
  console.log('%cAction:', 'color: #03A9F4; font-weight: bold;', action);
  console.log('%cPrevious State:', 'color: #9E9E9E; font-weight: bold;', prevState);

  // 2. 调用下一个中间件或 store.dispatch，让 action 流向 reducer
  const result = next(action);

  // 3. 获取 action 触发后的 state (reducer 处理完毕后)
  const nextState = storeAPI.getState();
  console.log('%cNext State:', 'color: #4CAF50; font-weight: bold;', nextState);

  console.groupEnd();

  // 4. 返回 dispatch 的结果
  return result;
};

export default stateLoggerMiddleware;
