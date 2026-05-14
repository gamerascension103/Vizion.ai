import type { Leak } from './types'

const LEAKS: readonly Leak[] = [
  {
    rank: '01',
    name: 'Unpaid invoices over 30 days',
    detail: '14 customers · largest: Henderson Mfg ($48,200)',
    monthly: '−$184,500',
    annual: '−$2,214,000',
  },
  {
    rank: '02',
    name: 'Overtime running 23% above plan',
    detail: '3 departments · warehouse leading',
    monthly: '−$42,800',
    annual: '−$513,600',
  },
  {
    rank: '03',
    name: 'Inventory sitting longer than 90 days',
    detail: '218 SKUs · $11,400/mo carrying cost',
    monthly: '−$28,300',
    annual: '−$339,600',
  },
  {
    rank: '04',
    name: 'Vendor pricing drift on top 12 SKUs',
    detail: 'Costs up 8.4% YoY, sell price unchanged',
    monthly: '−$14,200',
    annual: '−$170,400',
  },
  {
    rank: '05',
    name: 'Software you stopped using',
    detail: '7 subscriptions · no login in 60+ days',
    monthly: '−$4,140',
    annual: '−$49,680',
  },
]

export function LeaksPanel() {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between px-5 py-[10px]"
        style={{ borderBottom: '0.5px solid var(--color-rule-inner)' }}
      >
        <span className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-ink-tertiary">
          Money leaks · ranked by annual cost
        </span>
        <div className="hidden sm:flex items-center gap-6">
          <span className="font-mono text-[9px] font-medium tracking-[0.14em] uppercase text-ink-quaternary w-[88px] text-right">
            Monthly
          </span>
          <span className="font-mono text-[9px] font-medium tracking-[0.14em] uppercase text-ink-quaternary w-[100px] text-right">
            Annual
          </span>
        </div>
      </div>

      {LEAKS.map((leak, i) => (
        <div
          key={leak.rank}
          className="flex items-start gap-4 px-5 py-[14px]"
          style={{
            borderBottom:
              i < LEAKS.length - 1
                ? '0.5px solid var(--color-rule-inner)'
                : undefined,
          }}
        >
          <span className="font-mono text-[11px] font-medium tabular-nums text-ink-quaternary pt-[2px] shrink-0 w-[22px]">
            {leak.rank}
          </span>

          <div className="flex-1 min-w-0">
            <p className="font-sans text-[13px] font-normal tracking-[-0.005em] text-ink-primary leading-snug">
              {leak.name}
            </p>
            <p className="mt-[3px] font-sans text-[11px] font-normal text-ink-quaternary leading-snug">
              {leak.detail}
            </p>
          </div>

          <div className="hidden sm:flex items-start gap-6 shrink-0">
            <span className="font-mono text-[12px] font-medium tabular-nums text-ink-secondary w-[88px] text-right pt-[2px]">
              {leak.monthly}
            </span>
            <span className="font-mono text-[13px] font-medium tabular-nums text-signal-leak w-[100px] text-right pt-[2px]">
              {leak.annual}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
