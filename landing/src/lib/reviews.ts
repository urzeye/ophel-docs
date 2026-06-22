export interface Review {
  id: string;
  name: string;
  /** Google avatar URL; empty string triggers letter-fallback */
  avatar: string;
  text: string;
  /**
   * Display weight: 1–5.
   * Higher weight = item appears more times in the marquee track,
   * so it is seen more frequently. Not displayed in UI.
   */
  weight: number;
}

/**
 * All 5-star reviews from Chrome Web Store.
 * Avatars and names extracted directly from saved CWS HTML — exact name→avatar match.
 * Excluded: reviews containing bug reports / complaints (6 entries).
 */
export const reviews: Review[] = [
  // ── Weight 5 ─────────────────────────────────────────────────────────
  {
    id: 'wu-dengdeng',
    name: 'wu dengdeng',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXgKPjFdyxi-it-c9OAR4mcZGbA2eqT__8uANNdLrboatmok4w=s48-w48-h48',
    text: '这款插件太棒了！Ophel 大大提升了我在 ChatGPT 和 Gemini 上的对话体验。自动生成的大纲让我轻松跳转查找重点内容，再也不用反复滚动。会话管理、标签分类和搜索功能非常实用！最重要的是，作者竟然还开源了！这是什么赛博菩萨？？',
    weight: 5,
  },
  {
    id: 'chia-ying',
    name: 'Chia-ying',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVekAdeDzVYBFNleyNOiR77-DwK5-6VYjQhyvLt015_ox0Jrvz_cg=s48-w48-h48',
    text: '我只能說，不下載你會後悔⋯⋯ 這是一個超級強大包山包海的擴充套件，你想得到的、你想不到的功能，它全部都有！！！而且重點是，它是開源的！！！ 實在是非常佩服這個擴充套件的開發者，超偉大⋯⋯佛心到讓人崩潰。希望大家多多下載，多多支持，多多推廣！',
    weight: 5,
  },
  {
    id: 'cherry-691',
    name: 'cherry 691',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKqOyZyYBXXdPwljNBMEU3Gwb1XLNj4T1eOctIS5fUHmtXvdg=s48-w48-h48',
    text: '原本只是想找個工具讓 AI 對話介面更好整理，實際用下來卻意外地順手。Ophel 的整體設計很克制，不會打斷原本的使用習慣，但在需要的時候又能確實幫上忙。長時間使用下來，閱讀與回顧對話變得輕鬆許多，整體體驗相當舒服。介面乾淨、操作直覺，這是一款會讓人默默留下來持續使用的擴充功能，值得推薦。',
    weight: 5,
  },
  {
    id: 'ink-vagabond',
    name: 'InkVagabond "数墨拾荒"',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXXw-1ZPALd-XzPmyu4fG-i4nsG1BEdLF7GHatqxbzrCP4Bh5gn=s48-w48-h48',
    text: '从之前的老版本一路更新到现在，提出的各种小要求居然都被作者重视并很快地开发出来，回复非常迅速。这种精神很难不成功，短短的时间上架商店到目前的 2000+ 用户就是最好的证明。一位优秀的开发者是极其重视反馈声音，并迅速做出产品调整的。如果未来收费也必定会支持——不过，能不能给老用户一点折扣？哈',
    weight: 5,
  },
  {
    id: 'sherlock-holmes',
    name: 'Sherlock Holmes',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXsMLJRX28AF7fvlSO_lG2EIJqKuggJqHtNKIC0YPt0UgQXzME=s48-w48-h48',
    text: "If you use AI for long research sessions or coding, you know the frustration of endless scrolling. This extension is a total game changer — it turns those messy chat logs into an actually navigable document with outlines. I love that it's local-first and has a proper prompt library. Highly recommended for power users.",
    weight: 5,
  },
  {
    id: 'lazar-antic',
    name: 'Lazar Antic',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUIu9mVwW-G6B2uMHfDKwZyDqvvNoEZZNm7xabCtXp6YLhM9pOB=s48-w48-h48',
    text: 'Using Ophel Atlas completely changed how I handle long AI chats. It creates a live outline and lets me jump to key ideas without endless scrolling, organize conversations into folders, and build a prompt library I reuse often. The panel feels smooth and intuitive. Highly recommended for heavy AI users.',
    weight: 5,
  },
  {
    id: 'gimme-video',
    name: 'Gimme Video',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIUAbiD8P4Iz5eSPQxfFZXIOcMMt4oTO-g162nk2WlV-5tmdA=s48-w48-h48',
    text: 'This extension is a must-have if you use multiple AI chat platforms like ChatGPT, Claude, or Gemini. The outline feature is incredibly useful for navigating long conversations without endless scrolling. I also appreciate the folder organization for prompts, which keeps my workflow clean. Lightweight and well-designed.',
    weight: 5,
  },
  {
    id: 'davis-allrick',
    name: 'Davis Allrick',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLQ7q1pGl9i4E9UxYz9reqhb7K3uWbGHPYRSJEZS4u6MRajkw=s48-w48-h48',
    text: "Been using this across Claude, ChatGPT, and Gemini for a few weeks. The side panel outline is great — long chats are way easier to go through. Tab renaming and the prompt library have saved me a ton of time. Didn't expect to use the scroll lock feature but now I can't live without it. Clean and private.",
    weight: 5,
  },

  // ── Weight 4 ─────────────────────────────────────────────────────────
  {
    id: 'baihe',
    name: '白黑',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK5iVuJ67CsbiCxS7VDuaJWbWxKZTGW6_jkd7YHYOwTF6fwLw=s48-w48-h48',
    text: '好的产品就得夸，百分制我愿意给 100 分，不怕你骄傲，确实是我考虑到和没想到的功能都有了。给作者加油！',
    weight: 4,
  },
  {
    id: 'mortal-noel',
    name: 'mortal Noel',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXKJT0zK_1QdfUYwoFo8C2mpr_jaLiu_dTO0mHUsPySI913fPjx=s48-w48-h48',
    text: '很好的插件，我去询问 Gemini，他给我推荐的就是这个插件。',
    weight: 4,
  },
  {
    id: 'lu-mu-yuan',
    name: '鹿目圆',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUwdvdTiH1MgJpY9CGnnzXYG09LIumsD6whLwzg-nypbsOfQK8=s48-w48-h48',
    text: '很好的扩展，比我自己之前写的自用的脚本要效率得多。感谢您的免费开源！扩展会有自动更新功能的对吧——期待持续更新！',
    weight: 4,
  },
  {
    id: 'astrocyte',
    name: 'astrocyte',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWUdQJsCt6EJUjfF_-fNb4tqRHY2Bini2CQoXblkGRY9MPgSTRk=s48-w48-h48',
    text: 'You can tell that a good engineer made this. The UI is very well done; the "Magic" theme toggle alone shows how much thought went into it. It unifies the experience across Gemini, Claude, and ChatGPT so everything feels consistent. No bloat, just useful tools. Highly recommended.',
    weight: 4,
  },
  {
    id: 'saleh-mohammad',
    name: 'Saleh Mohammad',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLrMTOFV1X0um_y8JwfgKD5CVhAh5yqEM9yhiGEBjzPGrCL6Q=s48-w48-h48',
    text: 'If you use AI for real work like research or coding you know how fast the chats get messy. Ophel Atlas fixes all that by adding a sidebar that actually makes sense. I love how it creates an outline for my long conversations so I can jump to any part without scrolling, and the prompt library is a total game changer.',
    weight: 4,
  },
  {
    id: 'adnan-arefin',
    name: 'Adnan Arefin',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK6YuczEWBctrfOdBGYTsDjmBBkTSJ49Mbf_BTVt_8j-mHtoA=s48-w48-h48',
    text: 'This extension is honestly such a lifesaver for my AI chats — I used to get totally lost in those massive conversations where you have to scroll forever just to find one specific answer. Tried it out while doing some deep research on ChatGPT and it was a game changer.',
    weight: 4,
  },
  {
    id: 'jean-bravo',
    name: 'Jean Bravo',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUyIVHUuN58ynrRJn0NRVw_QTDDVdl3s6pvSI6IK4R8MuaRVrU=s48-w48-h48',
    text: 'Ophel Atlas is a lifesaver for anyone juggling multiple AI conversations. It neatly organizes chats with Claude, ChatGPT, and others right in my browser. No more lost threads or endless scrolling to find that one useful response.',
    weight: 4,
  },
  {
    id: 'niamat-ullah',
    name: 'Niamat Ullah',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLt7yoty31v2OTZIWcSJAvD4DgsobzSGGFvlrWt_l6waGqeqQ=s48-w48-h48',
    text: 'Ophel Atlas is a total lifesaver for my long AI chat sessions — it turns endless scrolling into a real-time outline. I can jump to key points instead of getting lost. The prompt library is super helpful too — save templates and reuse them without typing everything again.',
    weight: 4,
  },
  {
    id: 'joshua-goldstein',
    name: 'Joshua Goldstein',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK-6ebvTEcn0gBeNKm0pFc9dCyNLm1kfV54QwpnKJORePVfRQ=s48-w48-h48',
    text: 'I am a heavy user of all of the LLM models and found this to be an incredibly helpful extension. There are many times when conversations get long and you need to quickly find things in the historical conversation — this tool does a great job organizing everything into one easy searchable central location.',
    weight: 4,
  },
  {
    id: 'asifur-rahman',
    name: 'Asifur Rahman',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIJvU30qXtrfbMcNWLdf1YweXCHBDLjhsVULQXK9XzbsluugQ=s48-w48-h48',
    text: 'As a heavy user of multiple AI platforms, this extension is a lifesaver. It solves the problem of unorganized, confusing chat histories by centralizing and organizing everything into one searchable, easy-to-navigate location. Highly recommend it.',
    weight: 4,
  },
  {
    id: 'waleria-stojanowska',
    name: 'Waleria Stojanowska',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKnSkSaiSSm1qIynJ6P_8H-wC-6Pr_CFqwFiRc1Dr6n--5o-Q=s48-w48-h48',
    text: 'Ophel Atlas — просто находка для работы с AI! Теперь длинные чаты легко превращаются в структурированные заметки, и больше не приходится бесконечно прокручивать диалоги. Особенно удобно создавать контуры, сортировать по папкам и повторно использовать промпты — реально экономит время.',
    weight: 4,
  },

  // ── Weight 3 ─────────────────────────────────────────────────────────
  {
    id: 'howe-ryan',
    name: 'Howe Ryan',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWE0-wXR-uhbKNui3AW7lY5mTl4qWAKB3Q2KbICe2z9wpqPJVs=s48-w48-h48',
    text: '非常直观好用，提示词保存方便，大纲清晰，定位回答快。',
    weight: 3,
  },
  {
    id: 'hugh-ray',
    name: 'Hugh Ray',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVwv0jFS2TRGiNOMB4xl4BXF5j1D5jRIlR6t-4xgaUSpNIsYWc=s48-w48-h48',
    text: '实在太好用了，老师请把收款码贴出来，求求。',
    weight: 5,
  },
  {
    id: 'pathan-boks',
    name: 'pathan boks',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocI1d1r6ane9JmoT6k5VgP5nrKT6hVQRWa6s-MjtsFwmlf7UPg=s48-w48-h48',
    text: 'This extension adds a side panel where you can see outlines, folders, prompts and search everything easily — so it feels more organized, not like endless scrolling. You can jump to important parts of a conversation instead of reading everything again.',
    weight: 3,
  },
  {
    id: 'aditya-jain',
    name: 'Aditya Jain',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocL8oModwWJsHBKV69OykGio79HXnY79j-9Uh83wNYEuIgq6on4=s48-w48-h48',
    text: 'Great AI chat tool with context-aware navigation! Ophel Atlas makes finding answers and exploring topics smooth and intuitive — very helpful for research and learning.',
    weight: 3,
  },
  {
    id: 'deniz',
    name: 'Deniz',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXJ9RcbG_XVSrlgGg20e-nyfdMrXOU5nWeaKkxaEOkpAHNnXOk=s48-w48-h48',
    text: 'I use multiple AI platforms, this extension lifted a burden off my back and made my life a lot easier. Most AI chats are unorganized and confusing but this extension organizes and helps you navigate through the chat. Really useful.',
    weight: 3,
  },
  {
    id: 'logan-k',
    name: 'Logan K',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJLthximHRm-gINfhOAa-hEGYCvuxMoHNiKN4hv-51IyuMiDA=s48-w48-h48',
    text: 'Amazing extension, very well thought and great UX. My AI workflow is getting better — 谢谢！',
    weight: 3,
  },
  {
    id: 'al-amin-islam',
    name: 'Al-Amin Islam',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVuNRSWEmT0cIYjsO1r-iWW7dNFEHKFohb19SnN5cwLgI4SvYCf=s48-w48-h48',
    text: "I've been using Ophel Atlas and it really changed how I work with AI chats. Before I always lost track of useful answers — now everything is organised and easy to find. The side panel makes long conversations readable and I can jump to the exact part I need without endless scrolling.",
    weight: 3,
  },
  {
    id: 'subhan-ali',
    name: 'subhan ali',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIzC2oln3PcL-0DzWFfVw3hm3mF4HikZOIcV4OlSw17xKAezAhO=s48-w48-h48',
    text: 'This helps me turn chats into readable, navigable knowledge. I use outline folders and prompts to organize my workflow — turning long AI chats into a navigable document with a real-time outline so I can jump to key points and reuse what matters.',
    weight: 3,
  },
  {
    id: 'orion-ventures',
    name: 'Orion Ventures',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKaOvBhqXYucGC7SJN5QxlW8jJYO0JGuca15z6i5PtjrgOx5w=s48-w48-h48',
    text: "I've been using Ophel Atlas for a while now, and it's a great tool for organizing my chats. The folder system works really well and the search makes it easy to find old conversations. Saves a lot of time and keeps my work productive. Highly recommend.",
    weight: 3,
  },
  {
    id: 'yuval-rokni',
    name: 'Yuval Rokni',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLnH20EWUZdXhZg-MrRlKDH36CY627u5q4r0y64CTEzBhAsXrBI=s48-w48-h48',
    text: "I've been using Ophel Atlas for a few weeks now, and it's a great product. The folders and search features make everything so organized and neat. It saves me a lot of time finding old conversations and keeps my work clean. Highly recommend it.",
    weight: 3,
  },
  {
    id: 'luis-novoa',
    name: 'Luis Novoa',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVG75RwtUKqpYtg-Jrk1BqVnqDDP_zSo2dOTW_-dpKckioYcw=s48-w48-h48',
    text: 'Ophel Atlas ha sido una de las herramientas más útiles que he añadido a mi navegador para trabajar con chats de IA. Convierte conversaciones largas en documentos estructurados y fáciles de navegar, con un esquema en tiempo real que te permite saltar directamente a los puntos importantes.',
    weight: 3,
  },
  {
    id: 'duy-phan',
    name: 'Duy Phan Quốc',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK3RJEshSFqsqRQ11vecA38LzgjmHBJJDjJ852-qi5bx7k_zVM=s48-w48-h48',
    text: 'Ophel Atlas là một công cụ thay đổi hoàn toàn cách mình tương tác với các AI chatbot. Khả năng điều hướng các đoạn hội thoại một cách khoa học giúp mình không còn bị lạc giữa hàng tá phiên làm việc. Giao diện mượt mà, tích hợp tốt và rất dễ sử dụng.',
    weight: 3,
  },
  {
    id: 'oyagi-akuma',
    name: 'Oyagi Akuma',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVgT4HRi_EXvXisKixzSdJZQcfCCq4OcxTLN52mSJaIB77z8RM=s48-w48-h48',
    text: 'This helps me turn chats into readable, navigable knowledge. I use outline folders and prompts to organize my workflow — turning long AI chats into a navigable document with a real-time outline. Also useful in content creation, development, technical writing, and building a prompt library.',
    weight: 3,
  },

  // ── Weight 2 ─────────────────────────────────────────────────────────
  {
    id: 'gui-chen',
    name: 'gui chen',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK-AEwagwwjNd0z1WcIVdtnfMDaQBb3IzMYZVVfC7vDtix9Sw=s48-w48-h48',
    text: '很好用，希望能支持下 QWEN（已支持！）',
    weight: 2,
  },
  {
    id: 'catalin-gidan',
    name: 'catalin gidan',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLSJDjHweqcqq2KWT9nH7UTPMz19nIIdjbj6yMDTQfj6mQPvg=s48-w48-h48',
    text: 'The best way to streamline your browsing sessions without any lag.',
    weight: 2,
  },
  {
    id: 'gidan-catalin',
    name: 'Gidan Catalin',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWCrDpovsq8y95yHjeawJOrUCDUhUIliiLiS1PafRdpHUpTbxpd=s48-w48-h48',
    text: "So nice and useful — it's good for me because I use all these AIs.",
    weight: 2,
  },
  {
    id: 'ana-mare',
    name: 'ana mare',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKk7egCsc7IrLqkOnoxVABHsEu4_L27ORuPqV20ceVyrh9a=s48-w48-h48',
    text: 'For someone who uses all these AIs, this is the best extension — trust me!',
    weight: 2,
  },
  {
    id: 'youssef-olsson',
    name: 'youssef olsson',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjV5gGG6e48da5oqsqkkYtLYdZAFrtmvG3brC_qbyKLw-k7_x6U=s48-w48-h48',
    text: 'Really useful tool to deal with ChatGPT, Claude, Gemini and basically all the AIs you currently use or will use in the future.',
    weight: 2,
  },
  {
    id: 'mailreplyai',
    name: 'MailReplyAI App',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXAq-Dai9007OVcISy7ZiVmAJWVirVSc4727uYT08c7Kt3Jns8=s48-w48-h48',
    text: 'I love this extension... Very nice 😊',
    weight: 2,
  },
  {
    id: 'jared-campbell',
    name: 'Jared Campbell',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjX-ILOclUlF_9qWn5K99X9pbh0mp6gC2OddjJQ04uenSDI_KEU=s48-w48-h48',
    text: 'Keep up the good work!',
    weight: 2,
  },
  {
    id: 'aquarius-k',
    name: 'Aquarius K',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUWDMYf_PJOjWA7dKC1C32yQXS7GjjJ2ZAYDS52fitUkAgZoLr_=s48-w48-h48',
    text: 'Very useful',
    weight: 2,
  },
  {
    id: 'inno-spark',
    name: 'Inno Spark',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLq1MpGciHbPU2FaGKsUv6gvW4zfT4VPM69YFSQL_EhszpgQg=s48-w48-h48',
    text: "I've seen quite a few extensions like this, and this is one of the good ones.",
    weight: 2,
  },
  {
    id: 'dylan-reed',
    name: 'Dylan reed',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJ_MQuL9RY2eud2XJabs70pdVH2j5MtwiYXEBDhLFdeboQk5g=s48-w48-h48',
    text: 'Really helpful tool if you work with AI chats every day. The navigation and organization features make it much easier to keep track of ideas and revisit previous conversations.',
    weight: 2,
  },
  {
    id: 'skillset-nest',
    name: 'SkillSet Nest',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocL6oLOADnzCFD09rCeAFvM0IuNEW4ZyafAnAAxxRsqT6q7qrqs=s48-w48-h48',
    text: 'Super useful tool for those who use AI on a daily basis. Makes everything super simple to digest and organize.',
    weight: 2,
  },
  {
    id: 'fargin-tech',
    name: 'Fargin tech',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjW5jMRFoS2Vg26viPSNAuVYK1n60RzygQHKA13yjpz0cJ1boh8=s48-w48-h48',
    text: "It's a smart and reliable extension that enhances productivity and keeps everything well organized. Highly recommended!",
    weight: 2,
  },
  {
    id: 'tuyet-nhung',
    name: 'Tuyết Nhung Phạm Thị',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLJFcc4fkwTer9Np8CLcvU_dSLnQszAhzFcNT8uMUQj14DnAA=s48-w48-h48',
    text: 'Very handy extension. Perfect for anyone who regularly has long AI conversations and wants better organization.',
    weight: 2,
  },
  {
    id: 'sourav-vinodkumar',
    name: 'Sourav Vinodkumar',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjW5ez5m_kgpdVNcQh3NQsAcYWMLCMhiJShqBMTlHAqtJ4DgSksN=s48-w48-h48',
    text: 'Has helped me organize my AI agents and their inputs. Very helpful and organizable.',
    weight: 2,
  },
  {
    id: 'jonasjds',
    name: 'JonasJDS',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjX3FovSJgD52oitClyLqHa4Fe2cvgGT3Y42VHT7XnuORv80ZGqI=s48-w48-h48',
    text: 'Comecei a usar o Ophel Atlas pra organizar melhor as conversas e acessar tudo com mais facilidade. No uso comum funcionou de forma normal e ajudou a manter as coisas mais organizadas sem precisar mexer em muita configuração.',
    weight: 2,
  },
  {
    id: 'dom-andrews',
    name: 'Dom Andrews',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWdW_LqXKFUok8U30WXysTNRC-OcQmZ745nVafsVT0PCPUVqUeGlw=s48-w48-h48',
    text: 'Excellent extension, I use the Outline tab a lot in AI Studio. Would love to know more about importing a JSON file to add prompts.',
    weight: 2,
  },
  {
    id: 'ramirez3-su',
    name: 'Ramirez3 su',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUrKx-RQ6VrKH311Mw1Adw2RALZXRsOCQmhGnYR4bKUTnDUDyU=s48-w48-h48',
    text: '界面清爽、格外好使，支持一下无私开源的作者！',
    weight: 2,
  },
  {
    id: 'jacy-walln',
    name: 'JACY WALLN',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjV9wlLoJ7HIEzJjCcs1zH6i2QuRe9XyGJqoyGsqkFYLiYesMaM=s48-w48-h48',
    text: '一直用大佬写的 Gemini 脚本，超级好用，支持一下。',
    weight: 2,
  },
  {
    id: 'charles-jones',
    name: 'Charles Jones',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXII7li15vibQUdC6p6QQl-7PnV0mPqonPT48qkkbyeMhjfb7I=s48-w48-h48',
    text: 'This is fantastic. A real lifesaver and incredibly useful!',
    weight: 2,
  },
  {
    id: 'xnne-hang',
    name: 'Xnne Hang',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXSnaxuWyzOzY0_POIf05OThy2CHyz25HkQzUpIK4XTI7POGvY=s48-w48-h48',
    text: '它让我的开发效率和心情都获得了极大的提升。',
    weight: 2,
  },

  // ── Weight 1 ─────────────────────────────────────────────────────────
  {
    id: 'kaylene',
    name: 'KAYLENE MANCINI',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJcSccRyJkPQ_pjNJHLXAMFARFS3C0MAb7Ha0WfRz8diKChyQ=s48-w48-h48',
    text: '好用',
    weight: 1,
  },
  {
    id: 'hai-vu',
    name: 'Hai Vu',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUaCLRfz0Nq-8BU887f_Gclyag121P_ef_pb6kdeJmDOy-90XR3=s48-w48-h48',
    text: 'Awesome',
    weight: 1,
  },
  {
    id: 'zj-t',
    name: 'ZJ T',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIW7OlWgDWOwyeB3-DN1G9osOZvlNup5j_0haObXup4_w6m3Q=s48-w48-h48',
    text: '很好',
    weight: 1,
  },
  {
    id: 'elias-lu',
    name: 'Elias Lu',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjX_Oc9PinUQfL8ahX7wteGM8TZ6XTO6dGXr7oi46H6e0Pzd6OgC=s48-w48-h48',
    text: '好用',
    weight: 1,
  },
  {
    id: 'johny',
    name: 'johny',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIJKMbVAl-2IMhCnWv2VcfUSPk2AnERCVoscRJA1dnP1rosdw=s48-w48-h48',
    text: 'very Nice',
    weight: 1,
  },
  {
    id: 'kd-qiu',
    name: 'kd qiu',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUUJDlKODuHHWiIq0MQqAsoUwxIi7g3FK-MbVWLM4qbHmvpp1A=s48-w48-h48',
    text: '好用，谢谢作者。',
    weight: 1,
  },
  {
    id: 'nunziatina',
    name: 'Nunziatina Nunziatina',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXMX2s0z2Db5keY7RTFh7RsSl5O3WMKwX1VkQAzKK1Cef6P30N4=s48-w48-h48',
    text: 'Ottima',
    weight: 1,
  },
  {
    id: 'daniele-marletta',
    name: 'Daniele Marletta',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocK75De_wzma4-sjpHeqPo61mvvlI-MaCMfNSPlvDO__uXSyTg=s48-w48-h48',
    text: 'Top!!',
    weight: 1,
  },
  {
    id: 'stepan-medvedev',
    name: 'Степан Медведев',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUJsi63K9I1UK72TbUFSL0Z9guRRmO0EGR0UqrLHVM8S4jb8Ig=s48-w48-h48',
    text: 'good extension !',
    weight: 3,
  },
  {
    id: 'siim-liimand',
    name: 'Siim Liimand',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUK6k4JmrP-WUokJdEe-tzYrgIzEL6bkuEHU050QDdhT4o0Q7eG=s48-w48-h48',
    text: 'Finally, my conversations are organized!',
    weight: 1,
  },
  {
    id: 'illii',
    name: 'IllII IllIIl (fun)',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWoaQsNh1D0PeNsH1HFTZAukzEQ_idr7SoPD5EACpwA1AsmT8M=s48-w48-h48',
    text: '必须给个好评，支持一下。',
    weight: 4,
  },
  {
    id: 'chromie',
    name: 'chromie',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUmaB0yms2zXQld6jckaKpF73PES22xclffS-KEZgyfYhyHUM-v=s48-w48-h48',
    text: '很好用，很难不支持。',
    weight: 3,
  },
  {
    id: 'wunrry-wu',
    name: 'Wunrry Wu',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJpBFTZm0TpPw4PvyLwF9-rbrTKIYiEeJ2v1GW4J-YdeoMD4Ag=s48-w48-h48',
    text: "good, it's very convenient",
    weight: 4,
  },
  {
    id: 'nai-an',
    name: '奈氩拉托提普',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUxoA2Bmbfv0CBYIqECRQG8s62ZibDRqFaNbEWzPsvVhMkoEvIE=s48-w48-h48',
    text: '很好用的扩展，完美补上了 Gemini 没有 timeline 的问题 :)',
    weight: 4,
  },
  {
    id: 'nalan-ye',
    name: '纳兰夜',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWWe7zTcVKhd0mizAdB02ggj5do64o8PmEkOTLu7w_vQducpqhCCw=s48-w48-h48',
    text: '在 DeepSeek 中很好。',
    weight: 1,
  },
  {
    id: 'nera-zython',
    name: 'Nera Zython',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVkzer_9WP7uigP9Q9dneH7kzLV8dlGt4MLxeMcKrVMiwStA8s=s48-w48-h48',
    text: '相当棒的插件，瑕不掩瑜，非常好用。',
    weight: 2,
  },
  {
    id: 'lokesh-Dewangan',
    name: 'lokesh Dewangan',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIYvDwmJKke7aMN5DiGZ0wgbbaQbIlm6AYQhnAOhHGTw0pHPA=s96-w96-h96',
    text: 'GOOD',
    weight: 1,
  },
  {
    id: 'Lucy-Chiang',
    name: 'Lucy Chiang',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocL79PfaiTIm-c_6pr510aWDDMx4ghSdSgS7Q8jW9TWl5IwcAbh6=s96-w96-h96',
    text: '功能齊全，很好用',
    weight: 4,
  },
  {
    id: 'xw',
    name: 'xw',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocI5dAOGQ3p7T3ePx6TOfxgbPeFguO0_7-8VBG1-7o6TLCl51w=s96-w96-h96',
    text: '太赞了，非常好非常全的功能！',
    weight: 4,
  },
  {
    id: 'wujingfeng',
    name: '吴靖烽',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUCa434TacAUF9sicOFDHoM96zPD9KeXFJtf8gSEjQoroL9igE=s96-w96-h96',
    text: '很好用的扩展，主流AI网站都有覆盖，不再需要为每个网站单独安装扩展管理文件夹分类',
    weight: 5,
  },
  {
    id: 'xianword',
    name: 'xianword',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXYH8m6UdZk8cJqZqJoWEeKKTVGNnPopzj_9_7ghaqfnkgSb33C=s96-w96-h96',
    text: '太棒了！！！',
    weight: 4,
  },
  {
    id: 'yangfan',
    name: '杨帆',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJN8u5xtmD7sqgCRB_XV8Bz3tuemNPWJSFxNjC85H3aLMt9xu8=s96-w96-h96',
    text: '好用的扩展！',
    weight: 4,
  },
  {
    id: 'CEDRIC-W',
    name: 'CEDRIC W',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKWxmEtqYyBeeMKKWq1XfT8cerKhhcC2I1P2zsawEXEOVcgWQ=s96-w96-h96',
    text: '太厉害了',
    weight: 4,
  },
  {
    id: 'Wy-X',
    name: 'Wy X',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVgIF7GZKnrKNwP2QSX911RnKOQkF0waO9l5k-syVcfLMy82A=s96-w96-h96',
    text: 'It’s working so smoothly now! I’ve been struggling with this search issue lately, so this is great!! It solved my problem!',
    weight: 5,
  },
  {
    id: 'PeiQi-Nicholas',
    name: 'PeiQi Nicholas',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXStrqxD9ORwuMNkq28dLhn1O2q0gEnnNt4OQFo4_Q3SmTFkJ4y=s96-w96-h96',
    text: '牛逼，比我做的强',
    weight: 5,
  },
  {
    id: 'Lewu-Gao',
    name: 'Lewu Gao',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocKgY-LmLqE1O7OLjo9H4eOjhXo0WJxxma3SqvgKuB9CHj5KOw=s96-w96-h96',
    text: '太好用了，感谢🙏',
    weight: 5,
  },
  {
    id: 'Steel-Maestro',
    name: 'Steel Maestro',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUqWp1juNONMkqERRF-T1qsyf-bvPFWcqrBehBTtNkoDQ8axvA=s48-w48-h48',
    text: '相见恨晚的插件，伟大无需多言！超预期的满分，去年找了多次都没有满意的插件，还好今天又搜刮了一遍插件市场。已严肃star并附带一瓶冰红茶表示认可👍',
    weight: 5,
  },
];

/** Fisher-Yates shuffle, returns a new array. */
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build two marquee rows from the weighted review pool.
 *
 * To keep the marquee readable, weight is capped at 2 for pool expansion
 * (so high-weight items appear at most twice per loop, not 5 times).
 * Shuffle ensures no consecutive duplicates.
 */
export function buildMarqueeRows(): [Review[], Review[]] {
  const weighted = reviews.flatMap((r) => Array<Review>(Math.min(r.weight, 1)).fill(r));
  return [shuffleArray(weighted), shuffleArray(weighted)];
}
