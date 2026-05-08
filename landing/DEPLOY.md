# 部署指南

## Cloudflare Pages 配置

在 Cloudflare Pages Dashboard 中创建项目时填写：

| 项目 | 值 |
|------|----|
| 构建命令 | `pnpm build` |
| 输出目录 | `dist` |
| Node.js 版本 | `22` |
| 环境变量 | 无 |

## Mintlify /docs 子路径配置

1. 登录 [Mintlify Dashboard](https://dashboard.mintlify.com) → 自定义域名
2. 打开 "Host at `/docs`" 开关
3. 输入域名：`ophel.app`
4. 在 Cloudflare 创建 Worker，使用如下脚本：

```js
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const urlObject = new URL(request.url);

    // Let's Encrypt 验证路径直接透传
    if (urlObject.pathname.startsWith("/.well-known/")) {
      return await fetch(request);
    }

    // /docs* → 代理到 Mintlify
    if (/^\/docs/.test(urlObject.pathname)) {
      const DOCS_URL = "[YOUR_MINTLIFY_SUBDOMAIN].mintlify.dev";
      const CUSTOM_URL = "ophel.app";

      let url = new URL(request.url);
      url.hostname = DOCS_URL;

      let proxyRequest = new Request(url, request);
      proxyRequest.headers.set("Host", DOCS_URL);
      proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
      proxyRequest.headers.set("X-Forwarded-Proto", "https");
      proxyRequest.headers.set("CF-Connecting-IP", request.headers.get("CF-Connecting-IP"));

      return await fetch(proxyRequest);
    }

    // 其余请求透传（由 CF Pages 处理）
    return await fetch(request);
  } catch (error) {
    return await fetch(request);
  }
}
```

5. 把 Worker 绑定到 `ophel.app` 自定义域名
6. 删除旧的 `docs.ophel.app` CNAME 或保留为备用

## DNS 说明

由于 Cloudflare Worker 控制所有 `ophel.app` 流量，
Cloudflare Pages 的域名绑定不需要再另外配置 DNS，
Worker 内部通过 `fetch(request)` 透传到 Pages 部署即可。
