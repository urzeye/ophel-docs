export const Shortcut = ({ combo, mac, sameOnMac = false }) => {
  const keyLabels = {
    arrowup: { win: "Up", mac: "↑" },
    arrowdown: { win: "Down", mac: "↓" },
    arrowleft: { win: "Left", mac: "←" },
    arrowright: { win: "Right", mac: "→" },
    up: { win: "Up", mac: "↑" },
    down: { win: "Down", mac: "↓" },
    left: { win: "Left", mac: "←" },
    right: { win: "Right", mac: "→" },
    esc: { win: "Esc", mac: "Esc" },
    escape: { win: "Esc", mac: "Esc" },
    enter: { win: "Enter", mac: "Enter" },
    shift: { win: "Shift", mac: "⇧" },
    backslash: { win: "\\", mac: "\\" },
  }

  const modifierLabels = {
    ctrl: { win: "Ctrl", mac: "⌘" },
    control: { win: "Ctrl", mac: "⌘" },
    cmd: { win: "Ctrl", mac: "⌘" },
    command: { win: "Ctrl", mac: "⌘" },
    alt: { win: "Alt", mac: "⌥" },
    option: { win: "Alt", mac: "⌥" },
    shift: { win: "Shift", mac: "⇧" },
  }

  const normalizeToken = (token) => String(token || "").trim()
  const formatKey = (token, platform) => {
    const normalized = normalizeToken(token)
    const key = normalized.toLowerCase()
    const mapped = keyLabels[key]
    if (mapped) return mapped[platform]
    if (normalized.length === 1) return normalized.toUpperCase()
    return normalized
  }
  const formatCombo = (value, platform) =>
    String(value || "")
      .split("+")
      .map(normalizeToken)
      .filter(Boolean)
      .map((token) => {
        const mapped = modifierLabels[token.toLowerCase()]
        return mapped ? mapped[platform] : formatKey(token, platform)
      })
      .join(platform === "mac" ? "" : "+")

  const windowsLabel = formatCombo(combo, "win")
  const macLabel = sameOnMac ? windowsLabel : mac || formatCombo(combo, "mac")
  const title =
    windowsLabel === macLabel
      ? windowsLabel
      : `Windows/Linux: ${windowsLabel}; Mac: ${macLabel}`

  return (
    <span className="ophel-shortcut" title={title}>
      <code>{windowsLabel}</code>
      {windowsLabel !== macLabel && (
        <>
          <span className="ophel-shortcut-separator"> / </span>
          <code>{macLabel}</code>
        </>
      )}
    </span>
  )
}

export const ShortcutLegend = ({ lang = "en" }) => {
  const isZh = lang === "zh"

  return (
    <div className="ophel-shortcut-legend" role="note">
      <div className="ophel-shortcut-legend-title">
        {isZh ? "跨平台按键说明" : "Cross-platform key mapping"}
      </div>
      <div className="ophel-shortcut-legend-body">
        {isZh ? (
          <>
            文档中的快捷键会同时显示 Windows/Linux 与 Mac 写法：
            <code>Ctrl</code> 对应 <code>Command</code>，
            <code>Alt</code> 对应 <code>Option</code>。唯一例外是提示词发送，
            <code>Ctrl+Enter</code> 在 Mac 上也使用 <code>Ctrl+Enter</code>。
          </>
        ) : (
          <>
            Shortcuts show both Windows/Linux and Mac keys: <code>Ctrl</code> maps
            to <code>Command</code>, and <code>Alt</code> maps to
            <code>Option</code>. Prompt submit is the only exception:
            <code>Ctrl+Enter</code> remains <code>Ctrl+Enter</code> on Mac.
          </>
        )}
      </div>
    </div>
  )
}
