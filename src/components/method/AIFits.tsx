export function AIFits() {
  return (
    <section className="bg-ground px-12 pt-20 pb-16 max-[720px]:px-6 max-[720px]:pt-14 max-[720px]:pb-12 flex flex-col items-center">
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

        <p style={sectionEyebrowStyle}>WHERE AI FITS, AND WHERE IT DOESN&apos;T</p>
        <h2 style={sectionTitleStyle} className="text-[32px] max-[720px]:text-[24px]">
          What the AI does. What it doesn&apos;t.
        </h2>

      </div>

      <div style={{ maxWidth: '560px', width: '100%' }}>

        {/* Subsection 1 */}
        <div style={subsectionStyle}>
          <h3 style={subsectionHeadStyle}>What AI does</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            AI does the watching, sorting, and pattern recognition that no human team could
            keep up with continuously. Your Watchdog reads your data every day. It looks for
            the patterns we&rsquo;ve trained it on, specific to your business and your
            industry. When something is off (a leak surfacing, a trajectory drifting), it
            raises its hand.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            AI also acts on what it sees. Each Watchdog is trained with specific action
            sequences for your industry. Pushing the right report to the right department.
            Flagging a vendor for review. Pulling a status check on an aging invoice. Drafting
            the variance report when a goal threshold is crossed. Routine work that needs to
            happen consistently. Every action is approved by your handler before it runs.
            Nothing fires on its own.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            AI watches. AI surfaces. AI acts, with handler approval. AI explains what it found.
          </p>
        </div>

        {/* Subsection 2 */}
        <div style={subsectionStyle}>
          <h3 style={subsectionHeadStyle}>What AI doesn&apos;t do</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            AI doesn&rsquo;t decide. Every Watchdog has a handler at your business. Could be
            you. Could be someone on your team. When a Watchdog finds something or proposes an
            action, the handler says yes or no. No action ever happens without that approval.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            The architecture is built this way on purpose. Watchdogs can&rsquo;t act without
            a handler&rsquo;s approval.
          </p>
        </div>

        {/* Subsection 3 */}
        <div style={subsectionStyle}>
          <h3 style={subsectionHeadStyle}>Why we built it this way</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            We&rsquo;ve watched enough businesses get burned by automation that doesn&rsquo;t
            ask before it acts. We don&rsquo;t think AI should replace your judgment. We think
            it should give you more of it. More visibility into what&rsquo;s happening. More
            time to think about what matters. More confidence in the numbers you&rsquo;re
            already deciding on.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            You stay in charge.
          </p>
        </div>

        {/* Subsection 4 */}
        <div style={subsectionStyle}>
          <h3 style={subsectionHeadStyle}>What you should still be skeptical about</h3>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            Be skeptical of any vendor who tells you their AI is perfectly accurate. Us
            included. Ours isn&rsquo;t. Yours won&rsquo;t be either. A well-trained Watchdog
            catches most of what matters. It misses some things. It surfaces some things that
            turn out not to matter.
          </p>

          {/* Load-bearing line */}
          <p style={trustLineStyle} className="text-[17px] max-[720px]:text-[15px]">
            We don&rsquo;t ask you to trust the AI. We ask you to trust the loop.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            A Watchdog finding never reaches you raw. The system runs internal review first.
            Each Watchdog evaluates its own work against confidence thresholds, prior patterns,
            and context it has built up over time. When something doesn&rsquo;t pass that
            internal check, the Watchdog holds the finding rather than push it through.
            We&rsquo;ve built it to second-guess itself by design.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
            What gets through internal review goes to your handler. The handler decides. Yes,
            no, or yes-with-context. The decision becomes training. The Watchdog learns not
            just what was approved, but why, including the context the handler added. The loop
            catches what any single layer would miss.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={{ ...bodyStyle, marginBottom: 0 }}>
            The longer a Watchdog has been with you, the better it gets. Every handler
            decision is a piece of training. Every miss that surfaces in reality becomes a
            pattern the Watchdog watches for next time. Six months in, a Watchdog knows your
            business. Year two, it&rsquo;s sharper than any off-the-shelf tool, because
            it&rsquo;s been trained on your business, by your people.
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

const sectionTitleStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  letterSpacing: '-0.028em',
  lineHeight: 1.1,
  color: 'var(--color-ink-primary)',
  margin: '0 0 48px',
}

const subsectionStyle = {
  marginBottom: '40px',
}

const subsectionHeadStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  fontSize: '18px',
  letterSpacing: '-0.016em',
  color: 'var(--color-ink-primary)',
  lineHeight: 1.3,
  margin: '0 0 16px',
}

const bodyStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 14px',
  letterSpacing: '-0.003em',
}

const trustLineStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 500,
  lineHeight: 1.5,
  color: 'var(--color-ink-secondary-bright)',
  margin: '20px 0 20px',
  letterSpacing: '-0.008em',
}
