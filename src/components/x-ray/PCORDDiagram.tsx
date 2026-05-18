type BucketEntry = {
  letter: string
  name: string
  descriptor: string
}

const BUCKETS: BucketEntry[] = [
  {
    letter: 'P',
    name: 'People cost and risk',
    descriptor: 'Hidden labor costs, turnover, overtime drift',
  },
  {
    letter: 'C',
    name: 'Cash flow visibility',
    descriptor: 'Working capital trapped in slow AR or inventory',
  },
  {
    letter: 'O',
    name: 'Operational leakage',
    descriptor: 'Process waste, duplicated work, vendor drift',
  },
  {
    letter: 'R',
    name: 'Revenue-side leakage',
    descriptor: 'Underpricing, uncollected AR, margin erosion',
  },
  {
    letter: 'D',
    name: 'Decision latency',
    descriptor: 'Slow decisions on stale or partial data',
  },
]

export function PCORDDiagram() {
  return (
    <div
      className="border border-rule-primary bg-surface-1"
      style={{ padding: '40px 32px', maxWidth: '760px' }}
    >
      <div className="grid grid-cols-5 gap-8 max-[959px]:grid-cols-3 max-[719px]:grid-cols-1 max-[719px]:gap-4">
        {BUCKETS.map((bucket) => (
          <div
            key={bucket.letter}
            className="flex flex-col items-center gap-3 text-center max-[719px]:flex-row max-[719px]:items-start max-[719px]:text-left max-[719px]:gap-4"
          >
            <span
              className="text-signal-agent shrink-0 leading-none text-[48px] max-[719px]:text-[36px] max-[719px]:w-8"
              style={{
                fontFamily: 'var(--font-inter-tight)',
                fontWeight: 600,
                letterSpacing: 0,
              }}
            >
              {bucket.letter}
            </span>
            <div className="flex flex-col items-center gap-2 max-[719px]:items-start">
              <p
                className="text-ink-primary text-center max-[719px]:text-left"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {bucket.name}
              </p>
              <p
                className="text-ink-tertiary text-center max-[719px]:text-left"
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: 1.45,
                  maxWidth: '120px',
                  margin: 0,
                }}
              >
                {bucket.descriptor}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="text-ink-tertiary text-center"
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '11px',
          letterSpacing: '0.14em',
          marginTop: '32px',
          marginBottom: 0,
        }}
      >
        5 areas · 95 risk variables · confidence levels on every finding
      </p>
    </div>
  )
}
