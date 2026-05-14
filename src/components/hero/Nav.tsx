export function Nav() {
  return (
    <nav className="flex items-center justify-between py-5">
      <span className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-primary">
        Vizion Corp AI
      </span>
      <ul className="flex items-center gap-8">
        <li>
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-tertiary cursor-default">
            Captain&apos;s Method
          </span>
        </li>
        <li>
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-tertiary cursor-default">
            How It Works
          </span>
        </li>
        <li>
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-tertiary cursor-default">
            Engagement
          </span>
        </li>
      </ul>
    </nav>
  )
}
