import { VeteranStamp } from './VeteranStamp'
import { Eyebrow } from './Eyebrow'
import { Hook } from './Hook'
import { Sub } from './Sub'
import { RiskBanner } from './RiskBanner'
import { CTAs } from './CTAs'

export function Hero() {
  return (
    <main className="min-h-screen bg-ground pt-[120px] px-12 pb-24 max-[720px]:pt-16 max-[720px]:px-7 max-[720px]:pb-16 max-[380px]:px-5">
      <div style={{ maxWidth: '760px' }}>
        <VeteranStamp />

        <div style={{ height: '32px' }} />

        <Eyebrow />

        <div style={{ height: '24px' }} />

        <Hook />

        <div style={{ height: '48px' }} />

        <RiskBanner />

        <div style={{ height: '48px' }} />

        <Sub />

        <div style={{ height: '40px' }} />

        <p className="font-mono text-[10px] font-medium tracking-[0.22em] uppercase text-ink-tertiary text-center max-[720px]:text-[9px]">
          BACKED BY THE X-RAY GUARANTEE
        </p>

        <div style={{ height: '20px' }} />

        <CTAs />
      </div>
    </main>
  )
}
