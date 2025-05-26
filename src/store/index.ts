import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './storeSlice/counterSlice';

// 创建 store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // ... 其他 reducers
  },
});

// 定义 RootState 类型 (用于 useSelector)
export type RootState = ReturnType<typeof store.getState>;

// 定义 AppDispatch 类型 (用于 useDispatch)
export type AppDispatch = typeof store.dispatch;
