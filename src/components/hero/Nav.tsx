import { Insignia } from '@/components/brand'

export function Nav() {
  return (
    <nav className="flex items-center justify-between py-5">
      <div className="flex items-center gap-3">
        <Insignia size={36} variant="simplified" />
        <span className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-primary">
          VIZION CORP
        </span>
      </div>
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
