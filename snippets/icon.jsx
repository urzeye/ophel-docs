export const Icon = ({ src, alt }) => (
  <img
    src={
      typeof window !== "undefined" &&
      typeof src === "string" &&
      src.startsWith("/images/icons/") &&
      (window.location.pathname === "/docs" ||
        window.location.pathname.startsWith("/docs/"))
        ? `/docs${src}`
        : src
    }
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
