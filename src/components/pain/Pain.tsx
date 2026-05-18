export function Pain() {
  return (
    <section
      className="bg-ground text-ink-primary pt-[80px] px-12 pb-24 max-[720px]:pt-14 max-[720px]:px-7 max-[720px]:pb-[72px] flex flex-col items-center"
    >
      <div style={{ maxWidth: '760px', width: '100%' }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '10px',
            letterSpacing: '0.24em',
            color: 'var(--color-ink-tertiary)',
            textTransform: 'uppercase',
            fontWeight: 500,
            margin: '0 0 24px',
            textAlign: 'center',
          }}
        >
          The problem
        </p>

        {/* Header */}
        <h2
          className="text-[38px] max-[720px]:text-[28px]"
          style={{
            fontFamily: 'var(--font-inter-tight)',
            fontWeight: 600,
            letterSpacing: '-0.028em',
            lineHeight: 1.08,
            color: 'var(--color-ink-primary)',
            margin: '0 0 36px',
            textAlign: 'center',
          }}
        >
          You can feel it. You can&rsquo;t see it.
        </h2>

        {/* Body block */}
        <div style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            You opened QuickBooks this morning. Revenue is down. Not catastrophically &mdash; eight percent, maybe twelve. Enough to notice. Not enough to explain.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            You scrolled the P&amp;L. Nothing jumped out. You checked accounts receivable. A handful of aging invoices, but nothing you didn&rsquo;t already know about. You looked at expenses. Same vendors, same line items, roughly the same numbers.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            <span style={{ color: '#C2BBA8' }}>But something is off.</span> You can feel it. You just can&rsquo;t point to it.
          </p>

          <p style={hingeStyle}>This is the gap.</p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            Your bookkeeper cleaned the books last week. Your CPA filed the taxes last quarter. Both of them did their jobs. Neither of their jobs is to tell you where your business is bleeding money right now.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            Bookkeeping makes the numbers accurate. Tax filing makes the numbers legal. Neither one surfaces the software you forgot you were paying for. Neither one flags the customer who&rsquo;s quietly thirty days past due, then sixty, then ninety. Neither one tells you that your top vendor raised prices four percent in March and nobody updated the budget.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            The leaks are in the gaps between what your bookkeeper handles and what your CPA handles.{' '}
            <span style={{ color: '#C2BBA8' }}>That&rsquo;s where the money goes. That&rsquo;s where it stays gone.</span>
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            You&rsquo;re not missing it because you&rsquo;re not paying attention.{' '}
            <span style={{ color: 'var(--color-signal-agent)' }}>You&rsquo;re missing it because nobody is looking for it.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.62,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
  textAlign: 'center',
} as const

const hingeStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontSize: '17px',
  fontWeight: 500,
  lineHeight: 1.55,
  color: 'var(--color-ink-primary)',
  margin: '28px 0 28px',
  letterSpacing: '-0.01em',
  textAlign: 'center',
} as const
