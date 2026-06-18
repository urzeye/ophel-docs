const DOCS_PATH_PREFIX = "/docs"
const ICON_PATH_PREFIX = "/images/icons/"

const isDocsPath = (pathname) =>
  pathname === DOCS_PATH_PREFIX || pathname.startsWith(`${DOCS_PATH_PREFIX}/`)

const resolveIconSrc = (src) => {
  if (
    !src?.startsWith(ICON_PATH_PREFIX) ||
    typeof window === "undefined" ||
    !isDocsPath(window.location.pathname)
  ) {
    return src
  }

  return `${DOCS_PATH_PREFIX}${src}`
}

export const Icon = ({ src, alt }) => (
  <img
    src={resolveIconSrc(src)}
    alt={alt}
    width="18"
    height="18"
    style={{
      display: "inline-block",
      verticalAlign: "-0.2em",
      margin: "0 0.15em",
    }}
  />
)
