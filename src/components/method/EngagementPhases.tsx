const phases = [
  {
    eyebrow: 'PHASE 01 · DISCOVERY',
    body: "We learn the business. The books, the systems, the way decisions get made today, the goals you\u2019re trying to hold. Discovery calibrates what your X-Ray needs to look for and what your Watchdog will be trained to watch. It\u2019s also where we tell you whether we think we can help.",
  },
  {
    eyebrow: 'PHASE 02 · THE X-RAY',
    body: "The diagnostic. We layer your data against the categories we\u2019ve learned to watch in businesses like yours, and we surface the leaks worth fixing. You get a written X-Ray with the findings, the dollar estimates, and the recommended scope of work. Backed by the X-Ray Guarantee.",
  },
  {
    eyebrow: 'PHASE 03 · THE COMMAND DECK',
    body: "The application you log into. We build it for your business after the X-Ray defines what matters. Four views (Dashboard, Goal Builder, Audit, and Settings) give you the leaks under watch, the goals you\u2019re holding, the decisions waiting, and the controls to tune it. The Command Deck is yours.",
  },
  {
    eyebrow: 'PHASE 04 · WATCHDOG',
    body: "The watch goes on. We deploy the Watchdog specialized to your industry. It reads your data every day, watches the leaks the X-Ray surfaced and the goals you set in the Command Deck, and raises its hand when something needs your decision. It gets sharper every month it runs.",
  },
]

export function EngagementPhases() {
  return (
    <section className="bg-ground px-12 pt-16 pb-16 max-[720px]:px-6 max-[720px]:pt-12 max-[720px]:pb-12 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <p style={sectionEyebrowStyle}>THE ENGAGEMENT · FOUR PHASES</p>

        <p className="text-base max-[720px]:text-[15px]" style={introStyle}>
          Every engagement moves through four phases. The pace varies by business. The shape
          doesn&rsquo;t.
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
