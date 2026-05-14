'use client'
import { useEffect, useState } from 'react'

type Block = {
  label: string
  value: string
  sub?: string
  fill?: number
}

const BLOCKS: readonly Block[] = [
  { label: 'Revenue MTD', value: '$1,284,400', sub: 'of $1,800,000 target' },
  { label: 'Pace', value: '71.4%', sub: 'of month · day 16 of 22', fill: 71.4 },
  { label: 'Cash on hand', value: '$342,100', sub: 'as of yesterday' },
]

export function MonthSidebar() {
  const [fillWidth, setFillWidth] = useState(0)
  const [tickLeft, setTickLeft] = useState(0)

  useEffect(() => {
    const fillTimer = setTimeout(() => setFillWidth(71.4), 400)
    const tickTimer = setTimeout(() => setTickLeft(71.4), 650)
    return () => {
      clearTimeout(fillTimer)
      clearTimeout(tickTimer)
    }
  }, [])

  return (
    <div
      className="flex flex-col"
      style={{ borderLeft: '0.5px solid var(--color-rule-inner)' }}
    >
      <div
        className="px-5 py-[10px]"
        style={{ borderBottom: '0.5px solid var(--color-rule-inner)' }}
      >
        <span className="font-mono text-[9px] font-medium tracking-[0.16em] uppercase text-ink-tertiary">
          Jun 2026
        </span>
      </div>

      {BLOCKS.map((block, i) => (
        <div
          key={block.label}
          className="px-5 py-[18px]"
          style={{
            borderBottom:
              i < BLOCKS.length - 1
                ? '0.5px solid var(--color-rule-inner)'
                : undefined,
          }}
        >
          <span className="font-mono text-[9px] font-medium tracking-[0.14em] uppercase text-ink-quaternary">
            {block.label}
          </span>
          <p className="mt-[6px] font-mono text-[22px] font-medium tabular-nums text-ink-primary leading-none">
            {block.value}
          </p>
          {block.sub && (
            <p className="mt-[4px] font-sans text-[11px] font-normal text-ink-quaternary">
              {block.sub}
            </p>
          )}

          {block.fill !== undefined && (
            <div className="mt-[10px] relative h-[3px] rounded-full bg-rule-inner overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-signal-agent rounded-full"
                style={{
                  width: `${fillWidth}%`,
                  transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[7px] bg-ink-primary"
                style={{
                  left: `${tickLeft}%`,
                  transition: 'left 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
