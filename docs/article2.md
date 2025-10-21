# VitePress 博客搭建全过程

> 发布时间：2024-10-21

## 简介

这篇文章记录了我使用 VitePress 搭建个人博客的完整过程。如果你也想要一个简洁美观的技术博客，这篇文章会对你有所帮助！

## 什么是 VitePress？

VitePress 是一个基于 Vite 和 Vue 的静态站点生成器，具有以下特点：

- ⚡ **快速** - 基于 Vite，开发体验极佳
- 📝 **简单** - 使用 Markdown 编写内容
- 🎨 **美观** - 默认主题简洁现代
- 🔧 **可定制** - 支持主题和插件扩展

## 搭建步骤

### 1. 初始化项目

```bash
# 创建项目目录
mkdir my-blog
cd my-blog

# 初始化 package.json
npm init -y

# 安装 VitePress
pnpm add -D vitepress
```

### 2. 创建基本结构

```
docs/
├── .vitepress/
│   └── config.js
├── index.md
└── about.md
```

### 3. 配置文件

在 `docs/.vitepress/config.js` 中添加配置：

```javascript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "技术分享与生活记录",
  themeConfig: {
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
      { icon: 'github', link: 'https://github.com/your-username' }
    ]
  }
})
```

### 4. 添加脚本

在 `package.json` 中添加运行脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

### 5. 本地开发

```bash
pnpm run docs:dev
```

## 部署到 EdgeOne Pages

### 1. 推送到 GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. 配置部署

在 EdgeOne Pages 中：
- 选择 GitHub 仓库
- 构建命令：`pnpm run docs:build`
- 输出目录：`docs/.vitepress/dist`

### 3. 环境变量

设置环境变量 `CI=true` 以避免 pnpm 的交互式提示。

## 遇到的问题

### crypto.hash 错误

**问题**：部署时出现 `crypto.hash is not a function` 错误

**解决方案**：将 VitePress 从 alpha 版本更新到稳定版本

```bash
pnpm add -D vitepress@^1.0.0
```

### node_modules 体积问题

**问题**：误将 node_modules 提交到 git

**解决方案**：
1. 添加 `.gitignore` 文件
2. 从 git 中移除 node_modules
3. 重新提交

## 总结

VitePress 是一个优秀的静态博客生成工具，特别适合技术博客。整个搭建过程相对简单，遇到问题时参考官方文档通常能找到解决方案。

希望这篇文章能帮助到想要搭建个人博客的朋友们！

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [EdgeOne Pages 部署指南](https://cloud.tencent.com/product/teo)

---

*如果觉得有用，别忘了给个 Star ⭐*
