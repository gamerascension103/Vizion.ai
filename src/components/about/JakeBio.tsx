export function JakeBio() {
  return (
    <section className="bg-ground px-12 pt-16 pb-4 max-[720px]:px-6 max-[720px]:pt-12 max-[720px]:pb-2 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <div className="border border-rule-primary bg-surface-2 p-10 max-[720px]:p-6">

          <h2 style={nameStyle}>Jake Salisbury</h2>
          <p style={titleTagStyle}>PRESIDENT | ENGINEERING, BUILD, THE X-RAY</p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            I&rsquo;m a small business owner. I know what it feels like to run something you
            built yourself. The freedom. The responsibility. The quiet fear that one wrong
            sequence of events could undo years of work. I manage that fear with data, and
            that&rsquo;s where my passion for helping other owners make better decisions comes
            from. Pain.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            My primary business is{' '}
            <strong style={{ fontWeight: 600 }}>The Strain Coaching</strong>, a personal
            development and training practice I&rsquo;ve run for five years. I work with people
            on vitality, mental health, and career and legacy. Three domains that together govern
            whether a person operates with capacity, clarity, and focus. The heart of the work is
            a system. Behavior change through new, intentional, repeatable structure.
            Restructuring how someone thinks and behaves until the new way is the natural way.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            One of my clients is Mike Pate, who runs{' '}
            <strong style={{ fontWeight: 600 }}>DNP Americas</strong>, a $15M hydraulics
            distribution business. He talked often about wanting to see his metrics daily and how
            much friction there was in pulling the reports. One day I asked him what he&rsquo;d
            want to see if someone built it. He told me. I asked what systems he used. Then I
            went home and built the first version of his dashboard in a few days, pulling from
            mock data. When I showed him, he went ballistic. In a good way. He&rsquo;d been
            trying to solve that exact problem for years. He asked if I could make it work with
            his real data. I told him I&rsquo;d figure it out. Then I did.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            That&rsquo;s where Vizion was born. The same principles that drive human behavior
            change. Clarity of identity. Structured systems. Intentional engagement. Those turn
            out to be exactly what makes AI behave consistently and usefully. Our Watchdogs
            aren&rsquo;t generic agents. They&rsquo;re built with trained identity, value
            scaffolding, and operating systems that mirror how I work with people. That&rsquo;s
            why I&rsquo;m here. That&rsquo;s why we built Vizion for owners like you.
          </p>

        </div>
      </div>
    </section>
  )
}

const nameStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  fontSize: '32px',
  letterSpacing: '-0.028em',
  color: 'var(--color-ink-primary)',
  lineHeight: 1.1,
  margin: '0 0 12px',
}

const titleTagStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.22em',
  color: 'var(--color-signal-agent)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: '0 0 28px',
}

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
}
