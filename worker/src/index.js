const DOCS_PATH_PREFIX = "/docs";
const ICON_PATH_PREFIX = "/images/icons/";
const MINTLIFY_HOST = "urzeye.mintlify.dev";
const CUSTOM_HOST = "ophel.app";
const PAGES_HOST = "ophel-docs.pages.dev";

function isDocsPath(pathname) {
	return pathname === DOCS_PATH_PREFIX || pathname.startsWith(`${DOCS_PATH_PREFIX}/`);
}

function redirectRootIconToDocs(requestUrl) {
	const redirectUrl = new URL(requestUrl);
	redirectUrl.pathname = `${DOCS_PATH_PREFIX}${redirectUrl.pathname}`;
	return Response.redirect(redirectUrl.toString(), 308);
}

function rewriteDocsIconUrl(src) {
	if (!src || !src.startsWith(ICON_PATH_PREFIX)) {
		return src;
	}

	return `${DOCS_PATH_PREFIX}${src}`;
}

function rewriteDocsHtml(request, response) {
	if (request.method !== "GET") {
		return response;
	}

	const contentType = response.headers.get("Content-Type") || "";
	if (!contentType.toLowerCase().includes("text/html")) {
		return response;
	}

	return new HTMLRewriter()
		.on("img", {
			element(element) {
				const src = element.getAttribute("src");
				const rewrittenSrc = rewriteDocsIconUrl(src);
				if (rewrittenSrc && rewrittenSrc !== src) {
					element.setAttribute("src", rewrittenSrc);
				}
			},
		})
		.transform(response);
}

export default {
	async fetch(request) {
		try {
			const url = new URL(request.url);

			// .well-known 路径直接透传
			if (url.pathname.startsWith("/.well-known/")) {
				return fetch(request);
			}

			// 自定义 MDX 图标不会走 Mintlify CDN，根路径旧请求导向 /docs 资源。
			if (url.pathname.startsWith(ICON_PATH_PREFIX)) {
				return redirectRootIconToDocs(request.url);
			}

			// /docs 路径代理到 Mintlify
			if (isDocsPath(url.pathname)) {
				const mintlifyUrl = new URL(request.url);
				mintlifyUrl.hostname = MINTLIFY_HOST;

				const proxiedRequest = new Request(mintlifyUrl.toString(), {
					method: request.method,
					headers: (() => {
						const headers = new Headers(request.headers);
						headers.set("Host", MINTLIFY_HOST);
						headers.set("X-Forwarded-Host", CUSTOM_HOST);
						headers.set("X-Forwarded-Proto", "https");
						return headers;
					})(),
					body: ["GET", "HEAD"].includes(request.method)
						? undefined
						: request.body,
					redirect: "follow",
				});

				const response = await fetch(proxiedRequest);
				return rewriteDocsHtml(request, response);
			}

			// 其他请求转发到 Cloudflare Pages
			const pagesUrl = new URL(request.url);
			pagesUrl.hostname = PAGES_HOST;

			const pagesRequest = new Request(pagesUrl.toString(), {
				method: request.method,
				headers: (() => {
					const headers = new Headers(request.headers);
					headers.set("Host", PAGES_HOST);
					return headers;
				})(),
				body: ["GET", "HEAD"].includes(request.method)
					? undefined
					: request.body,
				redirect: "follow",
			});

			return fetch(pagesRequest);
		} catch (error) {
			return new Response("Service unavailable", { status: 503 });
		}
	},
};
