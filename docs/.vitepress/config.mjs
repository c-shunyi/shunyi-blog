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
        items: [
          { text: '文章1', link: '/article1' },
          { text: '文章2', link: '/article2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
