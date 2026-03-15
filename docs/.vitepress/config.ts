import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DocsJS Editor",
  description: "Multi-Editor Integration for DocsJS",
  lang: "en-US",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap", rel: "stylesheet" }],
    ["meta", { name: "theme-color", content: "#0d74ce" }],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "DocsJS Editor",
      description: "Multi-editor integration bridge for DocsJS",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
          { text: "API", link: "/api/", activeMatch: "/api/" },
          { text: "Examples", link: "/examples/", activeMatch: "/examples/" },
          { text: "v0.1.2", link: "https://www.npmjs.com/package/@coding01/docsjs-editor" },
          { text: "DocsJS ↗", link: "https://docsjs.coding01.cn" },
          { text: "Markdown ↗", link: "https://fanly.github.io/docsjs-markdown/" },
        ],
        sidebar: {
          "/guide/": [
            { text: "Guide", items: [
              { text: "Introduction", link: "/guide/" },
              { text: "Installation", link: "/guide/installation" },
              { text: "Quick Start", link: "/guide/quick-start" },
            ]},
          ],
          "/api/": [
            { text: "API Reference", items: [
              { text: "Overview", link: "/api/" },
              { text: "EditorSwitchboard", link: "/api/switchboard" },
              { text: "Adapters", link: "/api/adapters" },
            ]},
          ],
          "/examples/": [
            { text: "Examples", items: [
              { text: "Runtime Switch", link: "/examples/" },
              { text: "React Integration", link: "/examples/react" },
              { text: "Vue Integration", link: "/examples/vue" },
            ]},
          ],
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/fanly/docsjs-editor" },
        ],
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2024-present DocsJS Team",
        },
        outline: {
          level: [2, 3],
        },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      title: "DocsJS Editor",
      description: "DocsJS 多编辑器集成桥接",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/", activeMatch: "/zh/guide/" },
          { text: "API", link: "/zh/api/", activeMatch: "/zh/api/" },
          { text: "示例", link: "/zh/examples/", activeMatch: "/zh/examples/" },
          { text: "v0.1.2", link: "https://www.npmjs.com/package/@coding01/docsjs-editor" },
          { text: "DocsJS ↗", link: "https://docsjs.coding01.cn" },
          { text: "Markdown ↗", link: "https://fanly.github.io/docsjs-markdown/" },
        ],
        sidebar: {
          "/zh/guide/": [
            { text: "指南", items: [
              { text: "简介", link: "/zh/guide/" },
              { text: "安装", link: "/zh/guide/installation" },
              { text: "快速开始", link: "/zh/guide/quick-start" },
            ]},
          ],
          "/zh/api/": [
            { text: "API 参考", items: [
              { text: "概述", link: "/zh/api/" },
              { text: "EditorSwitchboard", link: "/zh/api/switchboard" },
              { text: "适配器", link: "/zh/api/adapters" },
            ]},
          ],
          "/zh/examples/": [
            { text: "示例", items: [
              { text: "运行时切换", link: "/zh/examples/" },
              { text: "React 集成", link: "/zh/examples/react" },
              { text: "Vue 集成", link: "/zh/examples/vue" },
            ]},
          ],
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/fanly/docsjs-editor" },
        ],
        footer: {
          message: "基于 MIT 许可发布。",
          copyright: "版权所有 © 2024-至今 DocsJS 团队",
        },
      },
    },
  },
  themeConfig: {
    siteTitle: "DocsJS Editor",
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
  },
});
