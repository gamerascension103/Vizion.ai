import { TrustLoopDiagram } from './TrustLoopDiagram'

export function Watchdog() {
  return (
    <section className="bg-ground pt-24 px-12 pb-24 max-[720px]:pt-16 max-[720px]:px-6 max-[720px]:pb-[72px] flex flex-col items-center">

      {/* Eyebrow + Header + Opening prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <p style={eyebrowStyle}>THE PRODUCT &middot; THREE</p>

        <h2
          className="text-[52px] max-[720px]:text-[28px]"
          style={headerStyle}
        >
          Watchdog.
        </h2>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          Watchdog is the part that watches. It runs in the background, watching your books, watching The Command Deck, looking for the patterns we&rsquo;ve trained it on.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
          When something looks off, Watchdog doesn&rsquo;t fix it. It proposes. Your handler reviews what Watchdog wants to do. Could be you. Could be someone on your team. Approves it, modifies it, or declines.
        </p>
      </div>

      {/* Trust loop diagram — 1080px breakout */}
      <div style={{ maxWidth: '1080px', width: '100%', marginTop: '56px' }}>
        <TrustLoopDiagram />
      </div>

      {/* Doctrine prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', marginTop: '56px' }}>
        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          <span style={{ color: 'var(--color-ink-secondary-bright)' }}>We don&rsquo;t ask you to trust the AI. We ask you to trust the loop.</span>
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          The loop is the architecture. Watchdog can&rsquo;t act without a handler&rsquo;s approval. That&rsquo;s not a feature we added. It&rsquo;s how the system is built. There&rsquo;s no &ldquo;auto-approve mode&rdquo; you can flip on later. There&rsquo;s no override. Every action goes through a person who can say no.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
          This is the part most agent companies leave out. We made it the whole product.
        </p>
      </div>

      {/* Learning-over-time prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', marginTop: '56px' }}>
        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          Every Watchdog starts with industry knowledge. Before it sees your books, it&rsquo;s already calibrated against the patterns common to your industry. The leaks specific to wholesale distribution, or manufacturing, or services, or whatever you do. The starting point isn&rsquo;t generic.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          Then it learns your business. Your seasonal patterns. The customers who pay on time and the ones who don&rsquo;t. Your inventory cycles. The patterns your handler approves and the patterns your handler rejects. When Watchdog notices a pattern in how you respond, it asks. The handler decides what it learns.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          <span style={{ color: 'var(--color-ink-secondary-bright)' }}>Your Watchdog&rsquo;s knowledge of your business is yours.</span> It lives in your environment. It never trains anyone else&rsquo;s Watchdog. Every learning is logged. Every learning is reviewable.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
          A Watchdog that&rsquo;s been with you six months knows your business better than one that started yesterday. Same patterns. Same priorities. Same handler. It gets sharper.
        </p>
      </div>

      {/* Closing prose — 560px column */}
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', marginTop: '56px' }}>
        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          The industry intelligence improves across our client base. Your Watchdog gets the benefit of that. On every update. With your approval. The business intelligence stays yours. It doesn&rsquo;t leave your environment. It doesn&rsquo;t cross-pollinate.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: '40px' }}>
          That&rsquo;s the deal.
        </p>

        {/* Transition line */}
        <p
          className="text-[11px] max-[720px]:text-[10px]"
          style={transitionLineStyle}
        >
          Watchdog runs the loop. The handler makes the calls. The X-Ray Guarantee stands behind it all.
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
