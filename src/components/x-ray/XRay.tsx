import { PCORDDiagram } from './PCORDDiagram'
import { SampleFinding } from './SampleFinding'
import { XRayGuarantee } from '@/components/shared/XRayGuarantee'

export function XRay() {
  return (
    <section className="bg-ground pt-24 px-12 pb-24 max-[720px]:pt-16 max-[720px]:px-5 max-[720px]:pb-16 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>
        {/* Eyebrow */}
        <p style={eyebrowStyle}>THE PRODUCT · ONE</p>

        {/* Header */}
        <h2
          className="text-[52px] max-[720px]:text-[36px]"
          style={headerStyle}
        >
          The X-Ray.
        </h2>

        {/* Opening prose */}
        <div style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            We read your books and find where your business is leaking money.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            The X-Ray is a diagnostic. It&rsquo;s the first thing we do, and it sets up everything else. We use industry data and your own numbers to put a dollar amount on each leak. You get a report showing exactly what&rsquo;s leaking, where it is, and how much it&rsquo;s costing you over a year.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            <span style={{ color: 'var(--color-ink-secondary-bright)' }}>Some leaks you&rsquo;ve felt. Some you haven&rsquo;t.</span>{' '}The X-Ray finds both.
          </p>
        </div>

        <div style={{ height: '48px' }} />

        {/* PCORD Diagram */}
        <PCORDDiagram />

        <div style={{ height: '48px' }} />

        {/* How it works prose */}
        <div style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            We start with 95 risk variables that cover the ways businesses lose money. PCORD sorts them into five areas. Then we use industry-specific data and your own books to find the variables that matter most for your business &mdash; the leaks that cost the most, the ones most likely hitting you, and the ones you should fix first.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            Every threshold we use comes from primary research and industry benchmarks. We tell you our confidence level on every finding.
          </p>
        </div>

        <div style={{ height: '48px' }} />

        {/* Sample Finding artifact */}
        <SampleFinding />

        <div style={{ height: '36px' }} />

        {/* Closing prose */}
        <div style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            We evaluate your business. We assess your risks. You get a written report with our findings, our confidence levels, the dollar math behind each one, and our recommended order of operations.
          </p>
          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            <span style={{ color: 'var(--color-ink-secondary-bright)' }}>Then we talk.</span>{' '}About what to fix first, and how.
          </p>
        </div>

        {/* X-Ray Guarantee — mt-6 on the component provides the 24px top spacing */}
        <XRayGuarantee />

        <p
          className="text-[11px] max-[720px]:text-[10px]"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            letterSpacing: '0.18em',
            color: 'var(--color-ink-tertiary)',
            textTransform: 'uppercase',
            fontWeight: 500,
            lineHeight: 1.5,
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: 0,
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Once you&rsquo;ve seen the report, you&rsquo;ll know what to fix and in what order.<br />
          The Command Deck makes those numbers live.
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
  textAlign: 'center',
} as const

const headerStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'var(--color-ink-primary)',
  margin: '0 0 36px',
  textAlign: 'center',
} as const

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.62,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
  textAlign: 'center',
} as const
