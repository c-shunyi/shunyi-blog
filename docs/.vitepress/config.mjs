import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客小站",
  description: "欢迎来到我的博客小站，在这里你可以了解到更加不一样的我哟「啾咪~」",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: [
      {
        text: '文章',
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
