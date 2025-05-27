import { configureStore } from '@reduxjs/toolkit';
import stateLoggerMiddleware from './middleware/loggerMiddleware';
import { counterReducer, languageReducer } from './storeSlice';

// 创建 store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    // ... 其他 reducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stateLoggerMiddleware),
});

// 定义 RootState 类型 (用于 useSelector)
export type RootState = ReturnType<typeof store.getState>;

// 定义 AppDispatch 类型 (用于 useDispatch)
export type AppDispatch = typeof store.dispatch;
