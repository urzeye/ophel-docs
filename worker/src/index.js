export default {
	async fetch(request) {
		try {
			const url = new URL(request.url);

			// .well-known 路径直接透传
			if (url.pathname.startsWith("/.well-known/")) {
				return fetch(request);
			}

			// /docs 路径代理到 Mintlify
			if (url.pathname === "/docs" || url.pathname.startsWith("/docs/")) {
				const DOCS_URL = "urzeye.mintlify.dev";
				const CUSTOM_URL = "ophel.app";

				const mintlifyUrl = new URL(request.url);
				mintlifyUrl.hostname = DOCS_URL;

				const proxiedRequest = new Request(mintlifyUrl.toString(), {
					method: request.method,
					headers: (() => {
						const headers = new Headers(request.headers);
						headers.set("Host", DOCS_URL);
						headers.set("X-Forwarded-Host", CUSTOM_URL);
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

			// 其他请求转发到 Cloudflare Pages
			const PAGES_HOST = "ophel-docs.pages.dev";
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
