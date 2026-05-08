/**
 * Cloudflare Worker — ophel.app 流量路由
 * /docs/* → Mintlify，其余 → Cloudflare Pages
 */

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const url = new URL(request.url);

    if (/^\/docs/.test(url.pathname)) {
      const DOCS_URL = "urzeye.mintlify.dev";
      const CUSTOM_URL = "ophel.app";

      let proxyUrl = new URL(request.url);
      proxyUrl.hostname = DOCS_URL;

      let proxyRequest = new Request(proxyUrl, request);
      proxyRequest.headers.set("Host", DOCS_URL);
      proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
      proxyRequest.headers.set("X-Forwarded-Proto", "https");

      return await fetch(proxyRequest);
    }

    // 其余请求转发到 Cloudflare Pages
    const PAGES_URL = "ophel-docs.pages.dev";
    let pagesUrl = new URL(request.url);
    pagesUrl.hostname = PAGES_URL;

    let pagesRequest = new Request(pagesUrl, request);
    pagesRequest.headers.set("Host", PAGES_URL);

    return await fetch(pagesRequest);
  } catch (error) {
    return await fetch(request);
  }
}
