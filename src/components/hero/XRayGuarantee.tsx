export function XRayGuarantee() {
  return (
    <div
      className="mt-6 border border-rule-primary bg-surface-1"
      style={{ padding: '22px 26px' }}
    >
      <div
        className="text-signal-agent"
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        THE X-RAY GUARANTEE
      </div>
      <p
        className="text-ink-primary"
        style={{
          fontFamily: 'var(--font-inter-tight)',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.55,
          maxWidth: '640px',
          margin: 0,
        }}
      >
        If{' '}
        <span className="text-signal-agent">The X-Ray</span>{' '}
        doesn&apos;t surface money leaks worth significantly more than what you&apos;ve paid us for it, we&apos;ll walk you through why and refund the difference.
      </p>
    </div>
  )
}
