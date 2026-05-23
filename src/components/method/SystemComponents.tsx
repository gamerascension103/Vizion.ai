export function SystemComponents() {
  return (
    <section className="bg-ground px-12 pt-16 pb-16 max-[720px]:px-6 max-[720px]:pt-12 max-[720px]:pb-12 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <p style={sectionEyebrowStyle}>WHAT GETS BUILT · SIGHT</p>

        <p className="text-base max-[720px]:text-[15px]" style={introStyle}>
          SIGHT is the system. Three components, built in sequence. Each does distinct work.
        </p>

        {/* The X-Ray */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>The X-Ray</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The diagnostic deliverable. A written report that names the leaks we found,
            estimates the dollars, and prioritizes the work. We score what we find against the
            PCORD framework (People, Cash, Operations, Revenue, and Decision-latency) so you
            can see where the bleed concentrates.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The X-Ray is the artifact you keep, whether or not the engagement continues.
          </p>
        </div>

        {/* The Command Deck */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>The Command Deck</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The application. Built specifically for your business after the X-Ray defines what
            matters. Four views.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            <span style={viewLabelStyle}>Dashboard.</span> The view you check Monday morning.
            Leak categories under watch, trends moving, decisions waiting on you.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            <span style={viewLabelStyle}>Goal Builder.</span> Where you set what &ldquo;on
            trajectory&rdquo; means for the business. Revenue targets. Margin floors. Cash
            positions. Operating ranges. Whatever you&rsquo;re holding the line on.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            <span style={viewLabelStyle}>Audit.</span> The trail behind every Watchdog finding
            and every decision the handler made. What was surfaced, what was approved, what
            context the handler added, what the system learned from it.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            <span style={viewLabelStyle}>Settings.</span> The controls. Who the handler is.
            What thresholds tune. What changes when the business changes.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The Command Deck is yours. We host and operate it during the engagement. If you
            ever want to take it in-house, there&rsquo;s a buyout process ready.
          </p>
        </div>

        {/* Watchdog */}
        <div style={componentBlockStyle}>
          <div style={ruleDividerStyle} />
          <h3 style={componentNameStyle}>Watchdog</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The watch. Watchdog reads your data every day. It does two kinds of work.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            It watches the leaks. The categories the X-Ray surfaced, plus the patterns
            we&rsquo;ve trained it on for your industry. When something is off, it raises
            its hand.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            It watches the goals. The trajectory thresholds you set in the Goal Builder. When
            the business drifts off the line you set, Watchdog catches it before the drift
            compounds.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            Both kinds of work route the same way. A finding never reaches you raw. The system
            runs internal review first. What passes review goes to the handler. A person you
            choose. The handler decides yes, no, or yes-with-context. The decision becomes
            training.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            Nothing fires without that approval. The architecture won&rsquo;t let it.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            Watchdog gets sharper every month, because every handler decision is a piece of
            training.
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
  margin: '0 0 10px',
  letterSpacing: '-0.003em',
}

const viewLabelStyle = {
  fontWeight: 600,
  color: 'var(--color-ink-primary)',
}
