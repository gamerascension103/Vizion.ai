const phases = [
  {
    eyebrow: 'PHASE 01 · DISCOVERY',
    body: "We learn the business. The conversation, the books, the systems, the way decisions get made today. Discovery is where we calibrate what your X-Ray needs to look for. It\u2019s also where we tell you, honestly, whether we think we can help.",
  },
  {
    eyebrow: 'PHASE 02 · THE X-RAY',
    body: "The diagnostic. We layer your data against the categories we\u2019ve learned to watch in businesses like yours, and we surface the leaks worth fixing. You get a written X-Ray with the findings, the dollar estimates, and the recommended scope of work. Backed by the X-Ray Guarantee.",
  },
  {
    eyebrow: 'PHASE 03 · THE COMMAND DECK',
    body: "The dashboard. We build the visibility layer that turns the X-Ray\u2019s findings into something you can watch week to week. The Command Deck is yours. Your data, your views, your reports. Tuned to the decisions you actually make.",
  },
  {
    eyebrow: 'PHASE 04 · WATCHDOG',
    body: "The watch goes on. Once the X-Ray is delivered and the Command Deck is live, we deploy the Watchdog specialized to your industry. It studies your business, raises its hand when something is off, and gets sharper every month it runs.",
  },
]

export function EngagementPhases() {
  return (
    <section className="bg-ground px-12 pt-16 pb-16 max-[720px]:px-6 max-[720px]:pt-12 max-[720px]:pb-12 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <p style={sectionEyebrowStyle}>THE ENGAGEMENT · FOUR PHASES</p>

        <p className="text-base max-[720px]:text-[15px]" style={introStyle}>
          Every engagement moves through the same four phases. The pace varies by business.
          The shape doesn&rsquo;t.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {phases.map((phase) => (
            <div key={phase.eyebrow} className="border border-rule-primary bg-surface-2 p-10 max-[720px]:p-6">
              <p style={phaseEyebrowStyle}>{phase.eyebrow}</p>
              <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
                {phase.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

const sectionEyebrowStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.24em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: '0 0 20px',
}

const introStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.6,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 28px',
  letterSpacing: '-0.003em',
}

const phaseEyebrowStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.22em',
  color: 'var(--color-signal-agent)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: '0 0 16px',
}

const bodyStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: 0,
  letterSpacing: '-0.003em',
}
