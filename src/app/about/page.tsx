import { Header } from '@/components/header'
import { FounderLetter } from '@/components/about/FounderLetter'
import { JakeBio } from '@/components/about/JakeBio'
import { KyleBio } from '@/components/about/KyleBio'

export const metadata = {
  title: 'About — Vizion Corp AI',
  description: 'Jake Salisbury and Kyle Ames. Backgrounds, not résumés.',
}

export default function About() {
  return (
    <>
      <Header variant="inner" />
      <main className="bg-ground">

        {/* Section 1 — Page eyebrow + title block */}
        <section className="bg-ground px-12 pt-20 pb-10 max-[720px]:px-6 max-[720px]:pt-14 max-[720px]:pb-8 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
            <p style={eyebrowStyle}>WHO WE ARE</p>
            <h1 style={titleStyle} className="text-[40px] max-[720px]:text-[26px]">
              Backgrounds, not résumés.
            </h1>
            <p className="text-base max-[720px]:text-[15px]" style={subStyle}>
              Vizion Corp AI has two owners. Here&rsquo;s who you&rsquo;d be working with.
            </p>
          </div>
        </section>

        {/* Section 2 — Founder letter */}
        <FounderLetter />

        {/* Section 3 — Jake bio */}
        <JakeBio />

        {/* Section 4 — Kyle bio */}
        <KyleBio />

        {/* Section 5 — How we work together */}
        <section className="bg-ground px-12 pt-20 pb-20 max-[720px]:px-6 max-[720px]:pt-14 max-[720px]:pb-14 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
            <p style={eyebrowStyle}>HOW WE WORK TOGETHER</p>
            <p className="text-base max-[720px]:text-[15px]" style={bodyStyle}>
              On every engagement, you talk to both of us. Jake builds the X-Ray, designs your
              Command Deck, and trains your Watchdogs. Kyle handles the strategy conversations,
              monthly check-ins, and the long arc of the relationship. When you call, one of us
              picks up. When we don&rsquo;t know the answer, we tell you and find out.
            </p>
          </div>
        </section>

        {/* Section 6 — CTA strip */}
        <section className="bg-ground px-12 pt-0 pb-24 max-[720px]:px-6 max-[720px]:pb-16 flex flex-col items-center">
          <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
            <p style={eyebrowStyle}>THE REST IS A CONVERSATION</p>
            <p className="text-base max-[720px]:text-[15px]" style={{ ...bodyStyle, marginBottom: '32px' }}>
              You&rsquo;ve read who we are. If something landed, pick up the phone. Or send an
              email. Forty-five minutes, maybe an hour.
            </p>
            <a
              href="mailto:team@vizioncorp.ai"
              className="inline-block font-mono text-[11px] font-medium tracking-[0.14em] uppercase bg-signal-agent text-ground px-[24px] py-[12px] rounded-[3px] hover:bg-[#FFD879] transition-colors duration-150 max-[720px]:w-full max-[720px]:text-center"
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
  margin: 0,
  letterSpacing: '-0.003em',
}
