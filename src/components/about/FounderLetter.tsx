export function FounderLetter() {
  return (
    <section className="bg-ground px-12 pt-14 pb-20 max-[720px]:px-6 max-[720px]:pt-10 max-[720px]:pb-14 flex flex-col items-center">
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

        <p style={eyebrowStyle}>A LETTER FROM JAKE &amp; KYLE</p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          Thanks for taking the time to look at this.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          If you&rsquo;re reading it, you&rsquo;ve already had a look at our work and
          you&rsquo;re considering whether a conversation with us is worth your time. This
          page is here to help you decide, and to give you a little more of who we are
          before we meet.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={paragraphStyle}>
          We&rsquo;ve kept this short, on purpose. We don&rsquo;t want to oversell what we
          do. We&rsquo;d rather tell you the truth about who we are and let you decide.
        </p>

        <p className="text-base max-[720px]:text-[15px]" style={{ ...paragraphStyle, marginBottom: '48px' }}>
          If anything in here makes you want to talk, the contact info is at the end.
        </p>

        {/* Signature blocks — side-by-side desktop, stacked mobile */}
        <div className="flex justify-center gap-12 max-[480px]:flex-col max-[480px]:gap-6 max-[480px]:items-start">
          <div style={{ textAlign: 'left' }}>
            <p style={sigNameStyle}>Jake Salisbury</p>
            <p style={sigTitleStyle}>PRESIDENT | VIZION CORP AI</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={sigNameStyle}>Kyle Ames</p>
            <p style={sigTitleStyle}>VICE PRESIDENT | VIZION CORP AI</p>
          </div>
        </div>

      </div>
    </section>
  )
}

const eyebrowStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '10px',
  letterSpacing: '0.24em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: '0 0 32px',
}

const paragraphStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--color-ink-secondary)',
  margin: '0 0 18px',
  letterSpacing: '-0.003em',
}

const sigNameStyle = {
  fontFamily: 'var(--font-inter-tight)',
  fontWeight: 600,
  fontSize: '17px',
  color: 'var(--color-ink-primary)',
  margin: '0 0 6px',
  letterSpacing: '-0.012em',
  lineHeight: 1.2,
}

const sigTitleStyle = {
  fontFamily: 'var(--font-jetbrains-mono)',
  fontSize: '9px',
  letterSpacing: '0.22em',
  color: 'var(--color-ink-tertiary)',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  margin: 0,
}
