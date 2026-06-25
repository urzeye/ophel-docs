export type Lang = 'en' | 'zh';

/** Chrome Web Store 插件详情页 */
export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/ai-chat-organizer-outline/lpcohdfbomkgepfladogodgeoppclakd';

/** Microsoft Edge 外接程序详情页 */
export const EDGE_STORE_URL =
  'https://microsoftedge.microsoft.com/addons/detail/ophel-atlas-ai-chat-navi/ffpenkdeifijngifjmbbpijfpdhlolga';

const en = {
  nav: {
    features: 'Features',
    platforms: 'Platforms',
    reviews: 'Reviews',
    reviewsHref: '/#reviews',
    changelog: 'Changelog',
    changelogHref: '/changelog/',
    docs: 'Docs',
    docsHref: '/docs',
    githubHref: 'https://github.com/urzeye/ophel',
    githubAriaLabel: 'View Ophel on GitHub',
    install: 'Install',
    installHref: '/download/',
    ariaLabel: 'Main navigation',
    homeLabel: 'Ophel Home',
    langSwitch: '中文',
    langSwitchHref: '/zh/',
    langSwitchAriaLabel: 'Switch to Chinese',
  },
  hero: {
    badge: 'Browser Extension · Free',
    titleLine1: 'Make AI Conversations',
    titleGradient: 'Readable, Navigable, Lasting',
    desc: 'Ophel enhances ChatGPT, Gemini, Claude and 15 platforms with real-time outlines, conversation folders, and a prompt library. End infinite scrolling — turn every chat into organized knowledge.',
    ctaPrimary: 'Install Chrome Extension',
    ctaSecondary: 'View Docs',
    note: 'Supports Chrome · Edge · Firefox · Tampermonkey',
  },
  features: {
    title: 'Core Features',
    desc: 'Designed for power AI users — so every conversation leaves lasting value',
    items: [
      {
        icon: '📋',
        title: 'Real-time Outline',
        desc: 'Auto-extracts heading structure from AI replies and generates a clickable navigation outline. Jump anywhere, no matter how long the conversation.',
      },
      {
        icon: '📁',
        title: 'Conversation Folders',
        desc: 'Organize scattered chats into custom folders with tags, search, and bulk operations — so your knowledge is always findable.',
      },
      {
        icon: '💬',
        title: 'Prompt Library',
        desc: 'Save your favorite prompts and insert them in one click. Supports categories, search, and team sharing.',
      },
      {
        icon: '🔍',
        title: 'Global Search',
        desc: 'Syntax-powered search across sites, folders, and history. Supports folder:, tag:, site: filters.',
      },
      {
        icon: '🎨',
        title: 'Deep UI Customization',
        desc: '24 preset themes (12 light + 12 dark), Zen Mode, layout width control — craft your own AI workspace.',
      },
      {
        icon: '☁️',
        title: 'WebDAV Cloud Sync',
        desc: 'Back up and sync your conversation data via WebDAV protocol, keeping everything consistent across devices.',
      },
    ],
  },
  platforms: {
    title: '15 Platforms Supported',
    desc: 'Install once. Works with all your favorite AI assistants.',
  },
  reviews: {
    title: 'Loved by Users',
    subtitle: 'Real feedback from power users across the globe',
  },
  footer: {
    tagline: 'Readable, navigable, lasting AI conversations.',
    desc: 'Readable, navigable, lasting AI conversations.',
    product: 'Product',
    resources: 'Resources',
    support: 'Support',
    legal: 'Legal',
    other: 'Other',
    rights: 'All rights reserved',
    links: {
      features: 'Features',
      changelog: 'Changelog',
      changelogHref: '/changelog/',
      download: 'Download',
      downloadHref: '/download/',
      docs: 'Docs',
      docsHref: 'https://ophel.app/docs',
      installation: 'Installation',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      privacyHref: '/privacy/',
      github: 'GitHub',
      githubHref: 'https://github.com/urzeye/ophel',
      issue: 'Report Issue',
      issueHref: 'https://github.com/urzeye/ophel/issues',
    },
    ariaLabel: 'Footer navigation',
  },
  meta: {
    title: 'Ophel — AI Chat Organizer & Outline Navigator',
    description:
      'Ophel transforms AI chats into readable, navigable knowledge. Real-time outlines, conversation folders & prompt library for ChatGPT, Gemini, Claude and more.',
  },
  privacy: {
    title: 'Privacy Policy — Ophel',
    metaDesc: "Ophel's privacy policy: how we handle your data.",
    h1: 'Privacy Policy',
    updatedLabel: 'Last updated:',
    sections: {
      collection: {
        title: 'Data Collection',
        p1: 'Ophel is a purely local browser extension. ',
        p1Strong:
          'We do not collect, upload, or transmit any of your conversation content or personal data.',
        p2: "All data (conversation titles, folder structures, prompt library, settings, etc.) is stored in your browser's local ",
        p2Suffix: ' and is never sent to any server.',
      },
      permissions: {
        title: 'Permissions',
        activeTab: 'Used to inject UI enhancements into supported AI sites.',
        storage: 'Used to save your settings, conversation info, and prompt library locally.',
        notifications:
          '(Optional): Used to send desktop notifications when background tasks complete.',
        noNetwork:
          'Ophel does not request any network permission unless you explicitly enable WebDAV sync.',
      },
      webdav: {
        title: 'WebDAV Sync (Optional)',
        p: 'If you enable WebDAV sync, Ophel will only connect to the WebDAV server address you configure. No data passes through any Ophel relay server — your data goes directly to the storage you control.',
      },
      thirdParty: {
        title: 'Third-party Services',
        p: 'Ophel does not integrate any third-party analytics, advertising, or tracking services.',
      },
      contact: {
        title: 'Contact',
        pre: 'For questions, please contact us via ',
        linkLabel: 'GitHub Issues',
        post: '.',
      },
    },
  },
} as const;

const zh = {
  nav: {
    features: '功能',
    platforms: '平台支持',
    reviews: '评价',
    reviewsHref: '/zh/#reviews',
    changelog: '更新日志',
    changelogHref: '/zh/changelog/',
    docs: '文档',
    docsHref: 'https://ophel.app/docs/zh/introduction',
    githubHref: 'https://github.com/urzeye/ophel',
    githubAriaLabel: '在 GitHub 上查看 Ophel',
    install: '安装',
    installHref: '/zh/download/',
    ariaLabel: '主导航',
    homeLabel: 'Ophel 首页',
    langSwitch: 'English',
    langSwitchHref: '/',
    langSwitchAriaLabel: 'Switch to English',
  },
  hero: {
    badge: '浏览器扩展 · 免费使用',
    titleLine1: '让 AI 对话',
    titleGradient: '可阅读、可导航、可沉淀',
    desc: 'Ophel 为 ChatGPT、Gemini、Claude 等 15 个平台注入实时大纲、会话文件夹与 Prompt 词库。告别无限滚动，让每次对话成为可组织的知识。',
    ctaPrimary: '安装 Chrome 扩展',
    ctaSecondary: '查看文档',
    note: '支持 Chrome · Edge · Firefox · 油猴脚本',
  },
  features: {
    title: '核心功能',
    desc: '为高频使用 AI 的用户设计，让每一次对话都留下价值',
    items: [
      {
        icon: '📋',
        title: '实时对话大纲',
        desc: '自动提取 AI 回复中的标题结构，生成可点击的导航大纲，即使对话再长也能快速跳转。',
      },
      {
        icon: '📁',
        title: '会话文件夹管理',
        desc: '把散落的对话整理进自定义文件夹，支持标签、搜索、批量操作，让知识有迹可循。',
      },
      {
        icon: '💬',
        title: 'Prompt 词库',
        desc: '收藏常用提示词，一键插入到对话框。支持分类、搜索，团队共享也不在话下。',
      },
      {
        icon: '🔍',
        title: '全局搜索',
        desc: '语法化搜索跨站点、跨文件夹的历史对话。支持 folder:、tag:、site: 等过滤器。',
      },
      {
        icon: '🎨',
        title: '深度 UI 定制',
        desc: '24 套预设主题（12 亮色 + 12 暗色）、禅模式、布局宽度调节，打造属于你的专属界面。',
      },
      {
        icon: '☁️',
        title: 'WebDAV 云同步',
        desc: '通过 WebDAV 协议备份和同步你的会话数据，在多设备之间保持一致。',
      },
    ],
  },
  platforms: {
    title: '支持 15 个平台',
    desc: '一次安装，覆盖你常用的所有 AI 助手',
  },
  reviews: {
    title: '用户真实评价',
    subtitle: '来自 Chrome 应用商店的真实好评',
  },
  footer: {
    tagline: '让 AI 对话可读、可导航、可沉淀',
    desc: '让 AI 对话可读、可导航、可沉淀',
    product: '产品',
    resources: '资源',
    support: '支持',
    legal: '法律',
    other: '其他',
    rights: '保留所有权利',
    links: {
      features: '功能介绍',
      changelog: '更新日志',
      changelogHref: '/zh/changelog/',
      download: '下载安装',
      downloadHref: '/zh/download/',
      docs: '文档',
      docsHref: 'https://ophel.app/docs/zh/introduction',
      installation: '安装指南',
      faq: '常见问题',
      privacy: '隐私政策',
      privacyHref: '/zh/privacy/',
      github: 'GitHub',
      githubHref: 'https://github.com/urzeye/ophel',
      issue: '问题反馈',
      issueHref: 'https://github.com/urzeye/ophel/issues',
    },
    ariaLabel: '页脚导航',
  },
  meta: {
    title: 'Ophel — AI 对话大纲 · 会话管理 · Prompt 词库',
    description:
      'Ophel 为 ChatGPT、Gemini、Claude 等 15 个 AI 平台注入实时大纲、会话文件夹与 Prompt 词库，让对话可读、可导航、可沉淀。',
  },
  privacy: {
    title: '隐私政策 — Ophel',
    metaDesc: 'Ophel 的隐私政策：我们如何处理您的数据。',
    h1: '隐私政策',
    updatedLabel: '最后更新：',
    sections: {
      collection: {
        title: '数据收集',
        p1: 'Ophel 是一款纯本地运行的浏览器扩展。',
        p1Strong: '我们不收集、不上传任何您的对话内容或个人数据。',
        p2: '所有数据（会话标题、文件夹结构、Prompt 词库、设置等）均存储在您本地浏览器的 ',
        p2Suffix: ' 中，不会上传至任何服务器。',
      },
      permissions: {
        title: '权限说明',
        activeTab: '用于向支持的 AI 站点注入界面增强功能。',
        storage: '用于在本地保存您的设置、会话信息和 Prompt 词库。',
        notifications: '（可选）：用于在后台任务完成时发送桌面通知。',
        noNetwork: 'Ophel 不申请任何网络请求权限（除非您主动启用 WebDAV 同步功能）。',
      },
      webdav: {
        title: 'WebDAV 同步（可选功能）',
        p: '如果您选择启用 WebDAV 同步，Ophel 将仅连接您自己配置的 WebDAV 服务器地址，不经过任何 Ophel 的中转服务器。您的数据直接传输到您自己控制的存储服务。',
      },
      thirdParty: {
        title: '第三方服务',
        p: 'Ophel 本身不集成任何第三方统计、广告或追踪服务。',
      },
      contact: {
        title: '联系方式',
        pre: '如有疑问，请通过 ',
        linkLabel: 'GitHub Issues',
        post: ' 联系我们。',
      },
    },
  },
} as const;

export const translations = { en, zh };
export type T = typeof en;
