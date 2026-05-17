import { Insignia } from './Insignia'

type BrandLockupProps = {
  pinSize?: number
  className?: string
}

export function BrandLockup({ pinSize = 280, className }: BrandLockupProps) {
  return (
    <div className={`flex flex-col items-center ${className ?? ''}`}>
      <Insignia size={pinSize} variant="full" />

      <div
        className="mt-5 text-ink-primary"
        style={{
          fontFamily: 'var(--font-inter-tight)',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '0.34em',
          paddingLeft: '0.34em',
        }}
      >
        VIZION&nbsp;&nbsp;CORP
      </div>

      <div
        className="mt-2.5 text-signal-agent"
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.24em',
        }}
      >
        Money leaks, made visible
      </div>
    </div>
  )
}
