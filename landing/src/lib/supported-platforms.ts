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
  category: SitePackCategory;
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
    domain: 'kimi.com',
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
    name: 'Doubao',
    zhName: '豆包',
    href: 'https://www.doubao.com',
    domain: 'doubao.com',
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
    domain: 'chat.z.ai',
    iconSrc: '/icons/zai.png',
  },
  {
    id: 'chatglm',
    name: 'ChatGLM',
    zhName: '智谱清言',
    href: 'https://chatglm.cn/main/alltoolsdetail?lang=zh',
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
    category: 'search-agent',
  },
  {
    id: 'genspark',
    name: 'Genspark',
    href: 'https://www.genspark.ai',
    domain: 'genspark.ai',
    category: 'search-agent',
  },
  {
    id: 'manus',
    name: 'Manus',
    href: 'https://manus.im',
    domain: 'manus.im',
    category: 'search-agent',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    href: 'https://www.notion.so/product/ai',
    domain: 'app.notion.com',
    category: 'assistant',
  },
  {
    id: 'duck-ai',
    name: 'Duck.ai',
    href: 'https://duck.ai',
    domain: 'duck.ai',
    category: 'assistant',
  },
  {
    id: 'proton-lumo',
    name: 'Proton Lumo',
    href: 'https://lumo.proton.me',
    domain: 'lumo.proton.me',
    category: 'assistant',
  },
  {
    id: 'zhida',
    name: 'Zhihu Zhida',
    zhName: '知乎直答',
    href: 'https://zhida.zhihu.com',
    domain: 'zhida.zhihu.com',
    category: 'search-agent',
  },
  {
    id: 'stepfun',
    name: 'StepFun',
    zhName: '阶跃 AI',
    href: 'https://chat.stepfun.com',
    domain: 'chat.stepfun.com',
    category: 'assistant',
  },
  {
    id: 'wenxin',
    name: 'Baidu Wenxin',
    zhName: '百度文心',
    href: 'https://wenxin.baidu.com',
    domain: 'wenxin.baidu.com',
    category: 'assistant',
  },
  {
    id: 'longcat',
    name: 'LongCat AI',
    href: 'https://longcat.chat',
    domain: 'longcat.chat',
    category: 'assistant',
  },
  {
    id: 'opencode-share',
    name: 'OpenCode Share',
    zhName: 'OpenCode 分享页',
    href: 'https://opncd.ai',
    domain: 'opncd.ai',
    category: 'search-agent',
  },
  {
    id: 'lobechat',
    name: 'LobeChat',
    href: 'https://lobehub.com',
    domain: 'lobehub.com',
    category: 'self-hosted',
  },
  {
    id: 'open-webui',
    name: 'Open WebUI',
    href: 'https://openwebui.com',
    domain: 'openwebui.com',
    category: 'self-hosted',
  },
  {
    id: 'librechat',
    name: 'LibreChat',
    href: 'https://www.librechat.ai',
    domain: 'librechat.ai',
    category: 'self-hosted',
  },
  {
    id: 'nextchat',
    name: 'NextChat',
    href: 'https://nextchat.dev',
    domain: 'nextchat.dev',
    category: 'self-hosted',
  },
  {
    id: 'deepseek-harness',
    name: 'DeepSeek Harness',
    href: 'https://github.com/deepseek-ai/deepseek-harness',
    domain: 'Self-hosted',
    category: 'self-hosted',
  },
];

export const BUILTIN_PLATFORM_COUNT = PLATFORM_DEFINITIONS.length; // 16
export const SITE_PACK_COUNT = SITE_PACK_DEFINITIONS.length; // 16
export const TOTAL_SUPPORTED_SITES = BUILTIN_PLATFORM_COUNT + SITE_PACK_COUNT; // 32

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
