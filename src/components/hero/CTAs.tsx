'use client'

export function CTAs() {
  return (
    <div
      className="flex justify-center max-[720px]:block"
      style={{ animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 1.15s both' }}
    >
      <button
        type="button"
        className="font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-signal-agent px-[24px] py-[12px] rounded-[3px] transition-colors duration-150 max-[720px]:w-full"
        style={{ border: '1px solid var(--color-signal-agent)' }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.background = 'rgba(242, 179, 61, 0.08)'
          el.style.color = '#FFD879'
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
