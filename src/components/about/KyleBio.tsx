export function KyleBio() {
  return (
    <section className="bg-ground px-12 pt-4 pb-20 max-[720px]:px-6 max-[720px]:pt-2 max-[720px]:pb-14 flex flex-col items-center">
      <div style={{ maxWidth: '760px', width: '100%' }}>

        <div className="border border-rule-primary bg-surface-2 p-10 max-[720px]:p-6">

          <h2 style={nameStyle}>Kyle Ames</h2>
          <p style={titleTagStyle}>VICE PRESIDENT | STRATEGY, ADVISEMENT, RELATIONSHIPS</p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            I&rsquo;m an 18-year Air Force veteran. I started in 2008 as enlisted Security
            Forces, cross-trained into Financial Management, earned my commission, and held roles
            from accountant to budget analyst to Comptroller. That journey gave me exposure
            across finance, logistics, contracting, communications, cybersecurity, infrastructure,
            and operations. More importantly, it taught me how every department impacts the
            mission, the people, and the bottom line.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            As a Comptroller, I became the person leaders relied on to translate complexity into
            clarity. Not just reporting numbers. Helping decision-makers understand what those
            numbers meant, why they mattered, and where the organization was headed. I learned
            that most organizations don&rsquo;t suffer from a lack of data. They suffer from
            disconnected systems, incomplete context, and the inability to turn information into
            confident decisions.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            That gap is where I went deep. I immersed myself in Power BI, data cleansing,
            process improvement, and operational analytics. Not because it was trendy. Because I
            saw how much friction existed between leaders and the information they needed. When AI
            arrived, what most people saw as a chatbot, I saw as an operational force multiplier.
            A properly trained AI system can review data, identify trends, assist with
            communication, reduce repetitive workload, and help leaders make faster, more informed
            decisions.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            I recently attended an invite-only CFO and AI conference alongside leaders from major
            corporations and private equity firms. The same problems came up over and over:
            disconnected systems, process inefficiencies, uncertainty around AI adoption, fear of
            falling behind. Some had automated pieces of accounting and reporting. Almost none had
            figured out how to bridge the gap between raw technology and practical business
            application. If the biggest companies in the country are still wrestling with this,
            you&rsquo;re not behind. The work is hard at every scale.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
            When Jake and I started collaborating, we approached problems from complementary
            angles. He builds systems from the engineering and behavioral side. I interpret
            organizations through operational, financial, and executive lenses. Together we found
            a shared mission: helping businesses adopt AI in a way that feels practical and
            useful, not overwhelming.
          </p>

          <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: 0 }}>
            People still matter most. Every business I&rsquo;ve ever helped came down to people
            making decisions with the right information at the right time. Technology that pulls
            the owner out of the loop, or buries them under more dashboards they don&rsquo;t have
            time to read, doesn&rsquo;t serve them. We deploy AI that the owner controls, that
            reports to a person they trust, and that gets sharper the longer it works alongside
            their team. That&rsquo;s the work. That&rsquo;s how we build, communicate, and treat
            every business that decides to work with us.
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
