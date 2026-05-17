'use client'

export function CTAs() {
  return (
    <div
      className="mt-8"
      style={{ animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 1.15s both' }}
    >
      <button
        type="button"
        className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-ink-primary px-[24px] py-[14px] rounded-[3px] transition-colors duration-150"
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
        START A CONVERSATION
      </button>
    </div>
  )
}
