# 舜意的博客网站 📚

> 了解我，从我的博客网站开始吧！！！

博客网站链接：[shunyi-blog.shunyi.website](https://shunyi-blog.shunyi.website)

## 项目介绍 ✨

这是我的个人博客网站，使用 VitePress 构建。在这里你可以找到：

- 💻 技术文章和开发心得
- 📝 学习笔记和总结
- 🌱 个人成长感悟
- 🎯 项目分享和想法

## 技术栈 🛠️

- **框架**: [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **样式**: 默认主题 + 自定义样式
- **部署**: EdgeOne Pages
- **包管理**: pnpm

## 快速开始 🚀

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/c-shunyi/shunyi-blog.git
cd shunyi-blog

# 安装依赖
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm run docs:dev

# 开发服务器将在 http://localhost:5173 启动
```

### 构建生产版本

```bash
# 构建静态文件
pnpm run docs:build

# 预览构建结果
pnpm run docs:preview
```

## 项目结构 📁

```
shunyi-blog/
├── docs/                    # 文档目录
│   ├── .vitepress/         # VitePress 配置
│   │   ├── config.mjs      # 站点配置文件
│   │   ├── cache/          # 缓存文件
│   │   └── dist/           # 构建输出目录
│   ├── about.md            # 关于页面
│   ├── article1.md         # 文章1
│   ├── article2.md         # 文章2
│   ├── index.md            # 首页
│   └── ...                 # 其他文章
├── package.json            # 项目配置
├── pnpm-lock.yaml         # 依赖锁定文件
├── .gitignore             # Git 忽略文件
├── .npmrc                 # npm 配置
└── README.md              # 项目说明
```

## 部署 🚀

本项目使用 EdgeOne Pages 进行自动部署：

### 配置说明

- **构建命令**: `pnpm run docs:build`
- **输出目录**: `docs/.vitepress/dist`
- **环境变量**: `CI=true`

### 部署流程

1. 推送代码到 GitHub
2. EdgeOne Pages 自动检测变更
3. 执行构建命令
4. 部署到生产环境

## 自定义配置 ⚙️

### 修改站点信息

编辑 `docs/.vitepress/config.mjs`：

```javascript
export default defineConfig({
  title: "你的博客标题",
  description: "你的博客描述",
  // ...其他配置
})
```

### 添加新文章

1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `config.mjs` 的 `sidebar` 中添加链接
3. 使用 Markdown 语法编写内容

### 自定义样式

在 `docs/.vitepress/theme/` 目录下添加自定义 CSS 和组件。

## 开发指南 💡

### 添加新功能

1. Fork 本项目
2. 创建功能分支: `git checkout -b feature/new-feature`
3. 提交更改: `git commit -am 'Add new feature'`
4. 推送分支: `git push origin feature/new-feature`
5. 创建 Pull Request

### 问题反馈

如果遇到问题或有建议，请：

- 创建 [Issue](https://github.com/c-shunyi/shunyi-blog/issues)
- 发送邮件到: your-email@example.com

## 许可证 📄

[MIT License](LICENSE)

## 联系方式 📫

- **GitHub**: [@c-shunyi](https://github.com/c-shunyi)
- **网站**: [shunyi-blog.shunyi.website](https://shunyi-blog.shunyi.website)
- **邮箱**: your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！

💬 欢迎交流学习，一起进步！
