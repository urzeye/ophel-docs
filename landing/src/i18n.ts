export type Lang = 'en' | 'zh';

/** Chrome Web Store 插件详情页 */
export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/ai-chat-organizer-outline/lpcohdfbomkgepfladogodgeoppclakd';

/** Microsoft Edge 外接程序详情页 */
export const EDGE_STORE_URL =
  'https://microsoftedge.microsoft.com/addons/detail/ophel-atlas-ai-chat-navi/ffpenkdeifijngifjmbbpijfpdhlolga';

/** Firefox Add-ons 详情页 */
export const FIREFOX_STORE_URL = 'https://addons.mozilla.org/firefox/addon/ophel-ai-chat-enhancer/';

/** GitHub Releases（Safari 扩展与离线安装包入口） */
export const GITHUB_RELEASES_URL = 'https://github.com/urzeye/ophel/releases';

/** Greasy Fork 油猴脚本详情页 */
export const GREASYFORK_URL = 'https://greasyfork.org/scripts/563646-ophel-ai-chat-page-enhancer';

/** ScriptCat 脚本详情页 */
export const SCRIPTCAT_URL = 'https://scriptcat.org/script-show-page/6519';

const en = {
  nav: {
    features: 'Workbench',
    platforms: '32 Sites',
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
    badge: 'Browser Extension & Userscript · Open Source GPLv3',
    titleLine1: 'Turn AI Chats into',
    titleGradient: 'Readable, Navigable, Lasting Documents',
    desc: 'Ophel equips ChatGPT, Gemini, Claude, Gemini Notebook, and 32+ AI workspaces with a real-time outline tree, project folders, and a structured prompt library. Stop losing breakthroughs in infinite scroll.',
    ctaPrimary: 'Install on Chrome',
    ctaSecondary: 'Explore Docs',
    note: 'Supports Chrome · Edge · Firefox · Safari · Tampermonkey',
  },
  features: {
    title: 'An Ordered Console Beside Every AI Thread',
    desc: 'Watch how Ophel turns a sprawling multi-turn architecture discussion into a structured, searchable workbench — or scrub through each workflow stage below.',
    items: [
      {
        code: 'TOC · H1–H6',
        title: 'Real-Time Smart Outline',
        desc: 'Parses user prompts and AI headings on the fly into a collapsible tree with level filters, inline search, bookmarks, word counts, and one-click section copy.',
      },
      {
        code: 'FOLDER + TAG',
        title: 'Two-Dimensional Chat Manager',
        desc: 'Organize threads across platforms with nested folders, multi-tag filters, drag-and-drop ordering, and batch actions without leaving your active tab.',
      },
      {
        code: '{{VAR}} · QUEUE',
        title: 'Variable Prompt Library & Chains',
        desc: 'Store reusable prompt templates with fill-in variables, selection quoting, and sequential prompt queues that send multi-step workflows automatically.',
      },
      {
        code: 'CTRL/⌘ + K',
        title: 'Syntax-Powered Global Search',
        desc: 'Jump across outlines, saved chats, prompts, and settings in milliseconds using folder:, tag:, type:, and date: query operators.',
      },
      {
        code: 'MD · JSON · ZIP',
        title: 'Segmented & Attachment Export',
        desc: 'Export complete threads or cherry-picked turns to clean Markdown, JSON, or TXT — bundling generated images and Gemini Notebook columns into ZIP archives.',
      },
      {
        code: '24 THEMES · LOCAL',
        title: '24 Themes, Zen Mode & WebDAV Sync',
        desc: '12 light + 12 dark themes, widescreen & Zen layout controls, plus zero-telemetry local storage with optional self-hosted WebDAV synchronization.',
      },
    ],
  },
  platforms: {
    title: '16 Built-in Sites + 16 Hot-Swap Site Packs',
    desc: 'Works out of the box on 16 flagship AI platforms (now including Gemini Notebook), plus 16 declarative Site Packs you can enable in one click — with more shipping continuously.',
  },
  reviews: {
    title: 'Trusted in Daily AI Workflows',
    subtitle: 'Unedited reviews from researchers, engineers, and writers on the Chrome Web Store',
  },
  footer: {
    tagline: 'Turn AI chats into documents you can read, navigate, and reuse.',
    desc: 'Open-source browser extension and userscript bringing real-time outlines, chat folders, and prompt workflows to 32+ AI platforms.',
    product: 'Product',
    resources: 'Resources',
    support: 'Community & Support',
    legal: 'Legal',
    other: 'Other',
    rights: 'Released under GPLv3 License',
    links: {
      features: 'Workbench',
      changelog: 'Changelog',
      changelogHref: '/changelog/',
      download: 'Download & Install',
      downloadHref: '/download/',
      docs: 'Documentation',
      docsHref: 'https://ophel.app/docs',
      sitePacks: 'Site Packs Registry',
      sitePacksHref: 'https://ophel.app/docs/enhancements/site-extensions',
      safariRelease: 'Safari Package (GitHub)',
      safariReleaseHref: 'https://github.com/urzeye/ophel/releases',
      installation: 'Installation',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      privacyHref: '/privacy/',
      github: 'GitHub Repository',
      githubHref: 'https://github.com/urzeye/ophel',
      issue: 'Report an Issue',
      issueHref: 'https://github.com/urzeye/ophel/issues',
    },
    ariaLabel: 'Footer navigation',
  },
  meta: {
    title: 'Ophel Atlas — AI Chat Outline, Folder Organizer & Prompt Workbench',
    description:
      'Turn AI chats into readable, navigable knowledge. Supports 16 built-in platforms (ChatGPT, Gemini, Claude, Gemini Notebook, DeepSeek) + 16 hot-swappable Site Packs across Chrome, Edge, Firefox, Safari & Tampermonkey.',
  },
  privacy: {
    title: 'Privacy Policy — Ophel Atlas',
    metaDesc: "Ophel's local-first privacy policy: how your data stays on your device.",
    h1: 'Privacy Policy',
    updatedLabel: 'Last updated: ',
    sections: {
      collection: {
        title: 'Data Collection',
        p1: 'Ophel is a local-first browser extension and userscript. ',
        p1Strong: 'We do not collect, transmit, or sell your chat content or personal data.',
        p2: "All data (chat metadata, folder structures, prompt library, and preferences) is stored locally in your browser's ",
        p2Suffix:
          ' by default. If you enable WebDAV sync, encrypted or raw backup data is transmitted solely to the WebDAV endpoint you configure.',
      },
      permissions: {
        title: 'Browser Permissions',
        activeTab:
          'Used to mount the Ophel side panel and reading enhancements on supported AI sites.',
        storage: 'Used to persist your preferences, folders, and prompt library on your device.',
        notifications:
          '(Optional): Used to send desktop alerts when long AI responses finish generating.',
        noNetwork:
          'Ophel requests no background telemetry permissions. Network requests occur only when you trigger WebDAV sync or update Site Packs.',
      },
      webdav: {
        title: 'WebDAV Sync (Optional)',
        p: 'When enabled, Ophel connects directly from your browser to the WebDAV server URL you provide. No data ever passes through an Ophel relay server.',
      },
      thirdParty: {
        title: 'Third-Party Analytics',
        p: 'Ophel embeds zero third-party analytics, advertising SDKs, or behavioral trackers.',
      },
      contact: {
        title: 'Contact',
        pre: 'If you have questions about privacy or security, please open a thread on ',
        linkLabel: 'GitHub Issues',
        post: '.',
      },
    },
  },
} as const;

const zh = {
  nav: {
    features: '工作台演示',
    platforms: '32+ 站点生态',
    reviews: '用户评价',
    reviewsHref: '/zh/#reviews',
    changelog: '更新日志',
    changelogHref: '/zh/changelog/',
    docs: '文档',
    docsHref: 'https://ophel.app/docs/zh/introduction',
    githubHref: 'https://github.com/urzeye/ophel',
    githubAriaLabel: '在 GitHub 上查看 Ophel',
    install: '立即安装',
    installHref: '/zh/download/',
    ariaLabel: '主导航',
    homeLabel: 'Ophel 首页',
    langSwitch: 'English',
    langSwitchHref: '/',
    langSwitchAriaLabel: 'Switch to English',
  },
  hero: {
    badge: '浏览器扩展与油猴脚本 · GPLv3 开源免费',
    titleLine1: '把 AI 对话变成',
    titleGradient: '可阅读、可导航、可沉淀的文档',
    desc: 'Ophel 为 ChatGPT、Gemini、Claude、Gemini Notebook 等 16 个内置站点与 16 个热插拔适配包注入实时大纲、对话文件夹与 Prompt 词库。告别无尽滚动，让每次深度对话都成为有秩序的知识资产。',
    ctaPrimary: '安装 Chrome 扩展',
    ctaSecondary: '阅读文档',
    note: '全面支持 Chrome · Edge · Firefox · Safari · 油猴脚本',
  },
  features: {
    title: '伴随每一次 AI 对话的「有秩序的操作台」',
    desc: '直观查看 Ophel 如何把超长架构讨论转化为可检索、可跳转的结构化文档——你也可以点击左侧章节或进度条，随时检视每个核心环节。',
    items: [
      {
        code: 'TOC · H1–H6',
        title: '实时智能大纲',
        desc: '实时解析用户提问与 AI 回复的多级标题，提供层级折叠、关键词过滤、重点书签、字数统计与单节复制。',
      },
      {
        code: 'FOLDER + TAG',
        title: '文件夹 + 标签双维管理',
        desc: '将散落在各平台的对话归入多级文件夹与自定义标签，支持源站点自动同步、拖拽排序与批量操作。',
      },
      {
        code: '{{VAR}} · QUEUE',
        title: '变量模板与链式 Prompt 队列',
        desc: '收藏结构化提示词模板，支持 {{变量}} 填空、划词一键引用，以及多步 Prompt 队列自动顺序发送。',
      },
      {
        code: 'CTRL/⌘ + K',
        title: '语法级全局搜索',
        desc: '跨当前大纲、对话文件夹、Prompt 词库与设置项毫秒级检索，支持 folder:、tag:、type:、date: 过滤语法。',
      },
      {
        code: 'MD · JSON · ZIP',
        title: '分段导出与附件打包',
        desc: '将完整对话或勾选片段导出为纯净 Markdown、JSON、TXT，支持图片附件 ZIP 打包及 Gemini Notebook 分栏导出。',
      },
      {
        code: '24 THEMES · LOCAL',
        title: '24 套主题、禅模式与 WebDAV 同步',
        desc: '内置 12 浅 + 12 深预置主题、宽屏与禅模式；数据默认 100% 本地存储，支持自建 WebDAV 多端同步。',
      },
    ],
  },
  platforms: {
    title: '16 个内置站点 + 16 个热插拔适配包',
    desc: '开箱内置 16 个主流 AI 平台（新增 Gemini Notebook），并可通过「适配中心」一键启用 16 个热插拔站点适配包，未来还将持续扩充。',
  },
  reviews: {
    title: '高频 AI 用户的真实口碑',
    subtitle: '来自全球开发者、研究者与创作者在扩展商店的真实评价',
  },
  footer: {
    tagline: '让 AI 对话可读、可导航、可沉淀。',
    desc: '开源免费的浏览器扩展与油猴脚本，为 32+ 个 AI 平台提供统一的大纲导航、对话整理与提示词工作流。',
    product: '产品',
    resources: '生态与资源',
    support: '社区与支持',
    legal: '法律与隐私',
    other: '其他',
    rights: '基于 GPLv3 开源协议发布',
    links: {
      features: '工作台演示',
      changelog: '更新日志',
      changelogHref: '/zh/changelog/',
      download: '下载安装',
      downloadHref: '/zh/download/',
      docs: '官方文档',
      docsHref: 'https://ophel.app/docs/zh/introduction',
      sitePacks: '站点适配包中心',
      sitePacksHref: 'https://ophel.app/docs/zh/enhancements/site-extensions',
      safariRelease: 'Safari 扩展下载 (GitHub)',
      safariReleaseHref: 'https://github.com/urzeye/ophel/releases',
      installation: '安装指南',
      faq: '常见问题',
      privacy: '隐私政策',
      privacyHref: '/zh/privacy/',
      github: 'GitHub 仓库',
      githubHref: 'https://github.com/urzeye/ophel',
      issue: '问题反馈',
      issueHref: 'https://github.com/urzeye/ophel/issues',
    },
    ariaLabel: '页脚导航',
  },
  meta: {
    title: 'Ophel Atlas — AI 对话大纲 · 对话文件夹管理 · Prompt 词库',
    description:
      'Ophel 为 ChatGPT、Gemini、Claude、Gemini Notebook、DeepSeek 等 16 个内置平台及 16 个热插拔站点适配包注入实时大纲、对话文件夹与 Prompt 词库，支持 Chrome、Edge、Firefox、Safari 与油猴脚本。',
  },
  privacy: {
    title: '隐私政策 — Ophel Atlas',
    metaDesc: 'Ophel 的本地优先隐私承诺：您的数据始终留在本地设备。',
    h1: '隐私政策',
    updatedLabel: '最后更新：',
    sections: {
      collection: {
        title: '数据收集',
        p1: 'Ophel 是一款本地优先（Local-First）的浏览器扩展与油猴脚本。',
        p1Strong: '我们不收集、不上传、不出售您的任何对话内容或个人数据。',
        p2: '所有数据（对话标题、文件夹与标签结构、Prompt 词库、界面偏好等）默认均存储在您本地浏览器的 ',
        p2Suffix: ' 中。当您主动启用 WebDAV 同步时，备份数据仅会发送至您自行配置的服务器地址。',
      },
      permissions: {
        title: '权限说明',
        activeTab: '用于在受支持的 AI 站点页面中挂载 Ophel 侧边面板与阅读增强组件。',
        storage: '用于在本地设备持久化保存您的设置、对话目录和 Prompt 词库。',
        notifications: '（可选按需权限）：用于在后台长回复生成完成时向您发送桌面通知。',
        noNetwork:
          'Ophel 不包含任何后台遥测请求；网络通信仅在您主动触发 WebDAV 同步或拉取适配包更新时发生。',
      },
      webdav: {
        title: 'WebDAV 同步（可选功能）',
        p: '如果您启用 WebDAV 同步，Ophel 将直接从您的浏览器连接至您配置的 WebDAV 服务器，不经过任何 Ophel 中转服务器，数据完全由您掌控。',
      },
      thirdParty: {
        title: '第三方服务',
        p: 'Ophel 不集成任何第三方统计、广告 SDK 或用户行为追踪服务。',
      },
      contact: {
        title: '联系方式',
        pre: '如有任何隐私或安全疑问，欢迎通过 ',
        linkLabel: 'GitHub Issues',
        post: ' 与我们联系。',
      },
    },
  },
} as const;

export const translations = { en, zh };
export type T = typeof en;
