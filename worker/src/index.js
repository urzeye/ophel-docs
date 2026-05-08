addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	try {
		const urlObject = new URL(request.url);

		if (/^\/docs/.test(urlObject.pathname)) {
			const DOCS_URL = "urzeye.mintlify.dev";
			const CUSTOM_URL = "ophel.app";

			let url = new URL(request.url);
			url.hostname = DOCS_URL;

			let proxyRequest = new Request(url, request);
			proxyRequest.headers.set("Host", DOCS_URL);
			proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
			proxyRequest.headers.set("X-Forwarded-Proto", "https");

			return await fetch(proxyRequest);
		}

    // 非 /docs 请求转发到 Cloudflare Pages（不能用 fetch(request)，否则循环）
    const PAGES_HOST = "ophel-docs.pages.dev";
    let pagesUrl = new URL(request.url);
    pagesUrl.hostname = PAGES_HOST;

    let pagesRequest = new Request(pagesUrl, request);
    pagesRequest.headers.set("Host", PAGES_HOST);

    return await fetch(pagesRequest);
  } catch (error) {
    return new Response("Service unavailable", { status: 503 });
  }
