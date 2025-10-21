import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客小站",
  description: "欢迎来到我的博客小站，在这里你可以了解到更加不一样的我哟「啾咪~」",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目计划', link: '/project-intro' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: [
      {
        text: '技术文章',
        collapsed: true,  // 默认折叠状态
        items: [
          {
            text: 'JavaScript',
            collapsed: true,
            items: [
              { text: 'JavaScript 基础知识', link: '/js/js-basics' },
              { text: 'ES6+ 新特性详解', link: '/js/es6-features' },
              { text: '异步编程实战', link: '/js/async-programming' }
            ]
          },
          {
            text: 'Vue.js',
            collapsed: true,
            items: [
              { text: 'Vue3 组合式API详解', link: '/vue/composition-api' },
              { text: 'Vue Router 路由管理', link: '/vue/vue-router' },
              { text: 'Pinia 状态管理', link: '/vue/pinia-guide' }
            ]
          },
          {
            text: 'Node.js',
            collapsed: true,
            items: [
              { text: 'Node.js 入门指南', link: '/node/getting-started' },
              { text: 'Express 框架实战', link: '/node/express-guide' },
              { text: 'Node.js 性能优化', link: '/node/performance' }
            ]
          }
        ]
      },
      {
        text: '项目计划',
        collapsed: true,  // 默认折叠状态
        items: [
          { text: '项目计划', link: '/project-intro' },
        ]
      },
      {
        text: '情侣记账本',
        collapsed: true,  // 默认折叠状态
        items: [
          { text: '情侣记账本', link: '/cp-account-book' },
          { text: '开发进度v1.0', link: '/cp-account-book-v1.0' },
        ]
      },
      {
        text: '生活随笔',
        collapsed: true,  // 默认折叠状态
        items: [
          { text: '我的第一篇文章', link: '/article1' },
          { text: 'VitePress 博客搭建全过程', link: '/article2' }
        ]
      },
      {
        text: '关于我',
        collapsed: true,  // 默认折叠状态
        items: [
          { text: '个人介绍', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/c-shunyi' }
    ]
  }
})
