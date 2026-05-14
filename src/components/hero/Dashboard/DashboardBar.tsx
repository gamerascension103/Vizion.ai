'use client'
import { useEffect, useState } from 'react'

function pad(n: number) {
  return n < 10 ? '0' + n : String(n)
}

function LiveTimestamp() {
  const [ts, setTs] = useState('--:--')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTs(`${pad(now.getHours())}:${pad(now.getMinutes())}`)
    }
    update()
    const interval = setInterval(update, 30000)
    return () => clearInterval(interval)
  }, [])

  return <>UPDATED {ts}</>
}

export function DashboardBar() {
  return (
    <div
      className="flex items-center justify-between px-[14px] py-[10px] bg-surface-2"
      style={{ borderBottom: '0.5px solid var(--color-rule-inner)' }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-signal-agent border border-signal-agent px-[6px] py-[2px] rounded-[2px]">
          Phase 3
        </span>
        <span className="font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-ink-tertiary">
          ops-risk-dashboard.v3
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-mono text-[9px] font-medium tracking-[0.14em] uppercase text-ink-quaternary">
          Acme Operations · Q2 2026
        </span>
        <div className="flex items-center gap-2">
          <span
            className="block w-[6px] h-[6px] rounded-full bg-signal-agent"
            style={{ animation: 'vh-pulse 2s ease-in-out infinite' }}
          />
          <span className="font-mono text-[9px] font-medium tracking-[0.14em] uppercase text-ink-quaternary">
            <LiveTimestamp />
          </span>
        </div>
      </div>
    </div>
  )
}
