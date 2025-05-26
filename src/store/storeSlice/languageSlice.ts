import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type Language = 'zh' | 'en';

// 定义 Slice 的 state 类型
interface LanguageState {
  value: Language;
  list: { name: string; code: Language }[];
}

// 初始 state
const initialState: LanguageState = {
  value: (localStorage.getItem('i18nextLng') as Language) || 'zh',
  list: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ],
};

// 创建一个 Slice (包含 reducer 和 actions)
const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.value = action.payload;
    },
  },
});

// 导出 actions
export const { setLanguage } = languageSlice.actions;

// 导出 reducer
export const languageReducer = languageSlice.reducer;
