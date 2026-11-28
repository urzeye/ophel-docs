import {
  BUILTIN_PLATFORM_COUNT,
  SITE_PACK_COUNT,
  TOTAL_SUPPORTED_SITES,
} from './lib/supported-platforms';

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
    features: 'Live Demo',
    platforms: `${TOTAL_SUPPORTED_SITES} Sites`,
    reviews: 'Reviews',
    reviewsHref: '/#reviews',
    changelog: 'Changelog',
    changelogHref: '/changelog/',
    docs: 'Docs',
    docsHref: 'https://ophel.app/docs',
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
    titleLine1: 'Turn AI Chats into',
    titleGradient: 'Readable, Navigable, Lasting Documents',
    desc: `Stop endless scrolling through long AI threads. Ophel adds a live outline, project folders, reusable prompts, and clean exports to ${BUILTIN_PLATFORM_COUNT} built-in platforms and ${SITE_PACK_COUNT} Site Packs.`,
    ctaPrimary: 'Install on Chrome',
  },
  features: {
    title: 'See How Ophel Tames a Long AI Thread',
    desc: 'Watch a real 24-second recording of Ophel turning a sprawling multi-turn discussion into a collapsible outline with instant filtering, bookmarks, and radial theme switching.',
    items: [
      {
        code: 'PNG · MD · ZIP',
        title: 'Shareable Long Images & Clean Exports',
        desc: 'Export full threads or selected turns into clean PNG/JPG share cards with auto-matched themes and custom watermarks, or save Markdown, HTML, JSON, TXT, and ZIP bundles with images.',
      },
      {
        code: 'CTRL/⌘ + K',
        title: 'Cross-Platform Global Search',
        desc: 'Press Ctrl/⌘ + K (or double-tap Shift) to search across your live outline, synced chats from every AI site, prompts, and settings — narrow results by project folder or tag in seconds.',
      },
      {
        code: 'LOCK · ALERT',
        title: 'Focus Reading, Scroll Lock & Done Alerts',
        desc: 'Lock scroll position while AI streams long answers, get desktop notifications and tab status markers (⏳/✅) when generation finishes, resume where you left off, and copy Mermaid or LaTeX cleanly.',
      },
      {
        code: 'FOLDER · {{VAR}}',
        title: 'Folders, Multi-Account Isolation & Prompt Queues',
        desc: 'Organize chats with project folders and colored tags while keeping personal and team workspaces isolated. Reuse {{variable}} templates, quote selections, and send multi-step prompt chains automatically.',
      },
      {
        code: `${BUILTIN_PLATFORM_COUNT} + ${SITE_PACK_COUNT} SITES`,
        title: '34+ Sites & Fast Rule Updates',
        desc: `Works out of the box on ${BUILTIN_PLATFORM_COUNT} major AI sites plus ${SITE_PACK_COUNT} one-click Site Packs and self-hosted tools like Open WebUI. Signed rule updates adapt to site redesigns without waiting on store reviews.`,
      },
      {
        code: 'LOCAL · WEBDAV',
        title: 'Zero-Account Privacy & Scheduled WebDAV Backups',
        desc: 'Free and open-source under GPLv3 with zero background telemetry. Everything stays in your browser by default, permissions are requested on demand, and optional WebDAV keeps 7 automatic backups per device.',
      },
    ],
  },
  platforms: {
    title: `${BUILTIN_PLATFORM_COUNT} Built-in Sites + ${SITE_PACK_COUNT} Site Packs`,
    desc: `Works out of the box on ${BUILTIN_PLATFORM_COUNT} major AI platforms (including multi-domain hosts like Doubao/Dola and Kimi), plus ${SITE_PACK_COUNT} community Site Packs you can enable in one click — and custom self-hosted URLs.`,
  },
  reviews: {
    title: 'Trusted in Daily AI Workflows',
    subtitle: 'Real 5-star reviews from researchers, engineers, and everyday AI users',
  },
  finalCta: {
    title: 'Private by Default. Free Forever.',
    desc: 'Install Ophel in seconds — no sign-up, no subscription, and no remote servers reading your chats.',
    pillars: [
      {
        title: '100% local storage & zero telemetry',
        detail:
          'Your folders, bookmarks, and prompts stay on your device unless you configure your own WebDAV server.',
      },
      {
        title: 'Permissions requested only on demand',
        detail:
          'Notifications, cookies, and extra Site Pack domains are never requested until you explicitly enable them.',
      },
      {
        title: 'GPLv3 open-source & transparent',
        detail:
          'Inspect every line of code on GitHub, choose extension or userscript, and export all data anytime.',
      },
    ],
    primaryFallback: 'Install on Chrome',
    secondaryCta: 'All install channels',
    secondaryHref: '/download/',
    privacyCta: 'Read privacy & permissions policy',
    privacyHref: '/privacy/',
  },
  footer: {
    tagline: 'Turn AI chats into documents you can read, navigate, and reuse.',
    desc: `Open-source browser extension and userscript bringing real-time outlines, chat folders, and prompt workflows to ${TOTAL_SUPPORTED_SITES}+ AI platforms.`,
    product: 'Product',
    support: 'Community & Support',
    legal: 'Legal',
    rights: 'Released under GPLv3 License',
    links: {
      features: 'Live Demo',
      changelog: 'Changelog',
      changelogHref: '/changelog/',
      download: 'Download & Install',
      downloadHref: '/download/',
      docs: 'Documentation',
      docsHref: 'https://ophel.app/docs',
      sitePacks: 'Site Packs Registry',
      sitePacksHref: 'https://ophel.app/docs/enhancements/site-extensions',
      safariRelease: 'Safari (macOS Beta)',
      safariReleaseHref: '/download/#safari',
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
    description: `Turn AI chats into readable, navigable knowledge. Supports ${BUILTIN_PLATFORM_COUNT} built-in platforms (ChatGPT, Gemini, Claude, DeepSeek, Doubao/Dola) + ${SITE_PACK_COUNT} Site Packs across Chrome, Edge, Firefox, Safari & Userscript.`,
  },
  privacy: {
    title: 'Privacy Policy — Ophel Atlas',
    metaDesc: "Ophel's local-first privacy policy: how your data stays on your device.",
    h1: 'Privacy Policy',
    updatedLabel: 'Last updated: ',
    updatedDate: 'November 28, 2026',
    sections: {
      collection: {
        title: 'Data Collection',
        p1: 'Ophel is a local-first browser extension and userscript. ',
        p1Strong: 'We do not collect, transmit, or sell your chat content or personal data.',
        p2: "All data (chat metadata, folders, tags, prompt library, bookmarks, and preferences) is stored locally in your browser's ",
        p2Suffix:
          ' (or GM storage for userscripts) by default. If you enable WebDAV sync, backup data is transmitted solely to the WebDAV server you configure.',
      },
      permissions: {
        title: 'Browser Permissions',
        storage:
          'Persists your preferences, folders, tags, prompts, bookmarks, reading history, and installed Site Packs on your device (Safari also declares unlimitedStorage).',
        alarms: 'Schedules WebDAV automatic backups and 24-hour signed Site Pack index checks.',
        dnr: '(Chrome / Edge / Firefox): Sets Referer/Origin and CORS headers only for extension background requests to Google image hosts so Gemini watermark removal and attachment downloads work reliably.',
        hostPermissions:
          'Mounts Ophel on the 16 built-in AI platforms and downloads embedded images/attachments during ZIP export.',
        optional:
          'Requested only on demand: notifications (completion alerts), cookies (Claude Session Key import/switch), <all_urls> (WebDAV cross-host sync & Gemini watermark removal), and per-origin access for Site Packs you install.',
        noNetwork:
          'Ophel embeds zero background telemetry. Network requests occur only when you enable WebDAV sync, when Site Packs checks its read-only signed update index (can be disabled), or if you voluntarily submit the uninstall survey.',
      },
      webdav: {
        title: 'WebDAV Sync (Optional)',
        p: 'When enabled, Ophel connects directly from your browser to the WebDAV server URL you provide. No data ever passes through an Ophel relay server.',
      },
      thirdParty: {
        title: 'Third-Party Analytics',
        p: 'Ophel embeds zero third-party analytics, advertising SDKs, or behavioral trackers.',
      },
      uninstallSurvey: {
        title: 'Uninstall Survey (Optional)',
        p: 'If you remove the extension, your browser may open a short goodbye survey on ophel.app. Filling it in is entirely optional; if you choose to submit, your selected reason and comment are sent to our PostHog project. No account, email, or user identifier is collected.',
      },
      contact: {
        title: 'Contact',
        pre: 'If you have questions about privacy or security, please open a thread on ',
        linkLabel: 'GitHub Issues',
        post: '.',
      },
    },
  },
  uninstall: {
    metaTitle: 'Uninstall Feedback — Ophel Atlas',
    metaDesc: 'Tell us why you uninstalled Ophel so we know what to improve next.',
    kicker: 'Sorry to see you go',
    heading: 'What made you uninstall Ophel?',
    sub: 'It only takes a few seconds. Your choice decides what we improve next — thank you for your time.',
    reasonTitle: '1. Pick the main reason',
    reasons: {
      'missing-site': "Doesn't support the sites or services I use",
      'below-expectations': "Features didn't meet my expectations",
      'too-many-errors': 'Too many errors or freezes',
      'update-broke': 'Something broke after an update',
      'switched-tool': 'I switched to another tool',
      'no-longer-needed': 'I no longer need it',
      performance: 'It slowed down my browser',
      'privacy-concern': 'Worried about privacy or account security',
      other: 'Other reason',
    },
    detailTitle: '2. Anything else? (optional)',
    detailPlaceholder: 'e.g. which action failed, or which site you wish were supported',
    submit: 'Submit feedback',
    submitting: 'Submitting…',
    skip: 'Skip',
    thanksTitle: 'Thank you for the feedback',
    thanksBody:
      'We read every single response. If you ever feel like giving Ophel another try, we will be right here.',
    reinstall: 'Reinstall Ophel',
    error: 'Submission failed — please try again in a moment.',
    footerNote:
      'We know Ophel is not good enough yet — we just need to know where. Your choice points us in the right direction.',
  },
} as const;

const zh = {
  nav: {
    features: '实机演示',
    platforms: `${TOTAL_SUPPORTED_SITES} 个站点`,
    reviews: '用户评价',
    reviewsHref: '/zh/#reviews',
    changelog: '更新日志',
    changelogHref: '/zh/changelog/',
    docs: '文档',
    docsHref: 'https://ophel.app/docs/zh',
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
    titleLine1: '把 AI 对话变成',
    titleGradient: '可阅读、可导航、可沉淀的文档',
    desc: `告别在百屏长聊里反复翻找。Ophel 为 ${BUILTIN_PLATFORM_COUNT} 个主流 AI 平台与 ${SITE_PACK_COUNT} 个站点适配包提供实时目录大纲、项目文件夹、可复用提示词与高清导出。`,
    ctaPrimary: '安装 Chrome 扩展',
  },
  features: {
    title: '看 Ophel 如何把超长 AI 对话理出秩序',
    desc: '这段 24 秒真实录屏展示了 Ophel 如何在长对话旁即时生成多级目录、秒级过滤重点、用星标与锚点来回跳转，并一键切换深浅主题。',
    items: [
      {
        code: 'PNG · MD · ZIP',
        title: '分享长图与多格式精准导出',
        desc: '一键把完整对话或选定轮次导出为自动配色、可加自定义水印的高清分享长图（PNG/JPG），或导出纯净 Markdown、带图附件 ZIP、HTML、JSON 与 TXT。',
      },
      {
        code: 'CTRL/⌘ + K',
        title: '跨平台全局秒搜',
        desc: '随时按 Ctrl/⌘ + K（或双击 Shift）一次搜遍当前大纲、各平台已同步的历史对话、Prompt 词库与设置——按项目文件夹或标签快速定位曾经聊过的结论。',
      },
      {
        code: 'LOCK · ALERT',
        title: '滚动锁定、完成提醒与长文阅读增强',
        desc: 'AI 正在输出时开启「滚动锁定」不再强制拉回底部；后台生成完毕后自动桌面通知、提示音并在标签页标出 ⏳/✅ 状态，支持断点续读与 Mermaid / 公式双击复制。',
      },
      {
        code: 'FOLDER · {{VAR}}',
        title: '多账号隔离归档与变量 Prompt 队列',
        desc: '用项目文件夹与彩色标签整理历史对话，自动隔离个人与团队多工作区；内置带 {{变量}} 填空的提示词模板、划词一键引用与多步队列自动顺序发送。',
      },
      {
        code: `${BUILTIN_PLATFORM_COUNT} + ${SITE_PACK_COUNT} 站点`,
        title: '34+ 站点覆盖与官网改版云端热修',
        desc: `开箱即用 ${BUILTIN_PLATFORM_COUNT} 个主流 AI 平台与 ${SITE_PACK_COUNT} 个一键适配包，并支持 Open WebUI、LibreChat 等自部署站点；遇到 AI 官网改版时通过只读签名规则快速热更新，无需苦等商店审核。`,
      },
      {
        code: 'LOCAL · WEBDAV',
        title: '零账号本地优先与 WebDAV 定时备份',
        desc: 'GPLv3 开源免费、无需登录、零后台遥测，所有数据默认 100% 保存在本地浏览器；敏感权限按需申请，可直连你自己的 WebDAV 自动定时备份（每台设备保留最近 7 份）。',
      },
    ],
  },
  platforms: {
    title: `${BUILTIN_PLATFORM_COUNT} 个内置站点 + ${SITE_PACK_COUNT} 个站点适配包`,
    desc: `开箱支持 ${BUILTIN_PLATFORM_COUNT} 个主流 AI 平台（含豆包/Dola、Kimi 多域名），并可在「适配中心」一键启用 ${SITE_PACK_COUNT} 个社区适配包与自定义自部署地址。`,
  },
  reviews: {
    title: '高频 AI 用户的真实口碑',
    subtitle: '精选自 Chrome 网上应用店的真实五星评价，保留完整原文',
  },
  finalCta: {
    title: '默认本地隐私，永久开源免费',
    desc: '几秒即可安装上手——无需注册账号、没有订阅付费墙，也没有任何服务器会读取你的对话内容。',
    pillars: [
      {
        title: '100% 本地存储，零后台遥测',
        detail:
          '文件夹、书签与提示词默认全部留在你的浏览器里，仅在主动配置 WebDAV 时直连你的自有服务器。',
      },
      {
        title: '权限按需申请，随时可撤回',
        detail: '完成通知、Cookie 导入及额外站点适配包权限，仅在你开启对应功能时才会弹窗请求授权。',
      },
      {
        title: 'GPLv3 完整开源，支持扩展与油猴',
        detail: '全部源码公开透明可审计，自由选择官方浏览器扩展或油猴脚本，数据随时一键备份迁移。',
      },
    ],
    primaryFallback: '安装 Chrome 扩展',
    secondaryCta: '查看全部安装渠道',
    secondaryHref: '/zh/download/',
    privacyCta: '查看完整隐私与权限说明',
    privacyHref: '/zh/privacy/',
  },
  footer: {
    tagline: '让 AI 对话可读、可导航、可沉淀。',
    desc: `开源免费的浏览器扩展与油猴脚本，为 ${TOTAL_SUPPORTED_SITES}+ 个 AI 平台提供统一的大纲导航、对话整理与提示词工作流。`,
    product: '产品',
    support: '社区与支持',
    legal: '法律与隐私',
    rights: '基于 GPLv3 开源协议发布',
    links: {
      features: '实机演示',
      changelog: '更新日志',
      changelogHref: '/zh/changelog/',
      download: '下载安装',
      downloadHref: '/zh/download/',
      docs: '官方文档',
      docsHref: 'https://ophel.app/docs/zh',
      sitePacks: '站点适配包中心',
      sitePacksHref: 'https://ophel.app/docs/zh/enhancements/site-extensions',
      safariRelease: 'Safari 实验版说明',
      safariReleaseHref: '/zh/download/#safari',
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
    description: `Ophel 为 ChatGPT、Gemini、Claude、DeepSeek、豆包/Dola 等 ${BUILTIN_PLATFORM_COUNT} 个内置平台及 ${SITE_PACK_COUNT} 个站点适配包提供实时大纲、对话文件夹与 Prompt 词库，支持 Chrome、Edge、Firefox、Safari 与油猴脚本。`,
  },
  privacy: {
    title: '隐私政策 — Ophel Atlas',
    metaDesc: 'Ophel 的本地优先隐私承诺：您的数据始终留在本地设备。',
    h1: '隐私政策',
    updatedLabel: '最后更新：',
    updatedDate: '2026 年 11 月 28 日',
    sections: {
      collection: {
        title: '数据收集',
        p1: 'Ophel 是一款本地优先（Local-First）的浏览器扩展与油猴脚本。',
        p1Strong: '我们不收集、不上传、不出售您的任何对话内容或个人数据。',
        p2: '所有数据（对话标题、文件夹与标签、Prompt 词库、书签、界面偏好等）默认均存储在您本地浏览器的 ',
        p2Suffix:
          '（油猴版为脚本管理器本地存储）中。当您主动启用 WebDAV 同步时，备份数据仅会发送至您自行配置的服务器地址。',
      },
      permissions: {
        title: '权限说明',
        storage:
          '在本地持久化保存您的设置、文件夹、标签、Prompt 词库、书签、阅读记录与已安装适配包（Safari 另含 unlimitedStorage）。',
        alarms: '用于后台定时调度 WebDAV 自动备份与适配中心 24 小时签名索引检查。',
        dnr: '（Chrome / Edge / Firefox）：仅对扩展后台发往 Google 图片域名的请求补充 Referer/Origin 与 CORS 响应头，用于 Gemini 去水印与附件下载。',
        hostPermissions:
          '用于在 16 个内置 AI 站点挂载 Ophel 面板，并在导出 ZIP 附件时读取官方 CDN 图片与文件。',
        optional:
          '仅在启用对应功能时按需申请：notifications（完成提醒通知）、cookies（Claude Session Key 导入与切换）、<all_urls>（WebDAV 跨主机同步与 Gemini 去水印），以及站点适配包的单域名访问权限。',
        noNetwork:
          'Ophel 不包含任何后台遥测请求；网络通信仅发生在您启用 WebDAV 同步、适配中心检查只读签名更新索引（可关闭），或您自愿提交卸载问卷时。',
      },
      webdav: {
        title: 'WebDAV 同步（可选功能）',
        p: '如果您启用 WebDAV 同步，Ophel 将直接从您的浏览器连接至您配置的 WebDAV 服务器，不经过任何 Ophel 中转服务器，数据完全由您掌控。',
      },
      thirdParty: {
        title: '第三方服务',
        p: 'Ophel 不集成任何第三方统计、广告 SDK 或用户行为追踪服务。',
      },
      uninstallSurvey: {
        title: '卸载问卷（可选）',
        p: '移除扩展后，浏览器可能会自动打开 ophel.app 上的一个简短问卷页。填写完全自愿；如果你主动提交，所选原因与补充说明会发送至我们的 PostHog 项目，不收集任何账号、邮箱或用户标识。',
      },
      contact: {
        title: '联系方式',
        pre: '如有任何隐私或安全疑问，欢迎通过 ',
        linkLabel: 'GitHub Issues',
        post: ' 与我们联系。',
      },
    },
  },
  uninstall: {
    metaTitle: '卸载反馈 — Ophel Atlas',
    metaDesc: '告诉我们你卸载 Ophel 的原因，帮助我们确定之后的改进方向。',
    kicker: '很遗憾看到你离开',
    heading: '是什么让你卸载了 Ophel？',
    sub: '只需要几秒钟，你的选择将决定我们之后改进的方向，感谢你的时间。',
    reasonTitle: '1. 选一个主要原因',
    reasons: {
      'missing-site': '不支持我在用的站点或服务',
      'below-expectations': '功能没达到预期',
      'too-many-errors': '出错或卡住的情况太多',
      'update-broke': '更新后出现问题',
      'switched-tool': '改用其他工具了',
      'no-longer-needed': '不再需要了',
      performance: '影响浏览器性能',
      'privacy-concern': '担心隐私或账号安全',
      other: '其他原因',
    },
    detailTitle: '2. 补充说明（选填）',
    detailPlaceholder: '例如：哪个操作出错、希望支持哪个站点',
    submit: '提交反馈',
    submitting: '提交中…',
    skip: '跳过',
    thanksTitle: '感谢你的反馈',
    thanksBody: '每一条反馈我们都会认真阅读。如果哪天想再给 Ophel 一次机会，我们一直都在。',
    reinstall: '重新安装 Ophel',
    error: '提交失败，请稍后重试。',
    footerNote: '我们知道它还不够好，只是不清楚问题出在哪。你的选择能帮我们找到方向。',
  },
} as const;

export const translations = { en, zh };
export type T = typeof en;

// ── 卸载问卷（独立页面，与扩展一致的 11 种语言） ─────────────────
// 与扩展 src/locales 的语言集保持对齐；新增语言时两边同步。
export type UninstallSurveyLang =
  | 'zh-CN'
  | 'zh-TW'
  | 'en'
  | 'ja'
  | 'ko'
  | 'it'
  | 'de'
  | 'es'
  | 'fr'
  | 'pt'
  | 'ru';

// en/zh 站点文案是 as const 字面量类型，多语言问卷需要放宽为普通字符串
type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : DeepString<T[K]> };

export type UninstallSurveyStrings = DeepString<T['uninstall']>;

export const uninstallSurveyI18n: Record<UninstallSurveyLang, UninstallSurveyStrings> = {
  en: en.uninstall,
  'zh-CN': zh.uninstall,
  'zh-TW': {
    metaTitle: '移除意見回饋 — Ophel Atlas',
    metaDesc: '告訴我們你移除 Ophel 的原因，幫助我們決定之後的改進方向。',
    kicker: '很遺憾看到你離開',
    heading: '是什麼讓你移除了 Ophel？',
    sub: '只需要幾秒鐘，你的選擇將決定我們之後改進的方向，感謝你的時間。',
    reasonTitle: '1. 選一個主要原因',
    reasons: {
      'missing-site': '不支援我在用的網站或服務',
      'below-expectations': '功能沒達到預期',
      'too-many-errors': '出錯或卡住的情況太多',
      'update-broke': '更新後出現問題',
      'switched-tool': '改用其他工具了',
      'no-longer-needed': '不再需要了',
      performance: '影響瀏覽器效能',
      'privacy-concern': '擔心隱私或帳號安全',
      other: '其他原因',
    },
    detailTitle: '2. 補充說明（選填）',
    detailPlaceholder: '例如：哪個操作出錯、希望支援哪個網站',
    submit: '送出意見回饋',
    submitting: '送出中…',
    skip: '略過',
    thanksTitle: '感謝你的意見回饋',
    thanksBody: '每一則回饋我們都會認真閱讀。如果哪天想再給 Ophel 一次機會，我們一直都在。',
    reinstall: '重新安裝 Ophel',
    error: '送出失敗，請稍後再試。',
    footerNote: '我們知道它還不夠好，只是不清楚問題出在哪。你的選擇能幫我們找到方向。',
  },
  ja: {
    metaTitle: 'アンインストールのご意見 — Ophel Atlas',
    metaDesc: 'Ophel をアンインストールした理由を教えてください。今後の改善に活かします。',
    kicker: 'ご満足いただけず、残念です',
    heading: 'Ophel をアンインストールした理由を教えてください',
    sub: '数秒で完了します。あなたの選択が今後の改善の方向を決めます。お時間をいただきありがとうございます。',
    reasonTitle: '1. 主な理由を一つ選んでください',
    reasons: {
      'missing-site': '使っているサイトやサービスに対応していない',
      'below-expectations': '機能が期待に届かなかった',
      'too-many-errors': 'エラーやフリーズが多すぎる',
      'update-broke': 'アップデート後に問題が起きた',
      'switched-tool': '別のツールに乗り換えた',
      'no-longer-needed': '必要なくなった',
      performance: 'ブラウザの動作が重くなった',
      'privacy-concern': 'プライバシーやアカウントの安全性が心配',
      other: 'その他の理由',
    },
    detailTitle: '2. 補足があればご記入ください（任意）',
    detailPlaceholder: '例：どの操作で失敗したか、対応してほしいサイトなど',
    submit: 'フィードバックを送信',
    submitting: '送信中…',
    skip: 'スキップ',
    thanksTitle: 'フィードバックありがとうございます',
    thanksBody:
      'いただいた声にはすべて目を通しています。また Ophel を試してみたいと思ったら、いつでもお待ちしています。',
    reinstall: 'Ophel を再インストール',
    error: '送信に失敗しました。しばらくしてからもう一度お試しください。',
    footerNote:
      'Ophel がまだ十分でないことは分かっています。足りない場所を知るために、あなたの選択が道標になります。',
  },
  ko: {
    metaTitle: '제거 설문 — Ophel Atlas',
    metaDesc: 'Ophel을 삭제한 이유를 알려주시면 다음 개선 방향을 정하는 데 도움이 됩니다.',
    kicker: '떠나신다니 아쉽습니다',
    heading: 'Ophel을 삭제하신 이유가 무엇인가요?',
    sub: '몇 초면 충분합니다. 당신의 선택이 앞으로의 개선 방향을 결정합니다. 시간 내주셔서 감사합니다.',
    reasonTitle: '1. 가장 큰 이유를 선택해 주세요',
    reasons: {
      'missing-site': '제가 사용하는 사이트나 서비스를 지원하지 않아요',
      'below-expectations': '기능이 기대에 미치지 못했어요',
      'too-many-errors': '오류나 멈춤이 너무 많아요',
      'update-broke': '업데이트 후 문제가 생겼어요',
      'switched-tool': '다른 도구로 바꿨어요',
      'no-longer-needed': '더 이상 필요하지 않아요',
      performance: '브라우저 성능이 느려졌어요',
      'privacy-concern': '개인정보나 계정 보안이 걱정돼요',
      other: '기타 이유',
    },
    detailTitle: '2. 추가로 남길 말 (선택 사항)',
    detailPlaceholder: '예: 어떤 작업이 실패했는지, 어떤 사이트를 지원했으면 하는지',
    submit: '의견 보내기',
    submitting: '보내는 중…',
    skip: '건너뛰기',
    thanksTitle: '의견 감사합니다',
    thanksBody:
      '보내주신 의견은 모두 꼼꼼히 읽고 있습니다. 언젠가 Ophel을 다시 써보고 싶으시면 그때도 여기 있겠습니다.',
    reinstall: 'Ophel 다시 설치',
    error: '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
    footerNote:
      '아직 부족하다는 건 알지만 어디가 문제인지 모릅니다. 당신의 선택이 방향을 찾아줍니다.',
  },
  it: {
    metaTitle: 'Feedback di disinstallazione — Ophel Atlas',
    metaDesc: 'Dicci perché hai disinstallato Ophel, così sapremo cosa migliorare.',
    kicker: 'Ci dispiace vederti andare via',
    heading: 'Cosa ti ha spinto a disinstallare Ophel?',
    sub: 'Bastano pochi secondi. La tua scelta decide cosa miglioreremo — grazie per il tuo tempo.',
    reasonTitle: '1. Scegli il motivo principale',
    reasons: {
      'missing-site': 'Non supporta i siti o i servizi che uso',
      'below-expectations': 'Le funzionalità non hanno soddisfatto le mie aspettative',
      'too-many-errors': 'Troppi errori o blocchi',
      'update-broke': 'Qualcosa si è rotto dopo un aggiornamento',
      'switched-tool': 'Sono passato a un altro strumento',
      'no-longer-needed': 'Non mi serve più',
      performance: 'Rallentava il browser',
      'privacy-concern': "Preoccupazioni su privacy o sicurezza dell'account",
      other: 'Altro motivo',
    },
    detailTitle: '2. Vuoi aggiungere altro? (facoltativo)',
    detailPlaceholder: 'Es. quale azione non riusciva, o quale sito vorresti vedere supportato',
    submit: 'Invia feedback',
    submitting: 'Invio in corso…',
    skip: 'Salta',
    thanksTitle: 'Grazie per il feedback',
    thanksBody:
      "Leggiamo ogni singola risposta. Se mai vorrai dare a Ophel un'altra possibilità, saremo qui.",
    reinstall: 'Reinstalla Ophel',
    error: 'Invio non riuscito — riprova tra poco.',
    footerNote:
      'Sappiamo che Ophel non è ancora abbastanza buono — dobbiamo solo capire dove. La tua scelta ci indica la direzione giusta.',
  },
  de: {
    metaTitle: 'Deinstallations-Feedback — Ophel Atlas',
    metaDesc:
      'Sag uns, warum du Ophel deinstalliert hast, damit wir wissen, was wir als Nächstes verbessern.',
    kicker: 'Schade, dass du gehst',
    heading: 'Was hat dich dazu bewogen, Ophel zu deinstallieren?',
    sub: 'Es dauert nur ein paar Sekunden. Deine Wahl entscheidet, was wir als Nächstes verbessern — danke für deine Zeit.',
    reasonTitle: '1. Wähle den Hauptgrund',
    reasons: {
      'missing-site': 'Unterstützt die Websites oder Dienste nicht, die ich nutze',
      'below-expectations': 'Die Funktionen haben meine Erwartungen nicht erfüllt',
      'too-many-errors': 'Zu viele Fehler oder Abstürze',
      'update-broke': 'Nach einem Update ist etwas kaputtgegangen',
      'switched-tool': 'Ich bin zu einem anderen Tool gewechselt',
      'no-longer-needed': 'Ich brauche es nicht mehr',
      performance: 'Es hat meinen Browser verlangsamt',
      'privacy-concern': 'Sorgen um Datenschutz oder Kontosicherheit',
      other: 'Anderer Grund',
    },
    detailTitle: '2. Möchtest du noch etwas ergänzen? (optional)',
    detailPlaceholder: 'Z. B. welche Aktion fehlgeschlagen ist oder welche Website du dir wünschst',
    submit: 'Feedback senden',
    submitting: 'Wird gesendet…',
    skip: 'Überspringen',
    thanksTitle: 'Danke für dein Feedback',
    thanksBody:
      'Wir lesen jede einzelne Antwort. Falls du Ophel irgendwann noch einmal eine Chance geben möchtest – wir sind hier.',
    reinstall: 'Ophel neu installieren',
    error: 'Senden fehlgeschlagen – bitte versuche es gleich noch einmal.',
    footerNote:
      'Wir wissen, dass Ophel noch nicht gut genug ist – wir müssen nur wissen, wo es hakt. Deine Wahl zeigt uns die Richtung.',
  },
  es: {
    metaTitle: 'Comentarios de desinstalación — Ophel Atlas',
    metaDesc: 'Cuéntanos por qué desinstalaste Ophel para saber qué mejorar.',
    kicker: 'Lamentamos verte partir',
    heading: '¿Qué te hizo desinstalar Ophel?',
    sub: 'Solo te tomará unos segundos. Tu elección decide qué mejoraremos a continuación — gracias por tu tiempo.',
    reasonTitle: '1. Elige el motivo principal',
    reasons: {
      'missing-site': 'No es compatible con los sitios o servicios que uso',
      'below-expectations': 'Las funciones no cumplieron mis expectativas',
      'too-many-errors': 'Demasiados errores o bloqueos',
      'update-broke': 'Algo dejó de funcionar tras una actualización',
      'switched-tool': 'Cambié a otra herramienta',
      'no-longer-needed': 'Ya no lo necesito',
      performance: 'Ralentizaba mi navegador',
      'privacy-concern': 'Preocupación por la privacidad o la seguridad de mi cuenta',
      other: 'Otra razón',
    },
    detailTitle: '2. ¿Algo más que añadir? (opcional)',
    detailPlaceholder: 'P. ej.: qué acción falló o qué sitio te gustaría que fuera compatible',
    submit: 'Enviar comentarios',
    submitting: 'Enviando…',
    skip: 'Omitir',
    thanksTitle: 'Gracias por tus comentarios',
    thanksBody:
      'Leemos todas y cada una de las respuestas. Si alguna vez quieres darle otra oportunidad a Ophel, aquí estaremos.',
    reinstall: 'Reinstalar Ophel',
    error: 'No se pudo enviar — inténtalo de nuevo en un momento.',
    footerNote:
      'Sabemos que Ophel aún no es lo suficientemente bueno; solo necesitamos saber dónde falla. Tu elección nos señala el camino.',
  },
  fr: {
    metaTitle: 'Avis de désinstallation — Ophel Atlas',
    metaDesc: 'Dites-nous pourquoi vous avez désinstallé Ophel pour nous aider à nous améliorer.',
    kicker: 'Nous sommes tristes de vous voir partir',
    heading: "Qu'est-ce qui vous a poussé à désinstaller Ophel ?",
    sub: 'Cela ne prend que quelques secondes. Votre choix déterminera nos prochaines améliorations — merci pour votre temps.',
    reasonTitle: '1. Choisissez la raison principale',
    reasons: {
      'missing-site': "Ne prend pas en charge les sites ou services que j'utilise",
      'below-expectations': "Les fonctionnalités n'ont pas répondu à mes attentes",
      'too-many-errors': "Trop d'erreurs ou de blocages",
      'update-broke': "Quelque chose s'est cassé après une mise à jour",
      'switched-tool': 'Je suis passé à un autre outil',
      'no-longer-needed': "Je n'en ai plus besoin",
      performance: 'Cela ralentissait mon navigateur',
      'privacy-concern': 'Inquiétudes concernant la confidentialité ou la sécurité du compte',
      other: 'Autre raison',
    },
    detailTitle: '2. Autre chose à ajouter ? (facultatif)',
    detailPlaceholder:
      'Par ex. : quelle action a échoué, ou quel site vous aimeriez voir pris en charge',
    submit: 'Envoyer mon avis',
    submitting: 'Envoi en cours…',
    skip: 'Ignorer',
    thanksTitle: 'Merci pour votre retour',
    thanksBody:
      'Nous lisons chaque réponse avec attention. Si un jour vous souhaitez redonner sa chance à Ophel, nous serons là.',
    reinstall: 'Réinstaller Ophel',
    error: "Échec de l'envoi — veuillez réessayer dans un instant.",
    footerNote:
      "Nous savons qu'Ophel n'est pas encore assez bon — il nous manque juste de savoir où. Votre choix nous montre la direction.",
  },
  pt: {
    metaTitle: 'Feedback de desinstalação — Ophel Atlas',
    metaDesc: 'Conte por que você desinstalou o Ophel para sabermos o que melhorar.',
    kicker: 'Lamentamos ver você partir',
    heading: 'O que fez você desinstalar o Ophel?',
    sub: 'Leva só alguns segundos. Sua escolha decide o que vamos melhorar a seguir — obrigado pelo seu tempo.',
    reasonTitle: '1. Escolha o motivo principal',
    reasons: {
      'missing-site': 'Não é compatível com os sites ou serviços que eu uso',
      'below-expectations': 'Os recursos não atenderam às minhas expectativas',
      'too-many-errors': 'Erros ou travamentos demais',
      'update-broke': 'Algo quebrou depois de uma atualização',
      'switched-tool': 'Mudei para outra ferramenta',
      'no-longer-needed': 'Não preciso mais',
      performance: 'Estava deixando meu navegador lento',
      'privacy-concern': 'Preocupações com privacidade ou segurança da conta',
      other: 'Outro motivo',
    },
    detailTitle: '2. Quer acrescentar algo? (opcional)',
    detailPlaceholder: 'Ex.: qual ação falhou ou qual site você gostaria que fosse compatível',
    submit: 'Enviar feedback',
    submitting: 'Enviando…',
    skip: 'Pular',
    thanksTitle: 'Obrigado pelo feedback',
    thanksBody:
      'Lemos cada resposta com atenção. Se um dia quiser dar outra chance ao Ophel, estaremos aqui.',
    reinstall: 'Reinstalar o Ophel',
    error: 'Falha no envio — tente novamente em instantes.',
    footerNote:
      'Sabemos que o Ophel ainda não é bom o suficiente — só precisamos saber onde. Sua escolha nos aponta a direção certa.',
  },
  ru: {
    metaTitle: 'Отзыв об удалении — Ophel Atlas',
    metaDesc: 'Расскажите, почему вы удалили Ophel, чтобы мы знали, что улучшить.',
    kicker: 'Жаль, что вы уходите',
    heading: 'Что заставило вас удалить Ophel?',
    sub: 'Это займёт всего несколько секунд. Ваш выбор определит, что мы улучшим дальше, — спасибо за ваше время.',
    reasonTitle: '1. Выберите главную причину',
    reasons: {
      'missing-site': 'Не поддерживает сайты и сервисы, которыми я пользуюсь',
      'below-expectations': 'Возможности не оправдали ожиданий',
      'too-many-errors': 'Слишком много ошибок и зависаний',
      'update-broke': 'Что-то сломалось после обновления',
      'switched-tool': 'Перешёл на другой инструмент',
      'no-longer-needed': 'Больше не нужен',
      performance: 'Замедлял работу браузера',
      'privacy-concern': 'Опасения о конфиденциальности или безопасности аккаунта',
      other: 'Другая причина',
    },
    detailTitle: '2. Хотите что-то добавить? (необязательно)',
    detailPlaceholder:
      'Например: какое действие не сработало или какой сайт вы хотели бы видеть поддерживаемым',
    submit: 'Отправить отзыв',
    submitting: 'Отправка…',
    skip: 'Пропустить',
    thanksTitle: 'Спасибо за отзыв',
    thanksBody:
      'Мы внимательно читаем каждый отзыв. Если однажды захотите дать Ophel ещё один шанс — мы будем здесь.',
    reinstall: 'Установить Ophel снова',
    error: 'Не удалось отправить — попробуйте ещё раз чуть позже.',
    footerNote:
      'Мы знаем, что Ophel пока недостаточно хорош, — просто не знаем, где именно. Ваш выбор поможет нам найти верное направление.',
  },
};
