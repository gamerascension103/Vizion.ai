import { Nav } from './Nav'
import { VeteranStamp } from './VeteranStamp'
import { Eyebrow } from './Eyebrow'
import { Hook } from './Hook'
import { Sub } from './Sub'
import { RiskBanner } from './RiskBanner'
import { Dashboard } from './Dashboard'
import { XRayGuarantee } from './XRayGuarantee'
import { CTAs } from './CTAs'

export function Hero() {
  return (
    <main className="min-h-screen bg-ground">
      <div className="mx-auto max-w-[1140px] px-8 max-[720px]:px-5 max-[380px]:px-5 pt-7 pb-9">
        <Nav />
        <VeteranStamp />

        <section className="mt-4">
          <Eyebrow />
          <Hook />
          <Sub />
          <RiskBanner />
          <Dashboard />
          <XRayGuarantee />
          <CTAs />
        </section>
      </div>
    </main>
  )
}
