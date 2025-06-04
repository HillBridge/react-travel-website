// postcss.config.js

export default {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 750, // 设计稿的视口宽度，UI 设计稿给的是多少就写多少 (常用: 750 或 375)
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表，['*']表示所有属性,'!font-size'表示禁用字体转换
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlacklist: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 设置最小的转换数值，如果设置为1，只有大于1的值会被转换
      mediaQuery: false, // هل يسمح بتحويل وحدات البكسل في استعلامات الوسائط @media
      replace: true, // هل يستبدل القاعدة التي تحتوي على وحدات vw بدلاً من إضافتها.
      // exclude: [
      //   /node_modules/i, // 通常也会排除 node_modules
      // ],
      exclude: [
        /(?<!\.module)\.css$/i, // 排除所有不以 .module.css 结尾的 .css 文件
        // 这个正则使用了反向预查 (negative lookbehind)
        // 意思是：匹配 .css 结尾，但前面不能是 .module
        /node_modules/i,
      ],
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1334, // 横屏时使用的视口宽度
    },
    // 可以添加其他 PostCSS 插件，比如 autoprefixer
    autoprefixer: {
      overrideBrowserslist: [
        'last 2 versions', // 所有浏览器的最新两个版本
        '> 1%', // 全球使用率超过 1% 的浏览器
        'iOS >= 8', // iOS 8 及以上版本
        'Android >= 4.4', // Android 4.4 及以上版本
        'not ie <= 8', // 排除 IE8 及以下版本
      ],
      grid: true, // 启用 CSS Grid 布局前缀
      flexbox: true, // 启用 Flexbox 布局前缀
      cascade: true, // 启用级联前缀
      remove: true, // 移除过时的前缀
    },
  },
};
