export function AgentStrip() {
  return (
    <div
      className="flex items-center gap-3 px-5 py-[10px] bg-surface-2"
      style={{ borderTop: '0.5px solid var(--color-rule-inner)' }}
    >
      <span
        className="block w-[8px] h-[8px] rounded-full bg-signal-agent shrink-0"
        style={{
          animation: 'vh-pulse 2s ease-in-out infinite',
          boxShadow: '0 0 6px 1px color-mix(in srgb, var(--color-signal-agent) 45%, transparent)',
        }}
      />
      <p className="font-mono text-[10px] font-medium tracking-[0.12em] uppercase">
        <span className="text-signal-agent">Agent watching · 5 leaks</span>
        <span className="text-ink-quaternary">
          {' '}
          &nbsp;·&nbsp; Last sweep 4 min ago · No operator actions pending
        </span>
      </p>
    </div>
  )
}
