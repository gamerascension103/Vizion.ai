'use client'

export function CTAs() {
  return (
    <div
      className="mt-8 flex flex-wrap items-center gap-3"
      style={{ animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 1.15s both' }}
    >
      <button
        type="button"
        className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-primary px-[22px] py-[13px] rounded-[3px] transition-colors duration-150"
        style={{ border: '0.5px solid var(--color-ink-primary)' }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.background = 'var(--color-ink-primary)'
          el.style.color = 'var(--color-ground)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.background = ''
          el.style.color = ''
        }}
      >
        Request Briefing
      </button>

      <button
        type="button"
        className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-tertiary px-[22px] py-[13px] rounded-[3px] transition-colors duration-150"
        style={{ border: '0.5px solid var(--color-rule-primary)' }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = 'var(--color-ink-primary)'
          el.style.color = 'var(--color-ink-primary)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = ''
          el.style.color = ''
        }}
      >
        See What We Find
      </button>
    </div>
  )
}
