export type SupportedPlatformLocale = 'en' | 'zh';

export interface SupportedPlatformDefinition {
  id: string;
  name: string;
  zhName?: string;
  href: string;
  domain: string;
  iconSrc: string;
  iconVariant?: 'default' | 'inverted';
  isNew?: boolean;
}

export interface SupportedPlatform extends SupportedPlatformDefinition {
  label: string;
}

export type SitePackCategory = 'search-agent' | 'assistant' | 'self-hosted';

export interface SitePackDefinition {
  id: string;
  name: string;
  zhName?: string;
  href: string;
  domain: string;
  iconSrc: string;
  category: SitePackCategory;
  isNew?: boolean;
}

export interface SitePackItem extends SitePackDefinition {
  label: string;
}

const PLATFORM_DEFINITIONS: SupportedPlatformDefinition[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    href: 'https://chatgpt.com',
    domain: 'chatgpt.com',
    iconSrc: '/icons/chatgpt.png',
    iconVariant: 'inverted',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    href: 'https://gemini.google.com',
    domain: 'gemini.google.com',
    iconSrc: '/icons/gemini.png',
  },
  {
    id: 'claude',
    name: 'Claude',
    href: 'https://claude.ai',
    domain: 'claude.ai',
    iconSrc: '/icons/claude.svg',
  },
  {
    id: 'notebook',
    name: 'Gemini Notebook',
    zhName: 'Gemini Notebook',
    href: 'https://notebook.google.com',
    domain: 'notebook.google.com',
    iconSrc: '/icons/notebook.png',
    isNew: true,
  },
  {
    id: 'aistudio',
    name: 'Google AI Studio',
    zhName: 'AI Studio',
    href: 'https://aistudio.google.com',
    domain: 'aistudio.google.com',
    iconSrc: '/icons/aistudio.png',
  },
  {
    id: 'grok',
    name: 'Grok',
    href: 'https://grok.com',
    domain: 'grok.com',
    iconSrc: '/icons/grok.png',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    href: 'https://chat.deepseek.com',
    domain: 'chat.deepseek.com',
    iconSrc: '/icons/deepseek.svg',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    href: 'https://www.kimi.com',
    domain: 'kimi.com / kimi.ai',
    iconSrc: '/icons/kimi.png',
  },
  {
    id: 'gemini-enterprise',
    name: 'Gemini Enterprise',
    zhName: 'Gemini 企业版',
    href: 'https://business.gemini.google',
    domain: 'business.gemini.google',
    iconSrc: '/icons/gemini-enterprise.png',
  },
  {
    id: 'doubao',
    name: 'Doubao / Dola',
    zhName: '豆包 / Dola',
    href: 'https://www.doubao.com',
    domain: 'doubao.com / dola.com',
    iconSrc: '/icons/doubao.png',
  },
  {
    id: 'qianwen',
    name: 'Qianwen',
    zhName: '通义千问',
    href: 'https://www.qianwen.com',
    domain: 'qianwen.com',
    iconSrc: '/icons/qianwen.png',
  },
  {
    id: 'qwenai',
    name: 'Qwen Studio',
    zhName: 'Qwen Studio',
    href: 'https://chat.qwen.ai',
    domain: 'chat.qwen.ai',
    iconSrc: '/icons/qwenai.png',
  },
  {
    id: 'yuanbao',
    name: 'Tencent Yuanbao',
    zhName: '腾讯元宝',
    href: 'https://yuanbao.tencent.com',
    domain: 'yuanbao.tencent.com',
    iconSrc: '/icons/yuanbao.png',
  },
  {
    id: 'zai',
    name: 'Z.ai',
    href: 'https://chat.z.ai',
    domain: 'chat.z.ai / zchat.z.ai',
    iconSrc: '/icons/zai.png',
  },
  {
    id: 'chatglm',
    name: 'ChatGLM',
    zhName: '智谱清言',
    href: 'https://chatglm.cn',
    domain: 'chatglm.cn',
    iconSrc: '/icons/chatglm.png',
  },
  {
    id: 'ima',
    name: 'ima',
    zhName: '腾讯 ima',
    href: 'https://ima.qq.com',
    domain: 'ima.qq.com',
    iconSrc: '/icons/ima.jpg',
  },
];

const SITE_PACK_DEFINITIONS: SitePackDefinition[] = [
  {
    id: 'perplexity',
    name: 'Perplexity',
    href: 'https://www.perplexity.ai',
    domain: 'perplexity.ai',
    iconSrc: '/icons/site-packs/perplexity.svg',
    category: 'search-agent',
  },
  {
    id: 'workbuddy',
    name: 'WorkBuddy',
    href: 'https://www.workbuddy.cn/app',
    domain: 'workbuddy.cn / .ai',
    iconSrc: '/icons/site-packs/workbuddy.png',
    category: 'search-agent',
    isNew: true,
  },
  {
    id: 'genspark',
    name: 'Genspark',
    href: 'https://www.genspark.ai',
    domain: 'genspark.ai',
    iconSrc: '/icons/site-packs/genspark.png',
    category: 'search-agent',
  },
  {
    id: 'manus',
    name: 'Manus',
    href: 'https://manus.im',
    domain: 'manus.im',
    iconSrc: '/icons/site-packs/manus.png',
    category: 'search-agent',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    href: 'https://www.notion.so/product/ai',
    domain: 'app.notion.com',
    iconSrc: '/icons/site-packs/notion-ai.png',
    category: 'assistant',
  },
  {
    id: 'duck-ai',
    name: 'Duck.ai',
    href: 'https://duck.ai',
    domain: 'duck.ai',
    iconSrc: '/icons/site-packs/duck-ai.png',
    category: 'assistant',
  },
  {
    id: 'proton-lumo',
    name: 'Proton Lumo',
    href: 'https://lumo.proton.me',
    domain: 'lumo.proton.me',
    iconSrc: '/icons/site-packs/proton-lumo.png',
    category: 'assistant',
  },
  {
    id: 'zhida',
    name: 'Zhihu Zhida',
    zhName: '知乎直答',
    href: 'https://zhida.zhihu.com',
    domain: 'zhida.zhihu.com',
    iconSrc: '/icons/site-packs/zhida.png',
    category: 'search-agent',
  },
  {
    id: 'stepfun',
    name: 'StepFun',
    zhName: '阶跃 AI',
    href: 'https://chat.stepfun.com',
    domain: 'chat.stepfun.com',
    iconSrc: '/icons/site-packs/stepfun.png',
    category: 'assistant',
  },
  {
    id: 'wenxin',
    name: 'Baidu Wenxin',
    zhName: '百度文心',
    href: 'https://wenxin.baidu.com',
    domain: 'wenxin.baidu.com',
    iconSrc: '/icons/site-packs/wenxin.png',
    category: 'assistant',
  },
  {
    id: 'longcat',
    name: 'LongCat AI',
    href: 'https://longcat.chat',
    domain: 'longcat.chat',
    iconSrc: '/icons/site-packs/longcat.svg',
    category: 'assistant',
  },
  {
    id: 'opencode-share',
    name: 'OpenCode Share',
    zhName: 'OpenCode 分享页',
    href: 'https://opncd.ai',
    domain: 'opncd.ai',
    iconSrc: '/icons/site-packs/opencode-share.svg',
    category: 'search-agent',
  },
  {
    id: 'muse',
    name: 'Muse',
    href: 'https://muse.ai',
    domain: 'muse.ai',
    iconSrc: '/icons/site-packs/muse.png',
    category: 'assistant',
  },
  {
    id: 'lobechat',
    name: 'LobeChat',
    href: 'https://app.lobehub.com',
    domain: 'app.lobehub.com',
    iconSrc: '/icons/site-packs/lobechat.png',
    category: 'assistant',
  },
  {
    id: 'open-webui',
    name: 'Open WebUI',
    href: 'https://openwebui.com',
    domain: 'openwebui.com',
    iconSrc: '/icons/site-packs/open-webui.png',
    category: 'self-hosted',
  },
  {
    id: 'librechat',
    name: 'LibreChat',
    href: 'https://www.librechat.ai',
    domain: 'librechat.ai',
    iconSrc: '/icons/site-packs/librechat.png',
    category: 'self-hosted',
  },
  {
    id: 'nextchat',
    name: 'NextChat',
    href: 'https://nextchat.dev',
    domain: 'nextchat.dev',
    iconSrc: '/icons/site-packs/nextchat.png',
    category: 'self-hosted',
  },
  {
    id: 'deepseek-harness',
    name: 'DeepSeek Harness',
    href: 'https://github.com/deepseek-ai/deepseek-harness',
    domain: 'Self-hosted',
    iconSrc: '/icons/site-packs/deepseek-harness.svg',
    category: 'self-hosted',
  },
];

export const BUILTIN_PLATFORM_COUNT = PLATFORM_DEFINITIONS.length;
export const SITE_PACK_COUNT = SITE_PACK_DEFINITIONS.length;
export const TOTAL_SUPPORTED_SITES = BUILTIN_PLATFORM_COUNT + SITE_PACK_COUNT;

export function getSupportedPlatforms(locale: SupportedPlatformLocale = 'en'): SupportedPlatform[] {
  return PLATFORM_DEFINITIONS.map((platform) => ({
    ...platform,
    iconVariant: platform.id === 'chatgpt' ? 'inverted' : 'default',
    label: locale === 'zh' ? (platform.zhName ?? platform.name) : platform.name,
  }));
}

export function getSitePacks(locale: SupportedPlatformLocale = 'en'): SitePackItem[] {
  return SITE_PACK_DEFINITIONS.map((pack) => ({
    ...pack,
    label: locale === 'zh' ? (pack.zhName ?? pack.name) : pack.name,
  }));
}
