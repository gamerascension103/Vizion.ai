import { EngagementSequence } from './EngagementSequence'

export function Engagement() {
  return (
    <section className="bg-ground pt-24 px-12 pb-24 max-[720px]:pt-16 max-[720px]:px-6 max-[720px]:pb-[72px] flex flex-col items-center">

      {/* Eyebrow + Header + Opening prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <p style={eyebrowStyle}>THE ENGAGEMENT</p>

        <h2
          className="text-[52px] max-[720px]:text-[28px]"
          style={headerStyle}
        >
          How an engagement starts.
        </h2>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
          The first move is a conversation. Not a sales pitch. Forty-five minutes, maybe an hour. We learn about your business. You learn about how we work. Both of us decide whether there&rsquo;s a fit. If there is, we talk about scope and pricing. If not, we point you toward what might fit better.
        </p>
      </div>

      {/* Engagement sequence diagram — 1080px breakout */}
      <div style={{ maxWidth: '1080px', width: '100%', marginTop: '56px' }}>
        <EngagementSequence />
      </div>

      {/* Closing prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', marginTop: '56px' }}>
        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          After the conversation, the engagement begins. The X-Ray comes first. We pull your data, run the diagnostic, and walk you through what we found. Every leak. Every confidence level. Every dollar number behind every finding.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: '40px' }}>
          If we haven&rsquo;t surfaced more money than you paid us,{' '}
          <span style={{ color: 'var(--color-ink-secondary-bright)' }}>the X-Ray Guarantee makes it right.</span>{' '}If we have, we move into the build. Command Deck designed around your business. Your first Watchdog trained for your most important issue. Monthly check-ins. The same two voices on the phone every time.
        </p>

        {/* Transition line */}
        <p
          className="text-[11px] max-[720px]:text-[10px]"
          style={transitionLineStyle}
        >
          Two people. Both owners. Both on the phone every time.
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
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: '0 0 24px',
}

const headerStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'var(--color-ink-primary)',
  margin: '0 0 36px',
}

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.62,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
}

const transitionLineStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  letterSpacing: '0.18em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  lineHeight: 1.5,
  maxWidth: '640px',
  margin: '0 auto',
}
