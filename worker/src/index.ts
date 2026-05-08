/**
 * Cloudflare Worker — ophel.app 流量路由
 *
 * 路由规则：
 *   /docs/*  → 代理到 Mintlify（[MINTLIFY_SUBDOMAIN].mintlify.dev）
 *   /*       → 透传到 Cloudflare Pages（Astro landing）
 */

const MINTLIFY_HOST = "urzeye.mintlify.app";
const CUSTOM_DOMAIN = "ophel.app";
const PAGES_HOST = "ophel-docs.pages.dev";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Let's Encrypt / ACME 验证直接透传
    if (url.pathname.startsWith("/.well-known/")) {
      return fetch(request);
    }

    // /docs 或 /docs/* → 代理到 Mintlify
    if (url.pathname === "/docs" || url.pathname.startsWith("/docs/")) {
      const mintlifyUrl = new URL(request.url);
      mintlifyUrl.hostname = MINTLIFY_HOST;

      const proxiedRequest = new Request(mintlifyUrl.toString(), {
        method: request.method,
        headers: (() => {
          const headers = new Headers(request.headers);
          headers.set("Host", MINTLIFY_HOST);
          headers.set("X-Forwarded-Host", CUSTOM_DOMAIN);
          headers.set("X-Forwarded-Proto", "https");
          return headers;
        })(),
        body: ["GET", "HEAD"].includes(request.method)
          ? undefined
          : request.body,
        redirect: "follow",
      });

      return fetch(proxiedRequest);
    }

    // 其余请求代理到 Cloudflare Pages
    const pagesUrl = new URL(request.url);
    pagesUrl.hostname = PAGES_HOST;
    return fetch(new Request(pagesUrl.toString(), {
      method: request.method,
      headers: (() => {
        const headers = new Headers(request.headers);
        headers.set("Host", PAGES_HOST);
        return headers;
      })(),
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "follow",
    }));
  },
} satisfies ExportedHandler;
