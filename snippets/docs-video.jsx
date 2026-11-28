export const DocsVideo = ({ src, label }) => {
  const resolvedSrc =
    typeof window !== "undefined" &&
    typeof src === "string" &&
    src.startsWith("/images/") &&
    (window.location.pathname === "/docs" ||
      window.location.pathname.startsWith("/docs/"))
      ? `/docs${src}`
      : src

  return (
    <video
      key={resolvedSrc}
      className="ophel-docs-video"
      src={resolvedSrc}
      autoPlay
      loop
      muted
      playsInline
      controls
      aria-label={label}
    />
  )
}
