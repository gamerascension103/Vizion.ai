import { Header } from '@/components/header'
import { Hero } from '@/components/hero/Hero'
import { Pain } from '@/components/pain'
import { XRay } from '@/components/x-ray'
import { CommandDeck } from '@/components/command-deck'
import { Watchdog } from '@/components/watchdog'
import { Engagement } from '@/components/engagement'

export default function Home() {
  return (
    <>
      <Header variant="homepage" />
      <Hero />
      <Pain />
      <XRay />
      <CommandDeck />
      <Watchdog />
      <Engagement />
    </>
  )
}
