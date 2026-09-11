# BSF 罗马书研经应用系统 (BSF Romans Study App)

## 🚀 免费发布与部署到 Vercel (100% 免费)

本项目已完成对 Vercel 静态托管平台（Hobby 免费版）的全部适配，包含 `vercel.json` 单页应用（SPA）重定向规则与自动路由配置。

### 方式 A：通过 GitHub 自动连接 Vercel（推荐，后续可自动同步更新）

1. **导出代码至 GitHub**：
   - 点击 AI Studio 界面右上角 **Settings / 导出** 菜单，选择 **Export to GitHub**（或选择 **Export to ZIP** 下载后上传到自己的 GitHub 仓库）。
2. **在 Vercel 中导入**：
   - 打开 [vercel.com](https://vercel.com) 并使用 GitHub 账号登录（完全免费）。
   - 点击 **Add New...** -> **Project**。
   - 在列表中选择刚导出的 GitHub 仓库，点击 **Import**。
3. **确认项目配置（Vercel 会自动识别 Vite）**：
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **点击 Deploy**：
   - 点击 **Deploy**，约 30 秒内构建完毕，Vercel 会自动生成一个永久免费的 `https://<你的项目名>.vercel.app` 域名，支持全球 CDN 加速与免费 HTTPS 证书。

---

### 方式 B：使用 Vercel CLI 本地一键命令行发布

如果你在本地终端安装了 Node.js，也可以直接在项目根目录下运行：

```bash
# 1. 安装 Vercel CLI（只需一次）
npm install -g vercel

# 2. 登录并一键部署
vercel
```

按照提示直接按回车确认默认设置即可瞬间完成上线！
