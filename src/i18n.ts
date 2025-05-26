// src/i18n.ts
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'; // 用于从服务器/public目录加载翻译文件
import { initReactI18next } from 'react-i18next';

i18n
  // 检测用户语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 将 i18n 实例传递给 react-i18next
  .use(initReactI18next)
  // 使用 HttpApi 从 public/locales 加载翻译
  // 文档: https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // 初始化 i18next
  // 文档: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true, // 在开发模式下开启调试日志
    fallbackLng: 'zh', // 如果检测不到用户语言或当前语言没有翻译，则使用的回退语言
    interpolation: {
      escapeValue: false, // react 已经做了 XSS 防护，所以不需要转义
    },
    backend: {
      // HttpApi 的配置 (如果使用它)
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 翻译文件的路径
    },
    // 如果不想使用 HttpApi，可以直接在这里提供资源 (适用于小型应用或测试)
    // resources: {
    //   en: {
    //     translation: {
    //       welcomeMessage: "Welcome to our application!",
    //       greeting: "Hello, {{name}}!"
    //     }
    //   },
    //   zh: {
    //     translation: {
    //       welcomeMessage: "欢迎来到我们的应用！",
    //       greeting: "你好，{{name}}！"
    //     }
    //   }
    // },
    react: {
      useSuspense: true, // 推荐使用 Suspense 处理加载状态
    },
    supportedLngs: ['zh', 'en'], // 支持的语言列表
    defaultNS: 'common', // 默认的命名空间
    ns: ['common', 'header', 'footer', 'home'], // 使用的命名空间列表 (如果 HttpApi 需要)
  });

export default i18n;
