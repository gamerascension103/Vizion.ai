export function SampleFinding() {
  return (
    <div
      className="bg-surface-1"
      style={{ border: '0.5px solid #22272F', maxWidth: '760px' }}
    >
      {/* Top toolbar */}
      <div
        className="bg-surface-2 flex items-center justify-between"
        style={{ height: '40px', padding: '10px 14px', borderBottom: '0.5px solid #1A1E25' }}
      >
        <span
          className="text-signal-agent"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
          }}
        >
          THE X-RAY
        </span>
        <span
          className="text-ink-secondary max-[719px]:hidden"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
          }}
        >
          ACME DISTRIBUTION · 2026-Q1-Q3
        </span>
        <span
          className="bg-surface-1 text-ink-quaternary uppercase"
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '9px',
            fontWeight: 400,
            letterSpacing: '0.2em',
            border: '0.5px solid #1A1E25',
            padding: '3px 8px',
          }}
        >
          SAMPLE
        </span>
      </div>

      {/* Finding 1 */}
      <div
        className="flex gap-7 px-7 py-6 max-[719px]:px-5 max-[719px]:py-[18px]"
        style={{ borderBottom: '0.5px solid #1A1E25' }}
      >
        <span
          className="text-ink-quaternary tabular-nums shrink-0 w-10 pt-0.5"
          style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '20px', fontWeight: 400 }}
        >
          01
        </span>
        <div className="flex flex-1 justify-between gap-7 max-[719px]:flex-col max-[719px]:gap-3">
          <div className="flex-1">
            <p
              className="text-ink-primary text-[18px] max-[719px]:text-[16px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 500,
                letterSpacing: 0,
                margin: 0,
              }}
            >
              AR aging beyond 90 days
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: '8px' }}>
              <span
                className="text-signal-agent"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  border: '0.5px solid rgba(242, 179, 61, 0.4)',
                  padding: '3px 8px',
                }}
              >
                C · CASH FLOW
              </span>
              <span
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  border: '0.5px solid #22272F',
                  padding: '3px 8px',
                }}
              >
                HIGH CONFIDENCE
              </span>
            </div>
            <p
              className="text-ink-secondary text-[14px] max-[719px]:text-[13px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                lineHeight: 1.55,
                margin: '12px 0 0',
              }}
            >
              14 invoices totaling $187,420 sitting past 90 days. Industry recovery rate on receivables past 120 days runs around 50%. Pattern suggests 4-6 customers with consistent late-pay behavior.
            </p>
          </div>
          <p
            className="text-signal-leak tabular-nums text-right text-[22px] max-[719px]:text-[18px] max-[719px]:text-left shrink-0 w-[140px] max-[719px]:w-auto"
            style={{ fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 500, margin: 0 }}
          >
            −$93,710
          </p>
        </div>
      </div>

      {/* Finding 2 */}
      <div className="flex gap-7 px-7 py-6 max-[719px]:px-5 max-[719px]:py-[18px]">
        <span
          className="text-ink-quaternary tabular-nums shrink-0 w-10 pt-0.5"
          style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '20px', fontWeight: 400 }}
        >
          02
        </span>
        <div className="flex flex-1 justify-between gap-7 max-[719px]:flex-col max-[719px]:gap-3">
          <div className="flex-1">
            <p
              className="text-ink-primary text-[18px] max-[719px]:text-[16px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 500,
                letterSpacing: 0,
                margin: 0,
              }}
            >
              Duplicate vendor payments
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: '8px' }}>
              <span
                className="text-signal-agent"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  border: '0.5px solid rgba(242, 179, 61, 0.4)',
                  padding: '3px 8px',
                }}
              >
                O · OPERATIONAL
              </span>
              <span
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '9px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  border: '0.5px solid #22272F',
                  padding: '3px 8px',
                }}
              >
                MEDIUM CONFIDENCE
              </span>
            </div>
            <p
              className="text-ink-secondary text-[14px] max-[719px]:text-[13px]"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 400,
                lineHeight: 1.55,
                margin: '12px 0 0',
              }}
            >
              11 transactions flagged as likely duplicates within 30-day windows across 7 vendors over the last 12 months. APQC benchmark: 0.5-2% of AP volume for businesses without active duplicate-payment controls.
            </p>
          </div>
          <p
            className="text-signal-leak tabular-nums text-right text-[22px] max-[719px]:text-[18px] max-[719px]:text-left shrink-0 w-[140px] max-[719px]:w-auto"
            style={{ fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 500, margin: 0 }}
          >
            −$42,180
          </p>
        </div>
      </div>

      {/* Bottom caption */}
      <div
        className="bg-surface-2 text-ink-tertiary"
        style={{
          padding: '14px 28px',
          borderTop: '0.5px solid #1A1E25',
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '11px',
          letterSpacing: '0.14em',
        }}
      >
        Sample only · Real X-Ray reports include 8-15 findings, ranked by recovery priority
      </div>
    </div>
  )
}
