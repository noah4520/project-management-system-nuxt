# Project Management System

一個用 Nuxt 製作的簡易後台系統。

## 專案初始設置

- Node Version: 20.14.0，可透過 [Node Version Manager(nvm)](https://github.com/nvm-sh/nvm) 指令 `nvm use` 切換版本。
- 專案管理工具使用 [pnpm](https://pnpm.io/)。

### 📦 專案安裝

```zsh
pnpm install
```

### 🚀 啟動 Development Server

```zsh
pnpm dev
```

## 🧞 指令

| Command              | Action                                                     |
| :------------------- | :--------------------------------------------------------- |
| `pnpm install`       | 安裝套件                                                   |
| `pnpm dev`           | 在 `localhost:3000` 啟動 Development Server                |
| `pnpm build`         | 在 `/.output` 輸出 （SSR 模式）                            |
| `pnpm generate`      | 在 `/.output` 輸出（SSG 模式）                             |
| `pnpm preview`       | 若有打包完成的檔案，啟動 Development Server 檢視打包的檔案 |
| `pnpm analyze`       | 打包完成後，開啟 Webpack 分析器                            |
| `pnpm postinstall`   | 建立一個 .nuxt 目錄並產生型別                                 |
| `pnpm lint`          | 執行 eslint 檢查                                           |
| `pnpm typecheck`     | 執行 TypeScript 檢查                                       |
