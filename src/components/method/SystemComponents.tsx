export function SystemComponents() {
  return (
    <section className="bg-ground px-12 pt-16 pb-16 max-[720px]:px-6 max-[720px]:pt-12 max-[720px]:pb-12 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <p style={sectionEyebrowStyle}>WHAT GETS BUILT · SIGHT</p>

        <p className="text-base max-[720px]:text-[15px]" style={introStyle}>
          SIGHT is the system. Three components, built in sequence, each doing distinct work.
        </p>

        {/* The X-Ray */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>The X-Ray</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The diagnostic deliverable. A written report that names the leaks we found,
            estimates the dollars, and prioritizes the work. We score what we find against the
            PCORD framework (People, Cash, Operations, Revenue, and Decision-latency) so you
            can see where the bleed is concentrated.
          </p>
        </div>

        {/* The Command Deck */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>The Command Deck</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The dashboard. Built specifically for your business after the X-Ray defines what
            matters. The Command Deck is what you check Monday morning. The leak categories
            under watch, the trends moving, the decisions waiting on you. Yours to keep. We
            host and operate it during the engagement; if you ever want to take it in-house,
            there&rsquo;s a buyout process ready.
          </p>
        </div>

        {/* Watchdog */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>Watchdog</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The AI agent that watches the business when no one else is. Watchdog reads your
            data every day. It looks for patterns we&rsquo;ve trained it on, specialized to
            your industry. When something is off, it raises its hand to a person you choose.
            The handler. The handler decides yes or no. Nothing fires without that approval.
            Watchdog gets sharper every month, because every handler decision becomes training.
          </p>
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
  margin: '0 0 8px',
  letterSpacing: '-0.003em',
}

const componentBlockStyle = {
  marginTop: '32px',
}

const ruleDividerStyle = {
  height: '1px',
  background: 'var(--color-rule-inner)',
  marginBottom: '24px',
}

const componentNameStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  fontSize: '20px',
  letterSpacing: '-0.018em',
  color: 'var(--color-ink-primary)',
  lineHeight: 1.2,
  margin: '0 0 14px',
}

const bodyStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: 0,
  letterSpacing: '-0.003em',
}
