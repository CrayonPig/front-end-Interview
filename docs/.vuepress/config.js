const path = require("path");
const algorithmRoute = require("./algorithm-route");

module.exports = {
  title: "前端面试题整理",
  description:
    "前端面试题整理;使用过程中如碰到问题，请到Github进行提问。 https://github.com/CrayonPig/frontendInterview",
  dest: "./dist/",
  plugins: ['@vuepress/medium-zoom'],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      const options = {
        btnText: '复制代码', // 'copy' | button text
        successText: '成功', // 'copy success' | copy-success text
      };
      md.use(require("markdown-it-copy"), options);
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, "../../assets")
      },
    },
  },
  extraWatchFiles: [
    '.vuepress/*.js',
  ],
  themeConfig: {
    nav: [
      { text: '前端工程化',link: 'http://guide.duanhl.com/' },
      { text: '源码分析',link: 'http://origin.duanhl.com/' },
      { text: "GitHub", link: "https://github.com/CrayonPig/originCodeCommit" },
    ],
    sidebar: {
      ...algorithmRoute
    },
  },
};
