import { Dashboard } from '@/components/hero/Dashboard'

export function CommandDeck() {
  return (
    <section
      className="bg-ground pt-24 px-12 pb-24 max-[720px]:pt-16 max-[720px]:px-7 max-[720px]:pb-16 flex flex-col items-center"
    >
      {/* Eyebrow + Header + Opening prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <p style={eyebrowStyle}>THE PRODUCT · TWO</p>

        <h2
          className="text-[52px] max-[720px]:text-[36px]"
          style={headerStyle}
        >
          The Command Deck.
        </h2>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
          Your dashboard. Built from the ground up for your business. Designed around the screens you
          check in the morning and the numbers that belong on the wall. Not a template with your logo on it.
        </p>
      </div>

      {/* Dashboard — 880px breakout, first appearance on page post-Brief 05.5 */}
      <div style={{ maxWidth: '880px', width: '100%', marginTop: '56px' }}>
        <Dashboard />
      </div>

      {/* Closing prose + transition line — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', marginTop: '56px' }}>
        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: '40px' }}>
          <span style={{ color: 'var(--color-ink-secondary-bright)' }}>You log in.</span>{' '}You see how
          things are going. No spreadsheets. No digging.
        </p>

        <p
          className="text-[11px] max-[720px]:text-[10px]"
          style={transitionLineStyle}
        >
          Watching the deck for what needs your attention &mdash; that&rsquo;s Watchdog&rsquo;s job.
        </p>
      </div>
    </section>
  )
}

const eyebrowStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.24em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase',
  fontWeight: 500,
  margin: '0 0 24px',
} as const

const headerStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'var(--color-ink-primary)',
  margin: '0 0 36px',
} as const

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.62,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
} as const

const transitionLineStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  letterSpacing: '0.18em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase',
  fontWeight: 500,
  lineHeight: 1.5,
  margin: 0,
} as const
