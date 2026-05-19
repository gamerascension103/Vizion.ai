'use client'
import { useEffect, useState } from 'react'

const TARGET = 3287280

function AnimatedRiskNumber({ delay = 1400 }: { delay?: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now() + delay
    let frame: number

    const tick = (now: number) => {
      if (now < start) {
        frame = requestAnimationFrame(tick)
        return
      }
      const t = Math.min(1, (now - start) / 1600)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(TARGET * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [delay])

  return <>{value.toLocaleString()}</>
}

export function RiskBanner() {
  return (
    <div
      className="flex items-center justify-between gap-x-6 rounded-[3px] pl-[26px] pr-[32px] py-[22px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-y-4"
      style={{
        background: 'linear-gradient(to right, rgba(227,104,66,0.06), rgba(227,104,66,0.02))',
        border: '0.5px solid var(--color-signal-leak-border)',
        borderLeftWidth: '2px',
        borderLeftColor: 'var(--color-signal-leak)',
        animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 1.15s both',
      }}
    >
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase text-ink-tertiary">
          Revenue at risk · 12 months
        </span>
        <p className="font-sans text-[13px] font-normal text-ink-secondary max-w-[280px]">
          Annualized cost of identified leaks across a representative mid-market operation.
        </p>
        <span className="mt-1 font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-ink-quaternary">
          Sample — not your data
        </span>
      </div>

      <div className="flex flex-col items-end max-[720px]:items-start">
        <span
          className="font-mono font-medium tabular-nums leading-none text-signal-leak"
          style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
        >
          −$<AnimatedRiskNumber />
        </span>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-ink-quaternary">
          Annualized
        </span>
      </div>
    </div>
  )
}
