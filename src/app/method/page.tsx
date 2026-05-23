import { Header } from '@/components/header'
import { EngagementPhases } from '@/components/method/EngagementPhases'
import { SystemComponents } from '@/components/method/SystemComponents'
import { AIFits } from '@/components/method/AIFits'

export const metadata = {
  title: 'How We Work · Vizion Corp AI',
  description: 'SIGHT is the system. The X-Ray finds what’s leaking. The Command Deck shows what to watch. Watchdog watches it, and helps you hold the line you set.',
}

export default function Method() {
  return (
    <>
      <Header variant="inner" />
      <main className="bg-ground">

        {/* Section 1 — Page eyebrow + title block */}
        <section className="bg-ground px-12 pt-20 pb-10 max-[720px]:px-6 max-[720px]:pt-14 max-[720px]:pb-8 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
            <p style={eyebrowStyle}>HOW WE WORK</p>
            <h1 style={titleStyle} className="text-[40px] max-[720px]:text-[26px]">
              What we built, and how it runs.
            </h1>
            <p className="text-base max-[720px]:text-[15px]" style={subStyle}>
              SIGHT is the system. The X-Ray finds what&rsquo;s leaking. The Command Deck
              shows what to watch. Watchdog watches it, and helps you hold the line you set.
            </p>
          </div>
        </section>

        {/* Section 2 — Opening framing */}
        <section className="bg-ground px-12 pt-4 pb-16 max-[720px]:px-6 max-[720px]:pt-2 max-[720px]:pb-12 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%' }}>
            <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
              Most owners we talk to don&rsquo;t need more software. They need a partner who
              knows what to look for, builds the visibility, and keeps watch with them.
            </p>
            <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
              That&rsquo;s the engagement. Find what&rsquo;s leaking now. Build the dashboard
              that surfaces it. Train the Watchdog that watches the leaks and the goals from
              here on out.
            </p>
            <p className="text-base max-[720px]:text-[15px]" style={{ ...bodyStyle, marginBottom: 0 }}>
              The system gets sharper the longer it runs.
            </p>
          </div>
        </section>

        {/* Section 3 — Engagement phases */}
        <EngagementPhases />

        {/* Section 4 — System components */}
        <SystemComponents />

        {/* Section 5 — Watchdog breeds */}
        <section className="bg-ground px-12 pt-4 pb-16 max-[720px]:px-6 max-[720px]:pt-2 max-[720px]:pb-12 flex flex-col items-center">
          <div style={{ maxWidth: '760px', width: '100%' }}>
            <p style={eyebrowStyle}>WATCHDOG BREEDS</p>
            <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
              Watchdog comes in industry breeds. Each one trained on the patterns that matter
              in its industry, the variables worth watching, the language operators in that
              space already use. The breeds we currently support:
            </p>
            <p className="text-base max-[720px]:text-[15px]" style={industryListStyle}>
              Construction. Distribution. Manufacturing. Professional services. Healthcare.
              Hospitality. Logistics. Retail. Real estate. SaaS and software. Financial
              services. Agriculture. Veterinary.
            </p>
            <p className="text-base max-[720px]:text-[15px]" style={{ ...bodyStyle, marginBottom: 0 }}>
              If your industry isn&rsquo;t on the list, we&rsquo;ll tell you. If we don&rsquo;t
              have the breed ready, we won&rsquo;t pretend we do.
            </p>
          </div>
        </section>

        {/* Section 6 — Where AI fits */}
        <AIFits />

        {/* Section 7 — CTA strip */}
        <section className="bg-ground px-12 pt-4 pb-24 max-[720px]:px-6 max-[720px]:pb-16 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
            <p style={eyebrowStyle}>THE REST IS A CONVERSATION</p>
            <p className="text-base max-[720px]:text-[15px]" style={{ ...bodyStyle, marginBottom: '32px', textAlign: 'center' }}>
              The method only works if it fits your business. If something here landed, the
              next step is a conversation. Forty-five minutes, maybe an hour.
            </p>
            <a
              href="mailto:team@vizioncorp.ai"
              className="inline-block font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-signal-agent px-[24px] py-[12px] border border-signal-agent rounded-[3px] hover:bg-[rgba(242,179,61,0.08)] hover:text-[#FFD879] transition-colors duration-150 max-[720px]:w-full max-[720px]:text-center"
            >
              START A CONVERSATION
            </a>
          </div>
        </section>

      </main>
    </>
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

const titleStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  letterSpacing: '-0.028em',
  lineHeight: 1.05,
  color: 'var(--color-ink-primary)',
  margin: '0 0 20px',
}

const subStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.55,
  color: 'var(--color-ink-secondary)',
  margin: 0,
  letterSpacing: '-0.003em',
}

const bodyStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
}

const industryListStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-primary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
}
