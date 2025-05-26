import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// 定义 Slice 的 state 类型
interface CounterState {
  value: number;
}

// 初始 state
const initialState: CounterState = {
  value: 0,
};

// 创建一个 Slice (包含 reducer 和 actions)
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 导出 actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 导出 reducer
export const counterReducer = counterSlice.reducer;
