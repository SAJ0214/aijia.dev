# 宋爱家技术作品集

Vue 3 + TypeScript + Vite + Tailwind CSS + Vue Router + GSAP + Mermaid 构建的双语个人作品集。

## 本地开发

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 内容维护

- `src/data/profile.ts`：个人信息、技术方向、成长时间轴。
- `src/data/projects.ts`：项目卡片与案例页。只填写有材料支持的内容；缺少可靠细节时隐藏对应区块。
- `src/data/awards.ts`：四张获奖证书及其奖项名称、时间和关联项目。
- `src/data/blog.ts`：Markdown 技术笔记。
- `public/media/`：来自提供材料的项目照片、平台截图与获奖证书。无对应照片的卡片使用代码绘制的图形。
- `public/resume/`：原始 PDF 简历。

项目详情的 `repo` 和 `video` 字段只在真实链接可用时填写。`diagram` 为 Mermaid 源码。博客正文通过 Markdown 渲染，禁止原生 HTML。

## GitHub Pages

工作流位于 `.github/workflows/deploy.yml`。在仓库 Settings → Pages 中选择 **GitHub Actions** 作为构建来源，然后推送到 `main`。Vite 会依据 `GITHUB_REPOSITORY` 设置仓库子路径，构建脚本会生成各路由入口和 404 回退页。

## 资料说明

页面事实依据用户提供的简历、个人介绍与职业规划材料。有关 RoboMaster 与无人机比赛奖项的原始材料表述不一致，站点把有证书支持的奖项归于全国青少年无人机大赛，不归于 RoboMaster。

待补充内容按项目整理在 `CONTENT_TODO.md`。
