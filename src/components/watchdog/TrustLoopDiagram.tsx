const STATES = [
  { num: '01', label: 'Watchdog proposes', sub: 'The agent surfaces what it\u2019s seen' },
  { num: '02', label: 'Handler reviews', sub: 'A named person approves, modifies, or declines' },
  { num: '03', label: 'Action executes', sub: 'Only the approved action. Only as approved.' },
  { num: '04', label: 'Outcome logs', sub: 'Every action becomes part of the audit trail' },
]

export function TrustLoopDiagram() {
  return (
    <div style={panelStyle}>
      {/* Four states — desktop: row, tablet: 2x2, mobile: column */}
      <div className="flex flex-col gap-6 max-[720px]:flex-col min-[720px]:grid min-[720px]:grid-cols-2 min-[960px]:flex min-[960px]:flex-row min-[960px]:items-start min-[960px]:gap-0">
        {STATES.map((s, i) => (
          <div key={s.num} className="flex min-[960px]:flex-row min-[960px]:items-start min-[960px]:flex-1">
            {/* State block */}
            <div className="flex flex-col items-center text-center flex-1" style={{ padding: '0 8px' }}>
              <span style={numStyle}>{s.num}</span>
              <span style={labelStyle}>{s.label}</span>
              <span style={subStyle}>{s.sub}</span>
            </div>
            {/* Arrow between states — desktop only */}
            {i < STATES.length - 1 && (
              <span className="hidden min-[960px]:flex items-center self-start mt-[28px]" style={arrowStyle}>
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Curved return arrow — SVG, desktop only */}
      <div className="hidden min-[960px]:block" style={{ marginTop: '24px' }}>
        <svg width="100%" height="48" viewBox="0 0 800 48" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          <path
            d="M 760 4 C 760 4, 780 4, 790 24 C 800 44, 780 44, 760 44 L 40 44 C 20 44, 10 44, 10 24 C 10 4, 20 4, 40 4"
            fill="none"
            stroke="var(--color-signal-agent)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
          />
          <polygon
            points="40,0 40,8 32,4"
            fill="var(--color-signal-agent)"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* Methodology summary */}
      <p style={summaryStyle}>Four states &middot; One handler &middot; No autonomous action</p>
    </div>
  )
}

const panelStyle = {
  background: 'var(--color-surface-1)',
  border: '1px solid var(--color-rule-primary)',
  borderRadius: '4px',
  padding: '48px 40px',
  width: '100%',
} as const

const numStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.18em',
  color: 'var(--color-ink-quaternary)',
  fontWeight: 500,
  marginBottom: '8px',
  display: 'block',
} as const

const labelStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontSize: '18px',
  fontWeight: 500,
  color: 'var(--color-ink-primary)',
  lineHeight: 1.2,
  marginBottom: '8px',
  display: 'block',
} as const

const subStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--color-ink-tertiary)',
  lineHeight: 1.5,
  maxWidth: '180px',
  display: 'block',
} as const

const arrowStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '16px',
  color: 'var(--color-ink-quaternary)',
  padding: '0 4px',
  flexShrink: 0,
} as const

const summaryStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '11px',
  letterSpacing: '0.14em',
  color: 'var(--color-ink-tertiary)',
  fontWeight: 400,
  textAlign: 'center',
  marginTop: '32px',
  marginBottom: 0,
  textTransform: 'uppercase',
} as const
